import React, { Component } from "react";
import "./Sidenavbar.css";
import { Link } from "react-router-dom";
import {NavLink} from "react-router-dom";
import dashboard from "../images/transparent_icons/dashboard.svg";
import account from "../images/transparent_icons/account.svg";
import delivery from "../images/transparent_icons/delivery.svg";
import settings from "../images/transparent_icons/settings.svg";
import truck from "../images/transparent_icons/truck.svg";
import pdf from "../images/transparent_icons/pdf.svg";
import search from "../images/transparent_icons/search.svg";
import pin from "../images/transparent_icons/pin.svg";
import team from "../images/transparent_icons/team.svg";
import bill from "../images/transparent_icons/bill.svg";
import brick from "../images/transparent_icons/brick.svg";
import calendar from "../images/transparent_icons/calendar.svg";
import project from "../images/transparent_icons/project.svg";


class Sidenavbar extends Component {
  // constructor(){
  //   super();
  //   this.state={
  //     class:""
  //   }
  // }

  // handleClick=()=>{
  //   if(!this.state.active) {
  //     this.setState({
  //       currentItem: this,
  //       active: true,
  //       class: "sectionitem active"});
  //   }
  // }
  // getInitialState=()=>{
  //    return {
  //      active: false,
  //      class: "sectionitem"
  //    }
  // }

