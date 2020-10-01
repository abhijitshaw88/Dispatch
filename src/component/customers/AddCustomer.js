import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import Googlemap from '../location/Location';
import Google_map from '../Google_map';
// import "./Addemployee.css";

class AddCustomer extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     name: "",
     role: "",
     taxnumber:"",
     field:"",
     coordinator:"",
     telnum: "",
     sitename:"",
     siteadd:""
   };

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }
 handleChange(evt) {
   this.setState({ [evt.target.name]: evt.target.value })
 }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }


  render(){
  return (
    <div>
        <div className="container mt-5">
          <div className="row">
            <div className="text-right">
              <div className="aggregate-button-wrapper">
                  <Link
                    to="/addcustomer"
                    style={{fontSize:16, color: "black" }}
                  >
                <label id="top"   style={{fontSize:16, color: "black" }}>Company </label>
                  </Link>

              </div>
            </div>
            <div className="text-right ml-auto">
              <div className="aggregate-button-wrapper">
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
        <div className="container form-container mt-3 ">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-12 p-0">
                  <form className=""  onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <div className="form-row">
                        <div className="col-lg-6">
                          <label>Company Name</label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.handleChange}
                          />
                        </div>
                        <div className="col-6">
                          <div className="form-group">
                            <label>Legal Structure</label>
                            <select
                              name="role"
                              id="role"
                              className="form-control"
                              value={this.state.role}
                              onChange={this.handleChange}
                            >
                              <option value="" disabled selected hidden>
                                Select
                              </option>
                              <option value="Dispatcher">Dispatcher</option>
                              <option value="Quarry Manager">Quarry Manager</option>
                              <option value="Sales Department">Sales Department</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <label>Tax number</label>
                          <input
                            type="text"
                            name="taxnumber"
                            id="taxnumber"
                            className="form-control"
                            value={this.state.taxnumber}
                            onChange={this.handleChange}

                          />
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Contact Number</label>
                            <input
                              type="number"
                              name="telnum"
                              id="telnum"
                              className="form-control"
                              value={this.state.telnum}
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <label>Field ABC</label>
                          <input
                            type="text"
                            name="field"
                            id="field"
                            className="form-control"
                            value={this.state.field}
                            onChange={this.handleChange}

                          />
                        </div>
                        <div className="col-lg-6">
                          <label>Company Coordinator</label>
                          <input
                            type="text"
                            name="coordinator"
                            id="coordinator"
                            className="form-control"
                            value={this.state.coordinator}
                            onChange={this.handleChange}
                          />
                        </div>
                        <div className="col-lg-6">
                          <label>Site Name</label>
                          <input
                            type="text"
                            name="sitename"
                            id="sitename"
                            className="form-control"
                            value={this.state.sitename}
                            onChange={this.handleChange}
                          />
                        </div>
                        <div className="col-lg-6">
                          <label>Site Address</label>
                          <input
                            type="text"
                            name="siteadd"
                            id="siteadd"
                            className="form-control"
                            value={this.state.add}
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
                          backgroundColor: "grey",
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
  );
}
};

export default AddCustomer;
