import React,{ useState } from "react";
import { Link } from "react-router-dom";
import './AddUser.css';
import axios from "axios";
import EditUser from './EditUser';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



class Viewuser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Udata: [],
      tokenvalue: localStorage.getItem("tokenKey")
    };
    const StyledTableCell = withStyles((theme) => ({
      head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
      body: {
        fontSize: 14,
      },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
      root: {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
      },
    }))(TableRow);

    function createData(name, calories, fat, carbs, protein) {
      return { name, calories, fat, carbs, protein };
    }

    const rows = [
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('Eclair', 262, 16.0, 24, 6.0),
      createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    const useStyles = makeStyles({
      table: {
        minWidth: 700,
      },
    });
  }

  async componentDidMount() {
        console.log("handleClick");
        try {
          const response = await axios.get(
            "https://aggregate-dispatch.herokuapp.com/api/aggregate/users",
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
              Udata: response.data.users
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
        <table
          className="table table-hover shadow-lg p-1 mb-3 bg-white rounded ">
          <thead className="thead-dark">
            <tr>
              <th>UserName</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Role</th>
              <th>Edit Details</th>
            </tr>
          </thead>
          <tbody>{
          this.state.Udata.map((item, key) =>
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone_no}</td>
              <td>{item.role}</td>
              <td><EditUser data={item}/></td>
            </tr>
          )
          }
          </tbody>
        </table>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}
};

export default Viewuser;
