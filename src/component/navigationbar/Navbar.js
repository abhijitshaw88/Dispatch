import React, { Component } from "react";
import "./Navbar.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
    console.log(this.state.showMenu);
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  }
  render() {
    return (
      <nav  className="navbar navbar-expand-lg nav-color m-0 p-0 top">
        <Link
          className="navbar-brand m-1 p-3"
          to="/"
          style={{ backgroundColor: "#323032", width: "19.2%" }}
        >
        <img src={logo} class="logo-img" alt="logo" />
        </Link>
        {/*<ul className="navbar-nav">
          <Link className="right" to="/">
            JOBS
          </Link>
        </ul>*/}
        <div className="dropdown ml-auto">
          <button
            onClick={this.showMenu}
            className=" btn dropdown-toggle rounded "
          >
            Notification
          </button>

          {this.state.showMenu ? (
            <div className="dropdown-menu">
              <Link className="dropdowm-item" to="/">
                Menu item1
              </Link>
              <Link className="dropdowm-item" to="/">
                Menu item2
              </Link>
              <Link className="dropdowm-item" to="/">
                Menu item3
              </Link>
            </div>
          ) : null}
        </div>
        <ul className="navbar-nav">
          <Link className="right" to="/">
            <i class="far fa-user-circle"></i> Name
            <i class="fas fa-caret-down"></i>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
