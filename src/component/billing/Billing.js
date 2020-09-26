import React from "react";
import { Link } from "react-router-dom";
import "./Billing.css"

const Billing = () => {
  // console.log(url);
  return (
    <React.Fragment>
      {/* <div className="header-wrapper"> */}
      <div className="container mt-4">
      <div className="row">
          <div className="col-12 col-md-6 col-lg-9 ml-auto">
          <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <ul class="navbar-nav ">
                        <li class="nav-item pl-2 font-weight-bold">
                          <a class="nav-link text-dark" id="top" href="#"><label className=" font-weight-bold">Draft</label></a>
                        </li>
                        <li class="nav-item px-5 ml-5 font-weight-bold">
                          <a class="nav-link text-dark" id="top" href=""><label className=" font-weight-bold">Sent</label></a>
                        </li>
                </ul>
              </nav>
          </div>
        <div className="col-12 col-md-6 col-lg-3 ml-auto">
          <div className="d-flex align-items-center mb-3">
            {/* <ul>
                          <Link>
                      <i class="fas fa-search"></i> Search</Link>
                      <Link>Action <span class="caret"></span></Link>
                      </ul> */}

            <form class="d-flex justify-content-center md-form form-sm mt-0">
              <i class="fas fa-search pt-2" aria-hidden="true"></i>
              <input
                class="form-control form-control-sm w-75 font-weight-bold"
                type="text"
                placeholder="Search"
                aria-label="Search"
                id="search_box"
              />
              {/* <input
                class="form-control form-control-sm ml-3 w-75"
                placeholder="Action"

                aria-label="Search"
              /> */}
              <Link
                className="right sm ml-3 w-75 pt-1"
                to="/"
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
              >
                Action <i class="fas fa-caret-down"></i>
              </Link>
            </form>
          </div>
        </div>
      </div>
      </div>
      <div className="container ml-auto">
          <div className="row text-center pt-2">
              <table className="table table-borderless">
                <tbody>
                <tr>
                  <th>Date</th>
                  <th>Number</th>
                  <th>Amount</th>
                  <th>Customer</th>
                  <th>Trip</th>
                  <th>Dates</th>
                </tr>
                <tr>
                  <th>Date</th>
                  <th>Number</th>
                  <th>Amount</th>
                  <th>Customer</th>
                  <th>Trip</th>
                  <th>Dates</th>
                </tr>
                <tr>
                  <th>Date</th>
                  <th>Number</th>
                  <th>Amount</th>
                  <th>Customer</th>
                  <th>Trip</th>
                  <th>Dates</th>
                </tr>
                </tbody>
              </table>
          </div>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
};

export default Billing;
