import React, { Component } from "react";
import "./Login.css";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../services/url";
import authService from "../services/auth-service";
import SignUp from "../signup/Signup";

class AddLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirect: false,
      tokenKey: "",
      tokenlength: ""
    };
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  onSubmit = e => {
    e.preventDefault();
    axios
      .post(`${API_URL}`, this.state)
      .then(
        function(response) {
          console.log("hello", response.data.token);
          console.log("login", response.data.message);
            console.log("Working");
          if (response.data.message !== "Wrong password") {
            localStorage.setItem("tokenKey", response.data.token);
            console.log(localStorage.getItem("tokenKey"));
            this.props.onRouteChange("home");
            return <Redirect to={{ pathname: "/" }} />;
          }
          console.log("authservice gettoken");
          alert(response.data.message);
          console.log(authService.getToken());
        }.bind(this)
      )
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    const onRouteChange = this.props.onRouteChange;
    return (
      <div>
        <div class="my-login-page">
          <section class="h-100">
            <div class="container h-100">
              <div class="row justify-content-md-center h-100">
                <div class="card-wrapper">
                  <div class="card fat custom-card-margin">
                    <div class="card-body">
                      <h4 class="card-title" align="center">
                        Login
                      </h4>
                      <form method="POST">
                        <div class="form-group">
                          <label for="number">Email</label>

                          <input
                            id="email"
                            type="text"
                            class="form-control"
                            name="email"
                            value={this.state.email}
                            onChange={e => this.change(e)}
                            required
                            autofocus
                          />
                        </div>

                        <div class="form-group">
                          <label for="password">Password</label>
                          <input
                            id="password"
                            type="password"
                            class="form-control"
                            name="password"
                            value={this.state.password}
                            onChange={e => this.change(e)}
                            required
                            data-eye
                          />
                        </div>

                        <div class="form-group no-margin">
                          <button
                            class="button button2 btn-block"
                            onClick={e => this.onSubmit(e)}
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default AddLogin;
