import React, { Component } from "react";
import './Notifications.css';
import { Link } from "react-router-dom";

export default class extends Component {
render = () => {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 ml-auto">
            <div className="d-flex align-items-center mb-3">
              <form class="d-flex justify-content-center md-form form-sm mt-0">
                <i class="fas fa-search" aria-hidden="true"></i>
                <input
                  class="form-control form-control-sm ml-3 w-75"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  style={{
                      color:"black",
                      borderTop: "Hidden",
                      borderRight: "Hidden",
                      borderLeft: "Hidden"
                  }}
                />
                <Link className="right sm ml-3 w-75" 
                to="/"
                style={{
                    color:"black",
                    textDecoration: "none"
                    }}>
            Action <i class="fas fa-caret-down"></i>
          </Link>
              </form>
            </div>
          </div>
        </div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Customer Detail</th>
            </tr>
          </thead>
          <tbody>
                <tr>
                  <td>Customer A has accepted his invoice</td>
                  <td>See Details  <i class="fas fa-caret-right"></i></td>
                </tr>
                <tr>
                  <td>Customer B's invoice is still pending</td>
                  <td>See Details  <i class="fas fa-caret-right"></i></td>
                </tr>
              </tbody>
        </table>
      </div>
    );
  };
}
