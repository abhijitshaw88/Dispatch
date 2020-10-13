import React,{useState} from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button  from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
function AddSite(props) {

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
         name:name
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
        Add
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}  aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title>Add Site</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className=" w-100" onSubmit={handleAdd}>
            <div class="form-group row">
                <label for="username" class="col-sm-3 col-form-label pl-5">Site Name</label>
                <div class="col-sm-8 pl-5">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="form-control"
                      value={name}
                      onChange={e => setname(e.target.value)}
                    />
                </div>
            </div>

            <div className="row float-right pr-5">
              <button type="submit" className="btn btn-secondary float-right">Add</button>
            </div>
        </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

 export default AddSite;
