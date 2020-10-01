import React,{useState} from "react";
import { Link } from "react-router-dom";
import './Customer.css';
import axios from 'axios';


axios.interceptors.request.use(
  config => {
    config.headers.authorization=`Bearer ${localStorage.getItem("tokenKey")}`;
    return config;
  }
)
// const res = await axios.get(`https://aggregate-dispatch.herokuapp.com/api/aggregate/customer`);
// console.log(res)
class ViewCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyname:'',
      email:'',
      contact:'',
      sites:'',
      tokenvalue: localStorage.getItem("tokenKey")
    };
      this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
        console.log("HEllo")
        this.handleClick();
  }
async handleClick() {
  try {
    const response = await axios.get(
      `https://aggregate-dispatch.herokuapp.com/api/aggregate/customer`,
      (axios.defaults.headers.common[
        "x-access-token"
      ] = this.state.tokenvalue),
      {
        params: {
          aggregate_company_id: '11'
        },
        headers: {
          "content-type": "application/json"
        }
      }
    );
    this.setState(
      {
        companyname: response.data
      },
      () => {
        console.log("helloworld",response);
      }
    );
  } catch (error) {
    console.log("Error",error);
  }
}
  render(){
      return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="text-right">
            <div className="">
                <Link
                  to="#"

                >
                <label id="top"   style={{fontSize:16, color: "black" }}>  Company</label>
                </Link>
            </div>
          </div>
          <div className="text-right ml-auto">
            <div className="">
                <Link
                  to="/addcustomer"
                    style={{fontSize:16, color: "black" }}
                >
                  <label id="top"   style={{fontSize:16, color: "black" }}>Add  Company </label>
                </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container ml-auto">
        <div className="row text-center pt-3">
          <table
            className="table table-bordered"
          >
            <thead>
              <tr>
                <th>Company name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Sites</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>xyz</td>
                <td>amar@gmail.com</td>
                <td>7676776767</td>
                <td></td>
                <td><a>Add</a></td>
                <td><a>Edit</a></td>
                <td><a>Archieve</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
  }
};

export default ViewCustomer;
