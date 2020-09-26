import React, { Component } from "react";
import Calender from './Calender';
// import "./DailyBoard.css";

class DispatchDailyBoard extends Component {
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
                      <label className="font-weight-bold">Daily Board</label>
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
        <Calender/>
        
      </div>
    );
  }
}

export default DispatchDailyBoard;
