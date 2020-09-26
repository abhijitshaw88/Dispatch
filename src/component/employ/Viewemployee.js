import React from "react";
import { Link } from "react-router-dom";

const Viewemployee = () => {
  // console.log(url);
  return (
    <React.Fragment>
      {/* <div className="header-wrapper"> */}
      <div className="container mt-4">
        <div className="row">
          <div className="text-right ml-auto">
            <div className="aggregate-button-wrapper">
              <button className="btn btn-secondary mb-4">
                <Link
                  to="/addEmployee"
                  style={{
                    textDecoration: "none",
                    color: "#eee",
                  }}
                >
                  Add Employee
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* <div
        className="content-wrapper"
        style={{
          background: "#fff",
          width: "98%",
          height: "60vh",
          margin: "1rem auto",
        }}
      > */}
        <div className="container ml-auto">
          <div className="row text-center">
        <table className="table table-bordered table-striped ">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Amar</td>
              <td>Dispatcher</td>
              <td>amar@gmail.com</td>
              <td>7676776767</td>
              <td>Mumbai</td>
            </tr>
          </tbody>
        </table>
        </div>
        </div>
      {/* </div> */}
    </React.Fragment>
  );
};

export default Viewemployee;
