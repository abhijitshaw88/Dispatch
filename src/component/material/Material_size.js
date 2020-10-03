import React,{useState  } from "react";
import { Link } from "react-router-dom";
import AddSize from './AddSize';
import './Material.css';
import axios from 'axios';

class Material_size extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Mdata: [],
      tokenvalue: localStorage.getItem("tokenKey")
    };
  }

  async componentDidMount() {
        console.log("HEllo")
        console.log("handleClick");
        try {
          const response = await axios.get(
            "https://aggregate-dispatch.herokuapp.com/api/aggregate/size",
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
              Mdata: response.data.customers
            },
            () => {
              console.log("helloworld",this.state.Mdata);
              }
          );
        } catch (error) {
          console.log("Error",error);
        }
  }
  render(){
  return (
    <div>
      <div className="container">
          <div className="row pt-5">
            <div className="col-lg-12 p-0">
                <nav class="navbar navbar-expand-lg navbar-light ml-auto p-0">
                    <div class="w-100" id="navbarNav">
                      <ul class="navbar-nav w-100 justify-content-between ">
                        <li class="nav-item">
                          <ul class="navbar-nav">
                          <li>
                              <a className="nav-link" id="top"href="material-color"><label className=""  style={{fontSize:16, color: "black" }}>Color</label></a>
                          </li>
                          <li>
                                <a class="nav-link" id="top"  href="material-size"><label className=""  style={{fontSize:16, color: "black" }}>Size</label></a>
                          </li>
                          </ul>
                        </li>
                        <li class="nav-item pl-5  float-right ">
                          <a class="nav-link" id="top"  href="material-price"><label className=""  style={{fontSize:16, color: "black" }}>Price</label></a>
                        </li>
                      </ul>
                    </div>
                </nav>
            </div>
          </div>

          <div className="row text-center pt-3">
              <table className="table table-bordered">
                <thead>
                    <tr>
                      <th>Sl No</th>
                      <th>Size</th>
                      <th>Size Brief</th>
                    </tr>
                </thead>
                <tbody>{
                this.state.Mdata.map((item, key) =>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.size}</td>
                    <td>{item.description}</td>
                  </tr>
                )
              }
                </tbody>
              </table>
          </div>
          <div className="row float-right">
            <AddSize/>
          </div>
      </div>
    </div>
  );
}
};

export default Material_size;
