import React,{ useState } from "react";
import { Link } from "react-router-dom";
import './AddUser.css';
import axios from "axios";


class Viewuser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Udata: [],
      tokenvalue: localStorage.getItem("tokenKey")
    };
  }

  async componentDidMount() {
        console.log("handleClick");
        try {
          const response = await axios.get(
            "https://aggregate-dispatch.herokuapp.com/api/aggregate/member",
            {
              params: {
                aggregate_company_id: '41'
              },
              headers: {
                 "x_auth_token": `${this.state.tokenvalue}`,
                 "content-type": "application/json"
              }
            }
          );
          this.setState(
            {
              Udata: response.data.members
            },
            () => {
              console.log("helloworld",response);
              }
          );
        } catch (error) {
          console.log("Error",error);
        }
  }

  // console.log(url);
  render(){
  return (
    <React.Fragment>
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
      <div className="row text-center pt-3">
        <div className="col-lg-12 p-0">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>UserName</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>{
          this.state.Udata.map((item, key) =>
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone_no}</td>
              <td>{item.role}</td>
            </tr>
          )
          }
          </tbody>
        </table>
        </div>
      </div>
    </div>
      {/* </div> */}
    </React.Fragment>
  );
}
};

export default Viewuser;
