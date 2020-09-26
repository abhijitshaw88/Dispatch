import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Addemployee.css";

const AddEmployee = () => {
  // state for tracking the form field values
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    role: "",
    address: "",
    state: "",
    city: "",
    pincode: "",
    telnum: "",
  });

  // destructuring state values
  const {
    name,
    email,
    role,
    address,
    state,
    city,
    pincode,
    telnum,
  } = formValue;

  const handleInputChange = (name) => (e) => {
    setFormValue({
      ...formValue,
      [name]: e.target.value,
    });
  };

  return (
    // <div
    //   className="add-employee-wrapper"
    //   style={{ background: '#fff', height: 'calc(100vh - 10.75rem)' }}
    // >
    <div className="container form-container mt-5">
      <div className="row d-flex justify-content-center m-auto">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="addemployee-form-wrapper">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Add New Employee</h5>
                {/* <div className="heading">
                  <p>New Employee</p>
                </div> */}
                <form>
                  <div className="form-group">
                    <label>Employee Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      value={name}
                      onChange={handleInputChange("name")}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      value={email}
                      onChange={handleInputChange("email")}
                    />
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-7">
                        <div className="form-group">
                          <label>Phone Number</label>
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
                      <div className="col-5">
                        <div className="form-group">
                          <label>Role</label>
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
                    </div>
                  </div>

                  <div className="form-group signup-button-wrapper">
                    <button className="btn btn-secondary btn-block py-2">
                      Create Employee
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default AddEmployee;
