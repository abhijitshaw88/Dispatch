import React,{useState} from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button  from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from './Dropdown';

function AddSize() {
  const [show, setShow] = useState(false);
  const [opt, setOpn] = useState(
    [
     { value: "1", label: "1" },
     { value: "2", label: "2" },
     { value: "6", label: "6" }
   ]
  );
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <Dropdown opt= {opt} />
        </div>
        <div className="row pl-1 pt-3">
          <label className="">Description</label>
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

 export default AddSize;
