import React, { Component } from "react";
import "./DailyBoard.css";

class ProjectDailyBoard extends Component {
  render() {
    return (
      <div className="container mt-4">
        <div className="row mt-4">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
              <div className="" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item font-weight-bold">
                    <a className="nav-link text-dark" id="top" href="#">
                      <label className=" font-weight-bold">Daily Board</label>
                    </a>
                  </li>
                  <li className="nav-item px-5 font-weight-bold">
                    <a className="nav-link" id="top" href="role1">
                      <label className=" font-weight-bold">All Requests</label>
                    </a>
                  </li>
                  <li className="nav-item px-5 font-weight-bold">
                    <a className="nav-link" id="top" href="role1">
                      <label className=" font-weight-bold">Received</label>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-heading">Title</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <h5 class="card-footer">Footer</h5>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Title</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <h5 class="card-footer">Footer</h5>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <h4 class="card-title">Customer Name</h4>
              <h5 class="card-subtitle">company name</h5>
              <div class="card-body">
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>

              <p className="footer" style={{ backgroundColor: "grey" }}>
                Customer's address
              </p>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDailyBoard;
