import React from "react";
import { Link } from "react-router-dom";
const Fleet = () => {
  // console.log(url);
  return (
    <React.Fragment>
      {/* <div className="header-wrapper"> */}
      <div className="container mt-4">
      <div className="row">
      <div className="col-lg-12">
          <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <ul class="navbar-nav">
                  <li class="nav-item pl-3 font-weight-bold">
                    <a class="nav-link text-dark" id="top" href="#"><label className=" font-weight-bold">Driver</label></a>
                  </li>
                  <li class="nav-item px-5 ml-5 font-weight-bold">
                    <a class="nav-link text-dark" id="top" href=""><label className=" font-weight-bold">Choose Truck</label></a>
                  </li>
                </ul>
          </nav>
        </div>
      </div>
      </div>
      <div className="container ml-auto">
          <div className="row text-center pt-2">
              <div className="col-8">
              <table className="table table-borderless">
                <tbody>
                <tr>
                  <th>Truck Type</th>
                  <th>Truck Licence Plate</th>
                  <th>Grocess Weight</th>
                </tr>
                <tr>
                  <th><img src="../images/logo2.png" class="img-fluid"></img></th>
                  <th>Truck Licence Plate</th>
                  <th>Grocess Weight</th>
                </tr>
                </tbody>
              </table>
              </div>
          </div>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
};

export default Fleet;
