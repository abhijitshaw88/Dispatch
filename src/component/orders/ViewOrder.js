import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import './Order.css';

class ViewOrder extends Component{
  constructor(){
    super()
    this.state={
      Odata: []
    }
  }

  async componentDidMount() {
        console.log("HEllo")
        console.log("handleClick");
        try {
          const response = await axios.get(
            "https://aggregate-dispatch.herokuapp.com/api/aggregate/customer",
            {
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
  // console.log(url);
  return (
    <React.Fragment>

      <div className="container mt-4">
        <div className="row pt-3">
          <div className="col-lg-12 p-0">
            <div className="navbar-nav navbar-expand-lg navbar-light">
              <div className="" id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item pb-3  ">
                        <a className="nav-link" id="top" href="#">
                        <label className=" " style={{fontSize:16, color:"black"}}>Order Request</label>
                        </a>
                    </li>
                  <li className="nav-item pb-3  pl-5">
                    <a className="nav-link" id="top" href="#">
                      <label className=" " style={{fontSize:16, color:"black"}}>Ongoing Order</label>
                    </a>
                  </li>
                  <li className="nav-item pb-3 pl-5 ">
                    <a className="nav-link float-right" id="top" href="">
                      <label className="" style={{fontSize:16, color:"black"}}>Upcoming Order</label>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

          <div className="row text-center">
            <table   className="table table-hover shadow-lg p-1 mb-3 bg-white rounded ">
              <thead className="thead-dark">
                <tr>
                  <th>S. No.</th>
                  <th>Customer Name</th>
                  <th>Customer Site</th>
                  <th>Order Qty.</th>
                  <th>Order Time</th>
                  <th>Order Summary</th>
                  <th>Status</th>

                </tr>
              </thead>
            </table>
          </div>
        </div>
    </React.Fragment>
  );
};
}

export default ViewOrder;
