import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
       user_name: "",
       email: "",
       password: "",
       company_name: "",
       address_line_1: "",
       address_line_2: "",
       city: "",
       pincode: "",
       state: "",
       user_role: "",
       phone_no: ""
  };

  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    axios.post(`https://aggregate-dispatch.herokuapp.com/api/customer/signup`,  this.state)
     .then(res => {
       console.log(res);
       console.log(res.data);
     })
  }
  render() {
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
                        Signup
                      </h4>
                      <form method="POST">
                        <div class="form-group">
                          <label for="number">Username</label>

                          <input
                            id="email"
                            type="text"
                            class="form-control"
                            name="user_name"
                            value={this.state.user_name}
                            onChange={e => this.change(e)}
                            required
                            autofocus
                          />
                        </div>
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
                          <label for="number">Password</label>

                          <input
                            id="email"
                            type="text"
                            class="form-control"
                            name="password"
                            value={this.state.password}
                            onChange={e => this.change(e)}
                            required
                            autofocus
                          />
                        </div>
                        <div class="form-group">
                          <label for="number">Company Name</label>

                          <input
                            id="email"
                            type="text"
                            class="form-control"
                            name="company_name"
                            value={this.state.company_name}
                            onChange={e => this.change(e)}
                            required
                            autofocus
                          />
                        </div>
                        <div class="form-group">
                          <label for="number">address_line_1</label>

                          <input
                            id="email"
                            type="text"
                            class="form-control"
                            name="address_line_1"
                            value={this.state.address_line_1}
                            onChange={e => this.change(e)}
                            required
                            autofocus
                          />
                        </div>
                        <div class="form-group">
                          <label for="number">address_line_2</label>

                          <input
                            id="email"
                            type="text"
                            class="form-control"
                            name="address_line_2"
                            value={this.state.address_line_2}
                            onChange={e => this.change(e)}
                            required
                            autofocus
                          />
                        </div>
                        <div class="form-group">
                          <label for="number">city</label>

                          <input
                            id="city"
                            type="text"
                            class="form-control"
                            name="city"
                            value={this.state.city}
                            onChange={e => this.change(e)}
                            required
                            autofocus
                          />
                        </div>
                        <div class="form-group">
                          <label for="number">pincode</label>

                          <input
                            id="email"
                            type="text"
                            class="form-control"
                            name="pincode"
                            value={this.state.pincode}
                            onChange={e => this.change(e)}
                            required
                            autofocus
                          />
                        </div>
                        <div class="form-group">
                          <label for="number">State</label>

                          <input
                            id="email"
                            type="text"
                            class="form-control"
                            name="state"
                            value={this.state.state}
                            onChange={e => this.change(e)}
                            required
                            autofocus
                          />
                        </div>
                        <div class="form-group">
                          <label for="password">User Role</label>
                          <input
                            id="user_role"
                            type="text"
                            class="form-control"
                            name="user_role"
                            value={this.state.user_role}
                            onChange={e => this.change(e)}
                            required
                            data-eye
                          />
                        </div>
                        <div class="form-group">
                          <label for="password">Contact</label>
                          <input
                            id="user_role"
                            type="text"
                            class="form-control"
                            name="phone_no"
                            value={this.state.phone_no}
                            onChange={e => this.change(e)}
                            data-eye
                          />
                        </div>
                        <div class="form-group no-margin">
                          <button
                            class="button button2 btn-block"
                            onClick={e => this.onSubmit(e)}
                          >
                            SignUp
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

export default Signup;
