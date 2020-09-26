import React,{ useState } from "react";
import { Link } from "react-router-dom";
import AddColor from './AddColor';
import MaterialImage from './MaterialImage';
import './Material.css';

const Material_color = () => {
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

          <div className="row pt-3">
            <div className="col-lg-4">

            <MaterialImage/>
            </div>
            <div className="col-lg-4">

                  <MaterialImage/>
            </div>
            <div className="col-lg-4">
            <MaterialImage/>
            </div>
          </div>

          <div className="row pt-3">
            <div className="col-lg-4">

            <MaterialImage/>
            </div>
            <div className="col-lg-4">

                  <MaterialImage/>
            </div>
            <div className="col-lg-4">
            <MaterialImage/>
            </div>
          </div>

          <div className="row pt-3">
            <div className="col-lg-4">

            <MaterialImage/>
            </div>
            <div className="col-lg-4">

                  <MaterialImage/>
            </div>
            <div className="col-lg-4">
            <MaterialImage/>
            </div>
          </div>

          <div className="row pt-5 float-right">
              <AddColor/>
          </div>
      </div>
    </div>
  );
};

export default Material_color;
