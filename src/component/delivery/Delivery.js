import React, { Component } from "react";
import Draggable from 'react-draggable';// The default
import {DraggableCore} from 'react-draggable'; // <DraggableCore>


class Delivery extends Component {
  eventLogger = (e: MouseEvent, data: Object) => {
   console.log('Event: ', e);
   console.log('Data: ', data);
 };

  render() {
    return (
      <div className="container ">
          <div className="row pt-5">
            <div className="col-lg-12">
              <div className="navbar-nav navbar-expand-lg navbar-light ml-auto p-0">
                <div className="w-100" id="navbarNav">
                  <ul className="navbar-nav w-100 justify-content-between ">
                    <li className="nav-item ">
                      <ul className="navbar-nav">
                        <li>
                          <a className="nav-link" id="top" href="#">
                            <label className="" style={{fontSize:16, color: "black" }}>
                              Delivery
                            </label>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar-nav navbar-expand-lg navbar-light p-0">
                <div className="w-100" id="navbarNav">
                  <ul className="navbar-nav w-100 justify-content-between ">
                    <li className="nav-item f">
                      <ul className="navbar-nav">
                        <li>
                          <a className="nav-link" id="top"href="#">
                            <label className="" style={{fontSize:16, color: "black" }}>Order</label>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item px-5 float-right ">
                      <a className="nav-link" id="top" href="#">
                        <label className="" style={{fontSize:16, color: "black" }}>Delivery</label>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <div className="row p-2 pb-4">
            <div className="col-lg-12">
              <div className="card-group">
                <div className="card" style={{ backgroundColor: "#2A707D", color: "white" }}>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Customer name, Site name</p>
                  </div>
                </div>
                <div className="card" style={{ backgroundColor: "#2A707D", color: "white" }}>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Material quantity and Time of delivery
                    </p>
                  </div>
                </div>
                <div className="card" style={{ backgroundColor: "#2A707D", color: "white" }}>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Delivery Truck/Logistics company
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="card">
                    <div className="card" style={{ backgroundColor: "#2A707D", color: "white" }}>
                        <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Trucker name, Driver name, Truck name
                      </p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/*  <Draggable
             axis="x"
             handle=".handle"
             defaultPosition={{x: 0, y: 0}}
             position={null}
             grid={[100, 100]}
             scale={1}
             onStart={this.handleStart}
             onDrag={this.handleDrag}
             onStop={this.handleStop}>
             <div className="card col-lg-2">
               <div className="handle ">Drag from here</div>
               <div>This readme is really dragging on...</div>
             </div>
           </Draggable>*/}
      </div>
    );
  }
}

export default Delivery;