  render() {
    return (
      <div className="sidenav sidebar-collapse sidebar-show">
        {/* <h2 className="text-center">Welcome</h2>
                <hr className="mb-0" /> */}
        <ul >
          {/* <Link className="side-nav_link" to="/" >
            <span>
              <i class="fas fa-bars"></i>
            </span>{" "}
            Menu
          </Link> */}
          <NavLink className="main-nav" activeClassName="main-nav-active" to="/dashboard">
            <span style={{width: "20px", height:"30px", fontColor:"white", fontSize:"18px"}}>
              <img src={dashboard} alt="dashboard" style={{width: "20px", height:"30px", fontColor:"white"}}/>
                {" "}Dashboard
            </span>

          </NavLink>
          {/* <Link className="side-nav_link" to="/project-dailyboard">
            <span>
            <i class="fas fa-project-diagram"></i>
            </span>{" "}
            Project
          </Link> */}
          {/* <Link className="side-nav_link" to="/dispatch-dailyboard">
            <span>
            <i class="fas fa-shipping-fast"></i>
            </span>{" "}
            Dispatch
          </Link> */}
          {/* <Link className="side-nav_link" to="/user">
            <span>
            <i class="fas fa-user-plus"></i>
            </span>{" "}
            User
          </Link> */}
          <NavLink className="main-nav" activeClassName="main-nav-active" to="/viewcustomer">
            <span style={{width: "20px", height:"30px", fontColor:"white", fontSize:"18px"}} >
            {/* <i class="fas fa-user-circle"></i> */}
            <img src={pdf} alt="pdf" style={{width: "20px", height:"30px", fontColor:"white"}}/>
            {" "}
            Customer</span>
          </NavLink>
          <NavLink className="main-nav" activeClassName="main-nav-active" to="/vieworder">
            <span style={{width: "20px", height:"30px", fontColor:"white", fontSize:"18px"}}>
            {/* <i class="fas fa-sort"></i> */}
            <img src={truck} alt="truck" style={{width: "20px", height:"30px", fontColor:"white"}}/>
            {" "}  Orders
            </span>

          </NavLink>
          <NavLink className="main-nav" activeClassName="main-nav-active" to="/delivery">
            <span style={{width: "20px", height:"30px", fontColor:"white", fontSize:"18px"}}>
              {/* <i class="fas fa-chart-line"></i> */}
              <img src={delivery} alt="delivery" style={{width: "20px", height:"30px", fontColor:"white"}} />
              {" "}Delivery
            </span>

          </NavLink>
          {/* <Link className="side-nav_link" to="/fleet">
            <span>
            <i class="fas fa-truck"></i>
            </span>{" "}
            Fleet
          </Link>
          <Link className="side-nav_link" to="/billings">
            <span>
            <i class="fas fa-file-invoice-dollar"></i>
            </span>{" "}
           Billing
          </Link> */}
          <NavLink className="main-nav" activeClassName="main-nav-active" to="/account">
            <span style={{width: "20px", height:"30px", fontColor:"white", fontSize:"18px"}}>
            {/* <i class="fas fa-user-circle"></i> */}
            <img src={account} alt="account" style={{width: "20px", height:"30px", fontColor:"white"}} />
            {" "}Accounts
            </span>
          </NavLink>
          <NavLink className="main-nav" activeClassName="main-nav-active" to="/map">
            <span style={{width: "20px", height:"30px", fontColor:"white", fontSize:"18px"}}>
            {/* <i class="fas fa-map-marker" aria-hidden="true"></i> */}
            <img src={pin} alt="search" style={{width: "20px", height:"30px", fontColor:"white"}}/>
              {" "}Map
            </span>

          </NavLink>
          <NavLink className="main-nav" activeClassName="main-nav-active" to="/reports">
            <span style={{width: "20px", height:"30px", fontColor:"white", fontSize:"18px"}}>
              {/* <i class="fas fa-chart-line"></i> */}
              <img src={bill} alt='bill' style={{width: "20px", height:"30px", fontColor:"white"}} />
              {" "}Reports
            </span>
          </NavLink>
          <NavLink className="main-nav pt-5" activeClassName="main-nav-active" to="/settings">
            <span style={{width: "20px", height:"30px", fontColor:"white", fontSize:"18px"}}>
              {/* <i class="fas fa-chart-line"></i> */}
              <img src={settings} alt='settings' style={{width: "20px", height:"30px", fontColor:"white"}} />
                {" "}Settings
            </span>

          </NavLink>
          <NavLink className="main-nav" activeClassName="main-nav-active" to="/Viewuser">
            <span style={{width: "20px", height:"30px", fontColor:"white", fontSize:"18px"}}>
              {/* <i class="fas fa-chart-line"></i> */}
              <img src={team} alt="team" style={{width: "20px", height:"30px", fontColor:"white"}} />
                {" "}Employee
              </span>

          </NavLink>
          <NavLink className="main-nav" activeClassName="main-nav-active" to="/material-color">
            <span style={{width: "20px", height:"30px", fontColor:"white", fontSize:"18px"}}>
              {/* <i class="fas fa-elementor"></i> */}
              <img src={brick} alt='brick' style={{width: "20px", height:"30px", fontColor:"white"}} />
                {" "}Materials
              </span>

          </NavLink>

          {/* <Link className="side-nav_link" to="/Viewemployee">
            <span>
              <i class="fas fa-chart-line"></i>
            </span>{" "}
            Employee
          </Link>
          <Link className="side-nav_link" to="/notification">
            <span>
            <i class="fas fa-bell"></i>
            </span>{" "}
            Notifications
          </Link>
          <Link className="side-nav_link" to="/customer-invoice">
            <span>
            <i class="fas fa-file-invoice"></i>
            </span>{" "}
            Generate Invoice
          </Link> */}
        </ul>
        <ul className="align-bottom">
          <NavLink className="main-nav" activeClassName="main-nav-active" to="/organization">
          <span style={{width: "20px", height:"30px", fontColor:"white", fontSize:"18px"}}>

            <img src={project} alt="project" style={{width: "20px", height:"30px", fontColor:"white"}}/>
                    {" "}    Organization
            </span>

          </NavLink>
          {/* <Link className="side-nav_link" to="/">
            <span>
              <i class="fas fa-users"></i>
            </span>{" "}
            Team
          </Link>
          <Link className="side-nav_link" to="/">
            <span>
              <i class="fas fa-cog"></i>
            </span>{" "}
            Settings
          </Link>
          <Link className="side-nav_link" to="/">
            <span>
              <i class="fab fa-elementor"></i>
            </span>{" "}
            Materials
          </Link> */}
        </ul>
      </div>
    );
  }
}

export default Sidenavbar;
