import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
// import "./Addemployee.css";

const AddCustomer = () => {
  // state for tracking the form field values
  const [formValue, setFormValue] = useState({
    name: "",
    role: "",
    taxnumber:"",
    field:"",
    coordinator:"",
    telnum: "",
  });

  // destructuring state values
  const {
    name,
    role,
    taxnumber,
    field,
    coordinator,
    telnum,
  } = formValue;

  const handleInputChange = (name) => (e) => {
    setFormValue({
      ...formValue,
      [name]: e.target.value,
    });
  };

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
        <div className="container form-container mt-5">
          <div className="row d-flex justify-content-center m-auto">
            <div className="col-12 col-md-10 col-lg-12">
                  <form className="" >
                    <div className="form-group">
                      <div className="form-row">
                        <div className="col-lg-6">
                          <label>Company Name</label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            value={name}
                            onChange={handleInputChange("name")}
                          />
                        </div>
                        <div className="col-6">
                          <div className="form-group">
                            <label>Legal Structure</label>
                            <select
                              name="role"
                              id="role"
                              className="form-control"
                              onChange={handleInputChange("role")}
                              value={role}
                            >
                              <option value="" disabled selected hidden>
                                Select
                              </option>
                              <option value="aggregate">Dispatcher</option>
                              <option value="truck">Quarry Manager</option>
                              <option value="customer">Sales Department</option>
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
                            value={taxnumber}
                            onChange={handleInputChange("taxnumber")}
                          />
                        </div>
                        <div className="col-6">
                          <div className="form-group">
                            <label>Contact Number</label>
                            <input
                              type="number"
                              name="telnum"
                              id="telnum"
                              className="form-control"
                              value={telnum}
                              onChange={handleInputChange("telnum")}
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
                            value={field}
                            onChange={handleInputChange("field")}
                          />
                        </div>
                        <div className="col-lg-6">
                          <label>Company Coordinator</label>
                          <input
                            type="text"
                            name="coordinator"
                            id="coordinator"
                            className="form-control"
                            value={coordinator}
                            onChange={handleInputChange("coordinator")}
                          />
                        </div>
                        <div className="col-lg-6">
                          <label>Site Name</label>
                          <input
                            type="text"
                            name="coordinator"
                            id="coordinator"
                            className="form-control"
                            onChange={handleInputChange("coordinator")}
                          />
                        </div>
                        <div className="col-lg-6">
                          <label>Site Address</label>
                          <input
                            type="text"
                            name="coordinator"
                            id="coordinator"
                            className="form-control"
                            value={coordinator}
                            onChange={handleInputChange("coordinator")}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group signup-button-wrapper">
                       <button
                        className="btn btn-block py-2"
                        style={{
                          backgroundColor: "grey",
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                     <Link
                            to="/addcompanysite"
                            style={{
                              textDecoration: "none",
                              color: "#323032",
                              fontWeight: "bold",
                            }}
                          >

                            Add Company Site
                          </Link>
                      </button>
                    </div>
                  </form>
            </div>
          </div>
        </div>
    </div>
  );
};

export default AddCustomer;
