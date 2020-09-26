import React,{ useState } from "react";
import { Link } from "react-router-dom";
import './AddUser.css'
const Viewuser = () => {
  const [val, setVal] = useState({
    name:'',
    email:'',
    contact:'',
    role:'',
    designation:''
  }
  );
  // console.log(url);
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
              <th>Designation</th>
              <th>Edit</th>
              <th>Archive</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Amar</td>
              <td>amar@gmail.com</td>
              <td>7676776767</td>
              <td>Dispatcher</td>
              <td>Dispatcher</td>
              <td><a>Edit</a></td>
              <td><a>Archive</a></td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
      {/* </div> */}
    </React.Fragment>
  );
};

export default Viewuser;
