import React,{useState} from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button  from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from './Dropdown';
function EditPrice() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a   onClick={handleShow}>
        Edit
      </a>
      <Modal show={show} onHide={handleClose} animation={false}  aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title>Edit Price</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row pl-5">
          <label className="">Name</label>
          <input type="text" className="pl-5 ml-5"/>
        </div>
        <div className="row pl-5 pt-3">
          <label className="pr-5">Size</label>
            <Dropdown/>
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
          <Button  onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

 export default EditPrice;
