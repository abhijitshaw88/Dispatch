import React,{useState} from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button  from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from './Dropdown';
function AddPrice() {
  const [show, setShow] = useState(false);
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
  const handleClose = () => setShow(false);
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
          <Dropdown opt={coloropt}/>
        </div>
        <div className="row pl-5 pt-3">
          <label className="pr-5">Size</label>
            <Dropdown opt={priceopt}/>
        </div>
        <div className="row pl-5 pt-3">
          <label className="">Price</label>
          <input type="text" className="pl-5 ml-5"/>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

 export default AddPrice;
