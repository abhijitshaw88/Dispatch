import React,{useState  } from "react";
import { Link } from "react-router-dom";
import AddSize from './AddSize';
import './Material.css';

const Material_size = () => {
  const [val, setVal] = useState({
    materialSize:'',
    Sizebrief:''
  });
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
                <tbody>
                  <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
          </div>
          <div className="row float-right">
            <AddSize/>
          </div>
      </div>
    </div>
  );
};

export default Material_size;
