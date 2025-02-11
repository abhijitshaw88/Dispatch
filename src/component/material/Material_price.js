import React,{useState} from "react";
import { Link } from "react-router-dom";
import AddPrice from "./AddPrice";
import EditPrice from "./EditPrice";
import './Material.css';
import axios from 'axios';

class Material_price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Pdata: [],
      tokenvalue: localStorage.getItem("tokenKey")
    };
  }

  async componentDidMount() {
        console.log("HEllo")
        console.log("handleClick");
        try {
          const response = await axios.get(
            "https://aggregate-dispatch.herokuapp.com/api/aggregate/price",
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
              Pdata: response.data.customers
            },
            () => {
              console.log("helloworld",this.state.Pdata);
              }
          );
        } catch (error) {
          console.log("Error",error);
        }
  }
  render(){
  return (
    <div>
      <div className="container">
          <div className="row pt-5">
            <div className="col-lg-12 p-0">
                <nav class="navbar navbar-expand-lg navbar-light ml-auto p-0">
                    <div class="w-100" id="navbarNav">
                      <ul class="navbar-nav w-100 justify-content-between ">
                        <li class="nav-item">
                          <ul class="navbar-nav">
                          <li>
                              <a className="nav-link" id="top" href="material-color"><label className=""  style={{fontSize:16, color: "black" }}>Color</label></a>
                          </li>
                          <li>
                                <a class="nav-link" id="top" href="material-size"><label className=""  style={{fontSize:16, color: "black" }}>Size</label></a>
                          </li>
                          </ul>
                        </li>
                        <li class="nav-item pl-5  float-right ">
                          <a class="nav-link" id="top"  href="material-price"><label className="" style={{fontSize:16, color: "black" }}>Price</label></a>
                        </li>
                      </ul>
                    </div>
                </nav>
            </div>
          </div>

          <div className="row text-center pt-3">
              <table className="table table-bordered">
                <thead>
                <tr>
                  <th>Sl No</th>
                  <th>Material Color</th>
                  <th>Material size</th>
                  <th>Price</th>
                </tr>
                </thead>
                <tbody>{
                this.state.Pdata.map((item, key) =>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.color}</td>
                    <td>{item.size}</td>
                    <td>{item.price}</td>
                  </tr>
                )
              }
                </tbody>
              </table>
          </div>
          <div className="row float-right">
            <AddPrice/>
          </div>
      </div>
    </div>
  )
}
};

export default Material_price;
