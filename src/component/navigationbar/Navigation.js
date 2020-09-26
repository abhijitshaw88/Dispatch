import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap";
import logo from "../images/logo.png";
import companylogo from "../images/companylogo.jpg";
// import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <ReactBootstrap.Navbar m-0 p-0
        collapseOnSelect
        expand="xl"
        bg="white"
        // variant="dark"
      >
        <ReactBootstrap.Navbar.Brand m-1 p-3 href="#home" style={{backgroundColor: "#323032", width:"19%"}}>
        <img src={companylogo} style={{width:"200px"}} class="logo-img justify-content-center" alt="logo" />
        </ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootstrap.Nav className="mr-auto">
            <ReactBootstrap.Nav.Link href="#features">
              JOBS
            </ReactBootstrap.Nav.Link>
            {/* <ReactBootstrap.Nav.Link href="#pricing">
              Pricing
            </ReactBootstrap.Nav.Link> */}
            {/* <ReactBootstrap.NavDropdown
              title="Dropdown"
              id="collasible-nav-dropdown"
            >
              <ReactBootstrap.NavDropdown.Item href="#action/3.1">
                Action
              </ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="#action/3.2">
                Another action
              </ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="#action/3.3">
                Something
              </ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Divider />
              <ReactBootstrap.NavDropdown.Item href="#action/3.4">
                Separated link
              </ReactBootstrap.NavDropdown.Item>
            </ReactBootstrap.NavDropdown> */}
          </ReactBootstrap.Nav>
          <ReactBootstrap.Nav>
            <ReactBootstrap.Nav.Link href="#deets">
              Notification
            </ReactBootstrap.Nav.Link>
            {/* <ReactBootstrap.Nav.Link eventKey={2} href="#memes">
              Dank memes
            </ReactBootstrap.Nav.Link> */}
            <ReactBootstrap.NavDropdown 
              title="Name"
              id="collasible-nav-dropdown"
            > 
              <ReactBootstrap.NavDropdown.Item href="#action/3.1">
                Action
              </ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="#action/3.2">
                Another action
              </ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="#action/3.3">
                Something
              </ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Divider />
              <ReactBootstrap.NavDropdown.Item href="#action/3.4">
                Separated link
              </ReactBootstrap.NavDropdown.Item>
            </ReactBootstrap.NavDropdown>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    );
  }
}

export default Navigation;
