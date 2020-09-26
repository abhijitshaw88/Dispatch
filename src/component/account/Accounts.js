import React from "react";
import { Link } from "react-router-dom";
import './Accounts.css';

const Accounts = () => {
  // console.log(url);
  return (
    <React.Fragment>
      {/* <div className="header-wrapper"> */}
      <div className="container mt-4">
      <div className="row">
        {/* <div className="col-12 col-md-6">
          <div className="d-flex align-items-center mb-3">
                      <div>Society: </div>
                      <div className="form-group mb-0 ml-2">
                          <select
                              className="custom-select"
                              value={society}
                              onChange={this.handleSocietyChange}
                          >
                              <option value="all">All Society</option>
                              {societies.map(s =>
                                  <option value={s}>{s}</option>
                              )}
                          </select>
                      </div>
                  </div>
        </div> */}
        <div className="col-12 col-md-6 col-lg-3 ml-auto pr-5 mr-4">
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
            {/* <i class="fas fa-caret-down"></i> */}
            {/* <div className="form-group mb-0 ml-2">
                          <input
                              type="text"
                              className="form-control"
                              value={searchTerm}
                              onChange={this.handleSearch}
                              placeholder="Search"
                          />
                      </div> */}
          </div>
        </div>
      </div>
      </div>
      <div className="container ml-auto">
          <div className="row text-center">
              <table className="table table-borderless">
                <tbody>
                <tr>
                  <th>Driver name</th>
                  <th>Phone number</th>
                  <th>Email</th>
                  <th>Account Number</th>
                </tr>
                <tr>
                  <th>Driver name</th>
                  <th>Phone number</th>
                  <th>Email</th>
                  <th>Account Number</th>
                </tr>
                <tr>
                  <th>Driver name</th>
                  <th>Phone number</th>
                  <th>Email</th>
                  <th>Account Number</th>
                </tr>
                </tbody>
              </table>
          </div>

      </div>
      {/* </div> */}
    </React.Fragment>
  );
};

export default Accounts;
