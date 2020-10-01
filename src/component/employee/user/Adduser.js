import React, { Component } from "react";
import "./User.css";
import { Link } from "react-router-dom";
import './AddUser.css';


class Adduser extends Component {
  constructor() {
    super();
    this.state = {
      adduser: [
        { role: 1, View: "", edit: "", add: "" },
        { role: 2, View: "", edit: "", add: "" },
        { role: 3, View: "", edit: "", add: "" },
        { role: 4, View: "", edit: "", add: "" },
      ],
      username: "",
      email: "",
      role: "",
      designation: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
      console.log( evt.target.name);
    console.log( this.state.username);
  }

   handleSubmit(event) {
     event.preventDefault();
     console.log(this.state);
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
          <div className="col-lg-11  p-0">
            <nav class="navbar navbar-expand-lg navbar-light justify-content-between ">
                <div class="" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item ">
                      <Link className="nav-link text-dark p-0" id="top" to="/viewuser"><label   className=""  style={{fontSize:16, color: "black" }}>User</label></Link>
                    </li>
                    <li class="nav-item px-5 ml-5">
                      <Link className="nav-link text-dark p-0" id="top" to="/role1"><label   className=""  style={{fontSize:16, color: "black" }}>Role</label></Link>
                    </li>
                  </ul>
                </div>
            </nav>
          </div>
          <div className="col-lg-1  p-0">
            <Link className="nav-link text-dark" to="/adduser"  className=""  style={{fontSize:16, color: "black" }}>Add User<i class="fas fa-play pl-1" style={{ color: "#2A707D"}}></i></Link>
          </div>
          </div>
        </div>
          <div className="container ml-auto pt-3 ">
            <div className="row pl-3">
            <form className=" w-100" onSubmit={this.handleSubmit}>
                <div class="form-group row">
                  <label for="username" class="col-sm-2 col-form-label">Username</label>
                <div class="col-sm-10 pl-5">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="form-control"
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                </div>
                </div>
                <div class="form-group row">
                <label  class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10 pl-5">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                </div>
                <div class="form-group row">
                <label for="Role" class="col-sm-2 col-lg-2 col-form-label">Role</label>
                <div class="col-sm-10 col-lg-10 pl-5">
                    <input
                    type="text"
                    name="role"
                    id="role"
                    className="form-control"
                    value={this.state.role}
                    onChange={this.handleChange}/>
                </div>
                </div>
                <div class="form-group row">
                <label for="designation" class="col-sm-2 col-form-label">Designation</label>
                <div class="col-sm-10 pl-5">
                    <input
                    type="text"
                    name="designation"
                    id="designation"
                    className="form-control"
                    value={this.state.designation}
                    onChange={this.handleChange}/>
                </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                    <table class="table table-bordered">
                          <thead>
                              <tr>
                                <th scope="col"  style={{ textAlign :"center"}} >Any Extra Role</th>
                                <th scope="col"  style={{ textAlign :"center"}}>View</th>
                                <th scope="col"  style={{ textAlign :"center"}}>Edit</th>
                                <th scope="col"  style={{ textAlign :"center"}}>Add</th>
                              </tr>
                          </thead>
                          <tbody>
                            <tr className="align-text-middle">
                                <td  style={{ textAlign :"center"}}>Task1</td>
                                <td className="pl-4" style={{ textAlign :"center"}}><input type="checkbox" className="form-check-input" id="exampleCheck1"/></td>
                                <td className="pl-4" style={{ textAlign :"center"}}><input type="checkbox" className="form-check-input" id="exampleCheck1"/></td>
                                <td className="pl-4" style={{ textAlign :"center"}}><input type="checkbox" className="form-check-input" id="exampleCheck1"/></td>
                            </tr>
                          </tbody>
                    </table>
                    </div>
                </div>

                <div className="row float-right pr-3">
                  <button type="submit" className="btn btn-secondary float-right">Save</button>
                </div>
              </form>
            </div>
        </div>
      </div>
    );
  }
}

export default Adduser;
