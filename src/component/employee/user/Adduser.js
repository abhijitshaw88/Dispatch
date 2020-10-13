import React, { Component } from "react";
import "./User.css";
import { Link } from "react-router-dom";
import './AddUser.css';
import axios from "axios";


class Adduser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      role: "",
      designation: "",
      phone_no:"",
      password:"",
      view:true,
      edit:true,
      add:true,
      tokenvalue: localStorage.getItem("tokenKey")
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }
  handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({
        [name]: value
      });
  }
   handleSubmit= async event => {
     event.preventDefault();
     //console.log(this.state);
     const user = {
       aggregate_company_id: 41,
       name: this.state.username,
       email:  this.state.email,
       phone_no: this.state.phone_no,
       user_role: this.state.role,
       password: this.state.password,
       view_user:this.state.view,
       edit_user:this.state.edit,
       add_user:this.state.add
    };
    console.log(user);
     try {
       const response =
         await axios.post(
         `https://aggregate-dispatch.herokuapp.com/api/aggregate/addUser`,
          user ,
         {
           params: {
             aggregate_company_id: '41'
           },
           headers: {
              "x_auth_token": `${this.state.tokenvalue}`,
              "content-type": "application/json"
           }
         });
     } catch (error) {
       alert(error);
       console.log(error);
     }
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
                <label for="Role" class="col-sm-2 col-lg-2 col-form-label">Contact</label>
                <div class="col-sm-10 col-lg-10 pl-5">
                    <input
                    type="text"
                    name="phone_no"
                    id="phone_no"
                    className="form-control"
                    value={this.state.phone_no}
                    onChange={this.handleChange}/>
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
                <label for="Role" class="col-sm-2 col-lg-2 col-form-label">Password</label>
                <div class="col-sm-10 col-lg-10 pl-5">
                    <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    value={this.state.password}
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
                                <td className="pl-4" style={{ textAlign :"center"}}>
                                  <input
                                    name="view"
                                    type="checkbox"
                                    checked={this.state.view}
                                    onChange={this.handleInputChange}
                                    >
                                  </input>
                                </td>
                                <td className="pl-4" style={{ textAlign :"center"}}>
                                  <input
                                    name="edit"
                                    type="checkbox"
                                    checked={this.state.edit}
                                    onChange={this.handleInputChange}
                                    >
                                  </input>
                                </td>
                                <td className="pl-4" style={{ textAlign :"center"}}>
                                  <input
                                    name="add"
                                    type="checkbox"
                                    checked={this.state.add}
                                    onChange={this.handleInputChange}
                                    >
                                  </input>
                                </td>
                            </tr>
                          </tbody>
                    </table>
                    </div>
                </div>

                <div className="row float-right pr-3">
                  <button type="submit" onCl className="btn btn-secondary float-right">Save</button>
                </div>
            </form>
            </div>
        </div>
      </div>
    );
  }
}

export default Adduser;
