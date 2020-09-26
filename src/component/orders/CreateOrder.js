import React, { useState, useEffect } from 'react';
// import './CreateJob.css';

const CreateOrder = () => {
  const [val, setVal] = useState({
    project: '',
    job: '',
    material: '',
    amount: '',
    date_to: '',
    date_from: '',
    shift_start: '',
    shift_end: '',
    truckCount: '',
    dailyTarget: '',
    interval: '',
    loadAddress: '',
    unloadAddress: '',
    notes: '',
  });

  const {
    project,
    job,
    material,
    amount,
    date_to,
    date_from,
    shift_start,
    shift_end,
    truckCount,
    dailyTarget,
    interval,
    loadAddress,
    unloadAddress,
    notes,
  } = val;

  const handleInputChange = name => e => {
    setVal({
      ...val,
      [name]: e.target.value,
    });
  };

  return (
    <div className="job-wrapper">
      <div className="container form-container mt-5">
        <div className="row d-flex justify-content-center m-auto">
          <div className="col-12 col-md-10 col-lg-6">
            <div className="job-form-wrapper">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Add New Job</h5>
              {/* <p className="heading text-center">New Job</p> */}
              <form>
                <div className="form-group">
                  <br />
                  <p className="sub-heading">Job details</p>
                  <br />
                  <label>Project</label>
                  <select
                    name="role"
                    id="role"
                    className="form-control"
                    onChange={handleInputChange('project')}
                    value={project}
                  >
                    <option value="" disabled selected hidden>
                      Select
                    </option>
                    <option value="project1">Project Name 1</option>
                    <option value="project2">Project Name 2</option>
                    <option value="project3">Project Name 3</option>
                    <option value="project4">Project Name 4</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Job</label>
                  <input
                    type="text"
                    name="job"
                    id="job"
                    className="form-control"
                    value={job}
                    onChange={handleInputChange('job')}
                  />
                </div>
                <div className="form-group">
                  <label>What material is being moved</label>
                  <input
                    type="text"
                    name="material"
                    id="material"
                    className="form-control"
                    value={material}
                    onChange={handleInputChange('material')}
                  />
                </div>
                <div className="form-group">
                  <br />
                  <br />
                  <p className="sub-heading">Date, Time and Volume</p>
                  <br />
                  <label>Total amount needed</label>
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    value={amount}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <div className="form-row">
                    <div className="col-12 col-md-6">
                      <label>Date from</label>
                      <input
                        type="date"
                        name="date_from"
                        id="date_from"
                        value={date_from}
                        className="form-control"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label>Date To</label>
                      <input
                        type="date"
                        name="date_to"
                        id="date_to"
                        value={date_to}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-row">
                    <div className="col-12 col-md-6">
                      <label>Shift start</label>
                      <input
                        type="time"
                        name="shift_start"
                        id="shift_start"
                        value={shift_start}
                        className="form-control"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label>Shift end</label>
                      <input
                        type="time"
                        name="shift_end"
                        id="shift_end"
                        value={shift_end}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <br />
                  <br />
                  <p className="sub-heading">Dispatch Request</p>
                  <br />
                  <label>Number of trucks needed</label>
                  <input
                    type="number"
                    name="trucks"
                    id="trucks"
                    value={truckCount}
                    className="form-control col-6"
                  />
                </div>
                <div className="form-group">
                  <label>Types of trucks requested</label>
                  <br />
                  <br />
                  <div className="form-row checkbox-wrapper">
                    <div className="col-6">
                      <div className="form-check form-check-inline">
                        <input
                          type="checkbox"
                          name="all"
                          id="all"
                          className="form-check-input"
                        />
                        <label>Any type</label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-check form-check-inline">
                        <input
                          type="checkbox"
                          name="all"
                          id="all"
                          className="form-check-input"
                        />
                        <label>Tri-Axle</label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-check form-check-inline">
                        <input
                          type="checkbox"
                          name="all"
                          id="all"
                          className="form-check-input"
                        />
                        <label>Trash Hauler</label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-check form-check-inline">
                        <input
                          type="checkbox"
                          name="all"
                          id="all"
                          className="form-check-input"
                        />
                        <label>Tandem/12 Wheel</label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-check form-check-inline">
                        <input
                          type="checkbox"
                          name="all"
                          id="all"
                          className="form-check-input"
                        />
                        <label>Super Dump</label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-check form-check-inline">
                        <input
                          type="checkbox"
                          name="all"
                          id="all"
                          className="form-check-input"
                        />
                        <label>Steel End Dump</label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-check form-check-inline">
                        <input
                          type="checkbox"
                          name="all"
                          id="all"
                          className="form-check-input"
                        />
                        <label>Quad Axle</label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-check form-check-inline">
                        <input
                          type="checkbox"
                          name="all"
                          id="all"
                          className="form-check-input"
                        />
                        <label>Flatbed</label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-check form-check-inline">
                        <input
                          type="checkbox"
                          name="all"
                          id="all"
                          className="form-check-input"
                        />
                        <label>Belly Dump</label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-check form-check-inline">
                        <input
                          type="checkbox"
                          name="all"
                          id="all"
                          className="form-check-input"
                        />
                        <label>Aluminium End Dump</label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-check form-check-inline">
                        <input
                          type="checkbox"
                          name="all"
                          id="all"
                          className="form-check-input"
                        />
                        <label>5-Axle</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-row">
                    <div className="col-6">
                      <label>Daily delivery target</label>
                      <input
                        type="number"
                        name="dailiy-target"
                        id="daily-target"
                        value={dailyTarget}
                        className="form-control"
                      />
                    </div>
                    <div className="col-6">
                      <label>Interval Material Delivery Every</label>
                      <input
                        type="time"
                        name="interval"
                        id="interval"
                        value={interval}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <br />
                  <br />
                  <p className="sub-heading">Loading</p>
                  <br />
                  <label>Select Address</label>
                  <input
                    type="text"
                    name="loadAddress"
                    id="loadAddress"
                    value={loadAddress}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <br />
                  <br />
                  <p className="sub-heading">Unloading</p>
                  <br />
                  <label>Select Address</label>
                  <input
                    type="text"
                    name="unloadAddress"
                    id="unloadAddress"
                    value={unloadAddress}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <br />
                  <br />
                  <p className="sub-heading">Additional Notes</p>
                  <br />

                  <textarea
                    name="notes"
                    id="notes"
                    className="form-control"
                  >
                    enter
                  </textarea>
                </div>
                <div className="form-group text-right">
                  <button className="btn btn-secondary">
                    Create Job
                  </button>
                </div>
              </form>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrder;
