import React,{useState} from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button  from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from './Dropdown';
import axios from 'axios';


function AddPrice() {
  const [show, setShow] = useState(false);
  const [color, setcolor] = useState('');
  const [price, setprice] = useState('');
  const [size, setsize] = useState('');
  const [coloropt, setOpnc] = useState(
    [
     { value: "1", label: "Ash" },
     { value: "2", label: "Caremal" },
     { value: "3", label: "Mahogamy" },
     { value: "4", label: "Painted Desert" },
     { value: "5", label: "Rose" },
     { value: "6", label: "Nusty Nickel" }
   ]
  );
  const [priceopt, setOptp] = useState(
    [
     { value: "1", label: "1" },
     { value: "2", label: "2" },
     { value: "8", label: "8" }
   ]
  );
  const handleClose = () => {
    setShow(false);
  }
  const handleAdd = async event  =>{
    const data = {
      color: color,
      price: price,
      size: size
    }
    try {
      const response =
        await axios.post(
        `https://aggregate-dispatch.herokuapp.com/api/aggregate/addPrice`,
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
    console.log(color);
    console.log(size);
    console.log(price);
    setShow(false);
  }
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={{backgroundColor:"grey"}} onClick={handleShow}>
        Add
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}  aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title>Add Price</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row pl-5">
          <label className="pr-5">Color</label>
          <select
                              onChange={e => setcolor(e.target.value)}
                              className="browser-default custom-select"
                                style={{width:"auto"}}>
                              <option selected value="Ash">Ash</option>
                              <option value="Caremal">Caremal</option>
                              <option value="Rose">Rose</option>
                              <option value="Mahogamy">Mahogamy</option>
                              <option value="Nusty Nickel">Nusty Nickel</option>
                              <option value="Painted Desert">Painted Desert</option>
            </select>
        </div>
        <div className="row pl-5 pt-3">
          <label className="pr-5">Size</label>
          <select
                              onChange={e => setsize(e.target.value)}
                              className="browser-default custom-select"
                                style={{width:"auto"}}>
                                <option selected value="Boulder">Boulder</option>
                                <option value="Rip Rap">2</option>
                                <option value="3/4 Screened">3/4 Screened</option>
                                <option value="1/2 Screened">1/2 Screened</option>
                                <option value="3/4 Minus">3/4 Minus</option>
                                <option value="1/2 Minus">1/2 Minus</option>
                                <option value="1/4 Minus">1/4 Minus</option>
                          </select>
        </div>
        <div className="row pl-5 pt-3">
          <label className="">Price</label>
          <input type="text" className="pl-5 ml-5" onChange={e => setprice(e.target.value)}/>
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

 export default AddPrice;
