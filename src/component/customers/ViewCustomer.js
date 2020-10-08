import React,{useState} from "react";
import { Link } from "react-router-dom";
import './Customer.css';
import axios from 'axios';
import Table from './Table';
import EditCust from './EditCust';

class ViewCustomer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Cdata: [],
      tokenvalue: localStorage.getItem("tokenKey")
    };
  }

  async componentDidMount() {
        console.log("HEllo")
        console.log("handleClick");
        try {
          const response = await axios.get(
            "https://aggregate-dispatch.herokuapp.com/api/aggregate/customer",
            {
              params: {
                aggregate_company_id: '41'
              },
              headers: {
                 "x_auth_token": `${this.state.tokenvalue}`,
                 "content-type": "application/json"
              }
            }
          );
          this.setState(
            {
              Cdata: response.data.customers
            },
            () => {
              console.log("helloworld",this.state.Cdata[0]);
              }
          );
        } catch (error) {
          console.log("Error",error);
        }
  }
  render(){
    console.log("Render",this.state.Cdata);
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
                <th>State</th>
                <th>Edit Details</th>
              </tr>
            </thead>
            <tbody>{
            this.state.Cdata.map((item, key) =>
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone_no}</td>
                <td>{item.state}</td>
                <td><EditCust data={item}/></td>
              </tr>
            )
          }
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
  }
};

export default ViewCustomer;
