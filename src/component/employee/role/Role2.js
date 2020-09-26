import React,{useState} from "react";
import { Link } from "react-router-dom";
import './Role2.css'
const Role2 = () => {
  const [val, setVal] = useState({
    role:'',
    taskprivilage:''
  }
  );
  // console.log(url);
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
            <tr >
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
};

export default Role2;
