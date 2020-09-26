import React, { Component } from "react";
import "./User.css";
import { Link } from "react-router-dom";
import UserTab from './UserTab';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          Username: 1,
          Email: "Wasif",
          Contact: 21,
          Role: "wasif@email.com",
          Designation: "Manager",
          Edit: "Edit",
          Archieve: "Archieve",
        },
        {
          Username: 2,
          Email: "Ali",
          Contact: 19,
          Role: "ali@email.com",
          Designation: "Manager",
          Edit: "Edit",
          Archieve: "Archieve",
        },
        {
          Username: 3,
          Email: "Saad",
          Contact: 16,
          Role: "saad@email.com",
          Designation: "Manager",
          Edit: "Edit",
          Archieve: "Archieve",
        },
        {
          Username: 4,
          Email: "Asad",
          Contact: 25,
          Role: "asad@email.com",
          Designation: "Manager",
          Edit: "Edit",
          Archieve: "Archieve",
        },
      ],
    };
  }

  
  renderTableData() {
    return this.state.users.map((users, index) => {
      const {
        Username,
        Email,
        Contact,
        Role,
        Designation,
        Edit,
        Archieve,
      } = users; //destructuring
      return (
        <tr>
          <td>{Username}</td>
          <td>{Email}</td>
          <td>{Contact}</td>
          <td>{Role}</td>
          <td>{Designation}</td>
          <td>{Edit}</td>
          <td>{Archieve}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>

        


{/* <div className="container mt-4">
        <div className="row mt-4">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
              <div className="" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item font-weight-bold">
                    <a className="nav-link text-dark" id="top" href="/user">
                      <label className="font-weight-bold">User</label>
                    </a>
                  </li>
                  <li className="nav-item px-5 font-weight-bold">
                    <a className="nav-link" id="top" href="/role">
                      <label className=" font-weight-bold">Role</label>
                    </a>
                  </li>
                  <li className="nav-item font-weight-bold float-right">
                    <a className="nav-link float-right" id="top" href="/adduser">
                      <label className=" font-weight-bold ">Add User</label>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div> */}


        {/* <div className="container mt-4">
          <div className="row">
            <div className="col-lg-10">
              <nav class="navbar-na navbar-expand-lg navbar-light bg-light mt-5">
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                      <a class="nav-link" href="/user">
                        User
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/role">
                        Role
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-lg-2 float-right">
              <a class="nav-link" href="/adduser">
                Add User
              </a>
            </div>
          </div>
        </div> */}
        <div className="container ml-auto mt-5">
        <UserTab value={this.renderTableData()}/>
          {/* <div className="row text-center">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Role</th>
                  <th>Designation</th>
                  <th>Edit</th>
                  <th>Archieve</th>
                </tr>
              </thead>
              <tbody>{this.renderTableData()}</tbody>
            </table>
          </div> */}
        </div>
      </div>
      // </div>
    );
  }
}

export default User;
