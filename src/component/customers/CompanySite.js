import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {Link} from "react-router-dom";
// import "./Addemployee.css";

const CompanySite = () => {
  // state for tracking the form field values
  const [formValue, setFormValue] = useState({
    sitename:"",
    maparea:"",
    address: ""
  });

  // destructuring state values
  const {
    sitename,
    maparea,
    address,
  } = formValue;

  const handleInputChange = (name) => (e) => {
    setFormValue({
      ...formValue,
      [name]: e.target.value,
    });
  };

  const submitLogin = (event) => {
    event.preventDefault();
    // const userData = this.state.fields;
    //console.log(this.state.fields);
    // axios.post(`http://localhost:5000/users/login`,userData)
    // .then((res) => {
    //   console.log(res);
    //   console.log(res.data.info);
    //   console.log(res.data.success);
    //   if(res.data.success===false){
    //     localStorage.setItem('Login_Status',0);
    //     localStorage.setItem('Login_Data',"");
    //     alert("Wrong Id/Password!!!!");
    //   }
    //   else if(res.data.success===true){
    //     console.log("success");
    //     localStorage.setItem('Login_Status',1);
    //     localStorage.setItem('Login_Data',JSON.stringify(res.data.info.results));
    //     //window.location.assign('/dashboard');
    //   }
    //   else{
    //     alert("error!!!")
    //   }
    // })
    // .catch((err)=> {console.log(err); alert("Error login") })
  }

  return (
    <div className="container form-container mt-5">
      <div className="row d-flex justify-content-center m-auto">
        <div className="col-12 col-md-10 col-lg-8">
          <div
            className="card"
            style={{ backgroundColor: "#2A707D", width: "100%" }}
          >
            <div className="card-body">
              <form encType="multipart/form-data" onSubmit= {submitLogin} style={{ color: "white", fontWeight: "bold" }}>
                <div className="form-group">
                    <div className="col-lg-6 pb-3">
                      <label>Site Name</label>
                      <input
                        type="text"
                        name="sitename"
                        id="sitename"
                        className="form-control"
                        value={sitename}
                        onChange={handleInputChange("sitename")}
                      />
                    </div>
                    <div className="col-lg-6 pb-3">
                      <label>Site Address</label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        className="form-control"
                        value={address}
                        onChange={handleInputChange("address")}
                      />
                    </div>
                  </div>
                <div className="col-12">
                <div className="form-group">
                      <textarea
                        type="text"
                        name="maparea"
                        id="maparea"
                        rows="5"
                        className="form-control"
                        value={maparea}
                        placeholder="Map area"
                        onChange={handleInputChange("maparea")}
                      />
                  </div>
                </div>
                <div className="col-12">
                <div className="form-group signup-button-wrapper">
                  <button
                    className="btn btn-block py-2"
                    style={{
                      backgroundColor: "#F5B23F",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Submit
                  </button>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySite;
