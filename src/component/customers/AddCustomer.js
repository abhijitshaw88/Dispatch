import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import Googlemap from '../location/Location';
import Google_map from '../Google_map';
import axios from "axios";
// import "./Addemployee.css";

class AddCustomer extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     address_line_1: "",
     address_line_2: "",
     city: "",
     email: "",
     name: "",
     phone_no: "",
     pincode: "",
     state: "",
     password:"",
     tokenvalue: localStorage.getItem("tokenKey")
   };

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }
 handleChange(evt) {
   this.setState({ [evt.target.name]: evt.target.value })
 }

  handleSubmit= async event => {
    event.preventDefault();
    //console.log(this.state);
    const user = {
      address_line_1: this.state.address_line_1,
      address_line_2:  this.state.address_line_1,
      city: this.state.city,
      email: this.state.email,
      name: this.state.name,
      phone_no: this.state.phone_no,
      pincode: this.state.pincode,
      state: this.state.state,
      password: this.state.password
   };
   console.log(user);
    try {
      const response =
        await axios.post(
        `https://aggregate-dispatch.herokuapp.com/api/aggregate/customer`,
         user ,
        {
          params: {
            aggregate_company_id: '41'
          },
          headers: {
             "x_auth_token": `${this.state.tokenvalue}`,
             "content-type": "application/json"
          }
        });
    } catch (error) {
      alert(error);
      console.log(error);
    }
  }


  render(){
  return (
    <div>
        <div className="container mt-5">
          <div className="row">
            <div className="text-right">
              <div className="aggregate-button-wrapper">
                  <Link
                    to="/viewcustomer"
                    style={{fontSize:16, color: "black" }}
                  >
                <label id="top"   style={{fontSize:16, color: "black" }}>Customer </label>
                  </Link>

              </div>
            </div>
            <div className="text-right ml-auto">
              <div className="aggregate-button-wrapper">
                  <Link
                    to="/addcustomer"
                      style={{fontSize:16, color: "black" }}
                  >
                  <label id="top"   style={{fontSize:16, color: "black" }}>Add  Customer </label>
                  </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container form-container mt-3 ">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-12 p-0">
              <div class="card shadow-lg p-1 mb-3 bg-white rounded">
                <div class="card-body">
                  <form className=""  onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <div className="form-row">
                        <div className="col-lg-6">
                          {/* <label>Company name</label>*/}
                          <input
                            type="text"
                            name="name"
                            placeholder="company name"
                            id="name"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.handleChange}
                          />
                        </div>
                        <div className="col-6">
                          <div className="form-group">
                            {/* <label>Email</label>*/}
                            <input
                              type="text"
                              name="email"
                                placeholder="email"
                              id="email"
                              className="form-control"
                              value={this.state.email}
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                        {/*   <label>Contact number</label>*/}
                          <input
                            type="text"
                            name="phone_no"
                            placeholder="Contact"
                            id="phone_no"
                            className="form-control"
                            value={this.state.phone_no}
                            onChange={this.handleChange}

                          />
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            {/*<label>Address 1:</label>*/}
                            <input
                              type="text"
                              name="address_line_1"
                                placeholder="Address"
                              id="address_line_1"
                              className="form-control"
                              value={this.state.address_line_1}
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                          {/*   <label>Address 2:</label>*/}
                            <input
                              type="text"
                                placeholder="Address"
                              name="address_line_2"
                              id="address_line_1"
                              className="form-control"
                              value={this.state.address_line_2}
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                        {/*   <label>City</label>*/}
                          <input
                            type="text"
                              placeholder="city"
                            name="city"
                            id="city"
                            className="form-control"
                            value={this.state.city}
                            onChange={this.handleChange}
                          />
                        </div>
                        <div className="col-lg-6">
                          {/* <label>State</label>*/}
                          <input
                            type="text"
                            name="state"
                            id="state"
                              placeholder="State"
                            className="form-control"
                            value={this.state.state}
                            onChange={this.handleChange}
                          />
                        </div>
                        <div className="col-lg-6">
                        {/*   <label>Pin</label>*/}
                          <input
                            type="text"
                              placeholder="Pin"
                            name="pincode"
                            id="pincode"
                            className="form-control"
                            value={this.state.pincode}
                            onChange={this.handleChange}
                          />
                        </div>
                        <div className="col-lg-6 pt-2">
                        {/*   <label>Password</label>*/}
                          <input
                            type="password"
                            name="password"
                            id="password"
                              placeholder="password"
                            className="form-control"
                            value={this.state.password}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                    </div>
                      <div className="form-group" style={{ height: '30vh', width: '100%' }}>
                        <Googlemap/>
                    </div>
                    <div className="form-group signup-button-wrapper">
                       <button
                       type="submit"
                        className="btn btn-block py-2"
                        style={{
                          backgroundColor:" #2A707D",
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                            Add Company Site
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
};

export default AddCustomer;
