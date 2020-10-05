import React,{useState} from "react";
import { Link } from "react-router-dom";
import './Role2.css';
import axios from "axios";

class Role2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "",
      view:true,
      edit:true,
      add:true,
      tokenvalue: localStorage.getItem("tokenKey")
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
     const data = {
       role_name:this.state.role,
       view_user:this.state.view,
       edit_user:this.state.edit,
       add_user:this.state.add
    };
    console.log(data);
     try {
       const response =
         await axios.post(
         `https://aggregate-dispatch.herokuapp.com/api/aggregate/permission`,
          data ,
         {
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
  // console.log(url);
  render(){
  return (
    <React.Fragment>
      {/* <div className="header-wrapper"> */}
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
            <Link className="nav-link text-dark" to="/role2"  className=""  style={{fontSize:16, color: "black" }}>Add Role<i class="fas fa-play pl-1" style={{ color: "#2A707D"}}></i></Link>
          </div>
        </div>
      </div>
      <div className="container ml-auto">
          <div className="row text-center p-0 mt-4">
        <table className="table table-bordered ">
          <thead>
            <tr>
              <th style={{borderColor: "#2A707D" }}>Role</th>
              <th>Task Privilage</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
        </div>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
}
};

export default Role2;
