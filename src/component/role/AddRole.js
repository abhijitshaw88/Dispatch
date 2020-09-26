import React, { Component } from "react";
// import './User.css';
import { Link } from "react-router-dom";

class AddRole extends Component {
  constructor() {
    super();
    this.state = {
      addrole: [
        { task: 1, View: "", Edit: "Edit", Add: "" },
        { task: 2, View: "", Edit: "Edit", Add: "" },
        { task: 3, View: "", Edit: "Edit", Add: "" },
        { task: 4, View: "", Edit: "Edit", Add: "" },
      ],
    };
  }

  renderTableData() {
    return this.state.addrole.map((addrole, index) => {
      const { task, View, Edit, Add } = addrole; //destructuring
      return (
        <tr>
          <td>{task}</td>
          <td>{View}</td>
          <td>{Edit}</td>
          <td>{Add}</td>
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
                  <th>Task</th>
                  <th>View</th>
                  <th>Edit</th>
                  <th>Add</th>
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

export default AddRole;
