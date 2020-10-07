import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';
import './Order.css';

class ViewOrder extends Component{
  constructor(){
    super()
    this.state={
      fields: []
    }
  }

  componentDidMount() {
    let fields = this.state.fields;
    Axios.get("https://api/aggregate/order").then((res) => {
      this.setState({ fields: res.data, loading: false });
      console.log({ fields: res.data });
    })
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
            <table className="table table-bordered table-striped">
              <thead>
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
              <tbody>
              {this.state.fields.map((fields)=>
                      <tr key={fields.id}>
                        <td>{fields.Sno}</td>
                        <td>{fields.name}</td>
                        <td>{fields.site}</td>
                        <td>{fields.qty}</td>
                        <td>{fields.time}</td>
                        <td>{fields.summary}</td>
                        <td>{fields.status}</td>
                      </tr>
                    )}
              </tbody>
            </table>
          </div>
        </div>
    </React.Fragment>
  );
};
}

export default ViewOrder;
