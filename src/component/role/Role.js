import React, { Component } from "react";
// import './User.css';
import { Link } from "react-router-dom";

class Role extends Component {
  constructor() {
    super();
    this.state = {
      roles: [
        { role: 1, Task: "", Edit: "Edit" },
        { role: 2, Task: "", Edit: "Edit" },
        { role: 3, Task: "", Edit: "Edit" },
        { role: 4, Task: "", Edit: "Edit" },
      ],
    };
  }

  renderTableData() {
    return this.state.roles.map((roles, index) => {
      const { role, Task, Edit } = roles; //destructuring
      return (
        <tr>
          <td>{role}</td>
          <td>{Task}</td>
          <td>{Edit}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-10">
              <nav class="navbar navbar-expand-lg navbar-light bg-white">
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
              <a class="nav-link" href="/addrole">
                Add Role
              </a>
            </div>
          </div>
        </div>
        <div className="container ml-auto">
          <div className="row text-center">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Task Priviledge</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>{this.renderTableData()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Role;
