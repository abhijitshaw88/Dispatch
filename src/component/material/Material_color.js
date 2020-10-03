import React,{ useState } from "react";
import { Link } from "react-router-dom";
import AddColor from './AddColor';
import MaterialImage from './MaterialImage';
import './Material.css';
import axios from 'axios';
import faker from 'faker';
import Button  from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Material_color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Cdata: [],
      tokenvalue: localStorage.getItem("tokenKey")
    };
  }

  async componentDidMount() {
        console.log("HEllo")
        console.log("handleClick");
        try {
          const response = await axios.get(
            "https://aggregate-dispatch.herokuapp.com/api/aggregate/color",
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
              Cdata: response.data.customers
            },
            () => {
              console.log("helloworld",this.state.Cdata);
              }
          );
        } catch (error) {
          console.log("Error",error);
        }
  }
  render(){
  return (
    <div>
      <div className="container pl-4">
          <div className="row pt-5">
            <div className="col-lg-12">
                <nav class="navbar navbar-expand-lg navbar-light ml-auto p-0">
                    <div class="w-100" id="navbarNav">
                      <ul class="navbar-nav w-100 justify-content-between ">
                        <li class="nav-item">
                          <ul class="navbar-nav">
                          <li>
                              <a className="nav-link" id="top"href="material-color"><label className="lab_nav"  style={{fontSize:16, color: "black" }}>Color</label></a>
                          </li>
                          <li>
                                <a class="nav-link" id="top"  href="material-size"><label className=""  style={{fontSize:16, color: "black" }}>Size</label></a>
                          </li>
                          </ul>
                        </li>
                        <li class="nav-item pl-5  float-right ">
                          <a class="nav-link" id="top" href="material-price"><label className=""  style={{fontSize:16, color: "black" }}>Price</label></a>
                        </li>
                      </ul>
                    </div>
                </nav>
            </div>
          </div>

          <div className="row pt-3">{
          this.state.Cdata.map((item, key) =>
          <div className="col-lg-4">
          <Card>
            <Card.Img variant="top" src={faker.image.business()}/>
            <Card.Body>
            <Card.Text>
            {item.color_name}
            </Card.Text>
            </Card.Body>
            </Card>
          </div>
          )
          }
          </div>
          <div className="row float-right">
            <AddColor/>
          </div>
      </div>
    </div>
  );
}
};

export default Material_color;
