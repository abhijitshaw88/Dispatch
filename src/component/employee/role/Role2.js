import React,{useState} from "react";
import { Link } from "react-router-dom";
import './Role2.css';
import axios from "axios";
import Editrole from './Editrole';

class Role2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Rdata:[],
      tokenvalue: localStorage.getItem("tokenKey")
    };
  }
  async componentDidMount() {
        console.log("handleClick");
        try {
          const response = await axios.get(
            "https://aggregate-dispatch.herokuapp.com/api/aggregate/permission",
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
              Rdata: response.data.Permissions
            },
            () => {
              console.log("helloworld",this.state.Rdata);
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
              <th className="p-0">Task Privilege
                <table className="table table-bordered m-0">
                  <thead>
                        <tr>
                          <th className="p-0">  view</th>
                          <th className="p-0">  Edit</th>
                          <th className="p-0">  Add</th>
                        </tr>
                  </thead>
                </table>
              </th>
              <th style={{borderColor: "#2A707D" }}>Edit Details</th>
            </tr>
          </thead>
          <tbody>{
          this.state.Rdata.map((item, key) =>
            <tr>
              <td>{item.role_name}</td>
              <td>
              <table className="table table-borderless m-0">
                <thead>
                      <tr>
                        <th className="p-0">
                           <input
                            name="view"
                            type="checkbox"
                            checked={item.view_user}
                            >
                          </input></th>
                        <th className="p-0">
                        <input
                        type="checkbox"
                        checked={item.edit_user}
                        >
                      </input></th>
                      <th className="p-0">
                      <input
                      type="checkbox"
                      checked={item.add_user}
                      >
                    </input></th>
                      </tr>
                </thead>
                </table>
              </td>
                <td><Editrole data={item}/></td>
            </tr>
          )
          }
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
