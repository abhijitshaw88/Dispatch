import React,{useState, useEffect} from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button  from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from './Dropdown';
import axios from 'axios';

function AddSize() {
  const [show, setShow] = useState(false);
  const [size, setsize] = useState('');
  const [desc, setdesc] = useState(false);
  const [opt, setOpn] = useState(
    [
     { value: "1", label: "1" },
     { value: "2", label: "2" },
     { value: "6", label: "6" }
   ]
  );
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = async event  =>{
    const data = {
      size: size,
      description: desc
    }
    try {
      const response =
        await axios.post(
        `https://aggregate-dispatch.herokuapp.com/api/aggregate/addSize`,
         data ,
        {
          params: {
            aggregate_company_id: '41'
          },
          headers: {
             "x_auth_token": `${localStorage.getItem("tokenKey")}`,
             "content-type": "application/json"
          }
        });
    } catch (error) {
      alert(error);
      console.log(error);
    }
    console.log(size);
    console.log(desc);
    setShow(false);
  }
  return (
    <>
      <Button onClick={handleShow} style={{backgroundColor:"grey"}}>
        Add
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}  aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title>Add size</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pl-4">
        <div className="row pl-5">
          <label className="pr-5">Size</label>
          <select
                              onChange={e => setsize(e.target.value)}
                              className="browser-default custom-select"
                                style={{width:"auto"}}>
                              <option selected value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                          </select>
        </div>
        <div className="row pl-1 pt-3">
          <label className="">Description</label>
          <input type="text" className="pl-5 ml-5" onChange={e => setdesc(e.target.value)}/>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

 export default AddSize;
