import React,{useState} from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button  from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
function ViewSite(props) {

  console.log("Grab data",props.data);
  const [show, setShow] = useState(false);
  const [name, setname] = useState('');

  const handleClose = () => {
    setShow(false);
  }

  const handleShow = () => setShow(true);
  const handleAdd = async event  =>{
    event.preventDefault();
       const user = {

      };
       console.log("I am handleAdd",user);
       try {
         const response =
           await axios.put(
           `https://aggregate-dispatch.herokuapp.com/api/aggregate/editCustomer`,
            user,
           {
             params:{
              customer_id: props.data.customer_id
            },
             headers: {
                "x_auth_token": `${localStorage.getItem("tokenKey")}`,
                "content-type": "application/json"
             }
           });
         }
       catch (error) {
         console.log(error);
       }
       window.location.reload();
     setShow(false);
  }
  return (
    <>
      <Button style={{backgroundColor:" #2A707D"}} onClick={handleShow}>
        View
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}  aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title>Sites</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
      </Modal>
    </>
  );
}

 export default ViewSite;
