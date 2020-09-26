import React, { Component } from "react";
import "./User.css";
import { Link } from "react-router-dom";

class AddUser extends Component {
  constructor() {
    super();
    this.state = {
      adduser: [
        { role: 1, View: "", edit: "", add: "" },
        { role: 2, View: "", edit: "", add: "" },
        { role: 3, View: "", edit: "", add: "" },
        { role: 4, View: "", edit: "", add: "" },
      ],
      adduservertical: [{ username: "", email: "", role: "", designation: "" }],
    };
  }

  renderTableData() {
    return this.state.adduser.map((adduser, index) => {
      const { role, view, edit, add } = adduser; //destructuring
      return (
        <tr>
          <td>{role}</td>
          <td>{view}</td>
          <td>{edit}</td>
          <td>{add}</td>
        </tr>
      );
    });
  }

  renderVerticalTableData() {
    return this.state.adduservertical.map((adduservertical, index) => {
      const { username, email, role, designation } = adduservertical; //destructuring
      return (
        <tr>
          <td>{username}</td>
          <td>{email}</td>
          <td>{role}</td>
          <td>{designation}</td>
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
                    <li class="nav-item px-5 font-weight-bold active">
                      <a class="nav-link" href="/user">
                        User
                      </a>
                    </li>
                    <li class="nav-item px-5 font-weight-bold">
                      <a class="nav-link" href="/role">
                        Role
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col-lg-2 float-right font-weight-bold">
              <a class="nav-link" href="/adduser">
                Add User
              </a>
            </div>
          </div>
        </div>
        <div className="container ml-auto">
          <div className="row text-center">
            <table className="table table-bordered ">

            {/* <table style="width:100%"> */}
  <tr>
    <th>Username:</th>
    <td colspan="3"></td>
  </tr>
  <tr>
    <th>Email:</th>
    <td colspan="3"></td>
  </tr>
  <tr>
    <th>Role:</th>
    <td colspan="3"></td>
  </tr>
  <tr>
    <th>Designation:</th>
    <td colspan="3"></td>
  </tr>
  <tr>
    <th>Any extra role</th>
    <th>View</th>
    <th>Edit</th>
    <th>Add</th>
  </tr>
  <tr>
    <td>Task 1</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Task 2</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Task 3</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>

                {/* <tbody>
                                
              <tr>
                <th>Username:</th>
                <td></td>
              </tr>
              <tr>
                <th>Email:</th>
                <td></td>
              </tr>
              <tr>
                <th>Role:</th>
                <td></td>
              </tr>
              <tr>
                <th>Designation: </th>
                <td></td>
              </tr>
                </tbody> */}

              {/* <thead>
                <td>
                  <th>Username: </th>
                  <th>Email: </th>
                  <th>Role: </th>
                  <th>Designation: </th>
                </td>
              </thead> */}

              {/* <tbody>{this.renderVerticalTableData()}</tbody> */}
              {/* <tbody>
              <thead>
                <tr>
                  <th>Any Extra Role</th>
                  <th>View</th>
                  <th>Edit</th>
                  <th>Add</th>
                </tr>
              </thead>
              </tbody>
              <tbody>{this.renderTableData()}</tbody>
            </table> */}
          </div>
        </div>
      </div>
    );
  }
}

export default AddUser;
