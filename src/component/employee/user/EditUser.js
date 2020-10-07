import React,{useState} from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button  from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
function EditUser(props) {
  console.log("Grab data",props.data);
  const [show, setShow] = useState(false);
  const [username, setusername] = useState(props.data.name);
  const [email, setemail] = useState(props.data.email);
  const [contact, setcontact] = useState(props.data.phone_no);
  const [role, setrole] = useState(props.data.role);
  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => setShow(true);
  const handleAdd = async event  =>{
    event.preventDefault();
       const user = {
         name: username,
         email:  email,
         phone_no: contact,
         role: role,
         password:12345,
         add_user:props.data.add_user,
         view_user:props.data.view_user,
         edit_user:props.data.edit_user

      };
      const id=props.data.id;
       console.log("I am handleAdd",user);
       try {
         const response =
           await axios.put(
           `https://aggregate-dispatch.herokuapp.com/api/aggregate/editUser`,
            user,
           {
             params:{
              user_id: props.data.id
            },
             headers: {
                "x_auth_token": `${localStorage.getItem("tokenKey")}`,
                "content-type": "application/json"
             }
           });
            console.log("Res",response);
         }
       catch (error) {
         console.log(error);
       }
     setShow(false);
  }
  return (
    <>
      <Button style={{backgroundColor:"grey"}} onClick={handleShow}>
        Edit
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}  aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className=" w-100" onSubmit={handleAdd}>
            <div class="form-group row">
                <label for="username" class="col-sm-2 col-form-label">Username</label>
                <div class="col-sm-10 pl-5">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="form-control"
                      value={username}
                      onChange={e => setusername(e.target.value)}
                    />
                </div>
            </div>
            <div class="form-group row">
                  <label  class="col-sm-2 col-form-label">Email</label>
                  <div class="col-sm-10 pl-5">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="form-control"
                      value={email}
                      onChange={e => setemail(e.target.value)}
                    />
                  </div>
            </div>
            <div class="form-group row">
                <label for="Role" class="col-sm-2 col-lg-2 col-form-label">Contact</label>
                <div class="col-sm-10 col-lg-10 pl-5">
                    <input
                    type="text"
                    name="phone_no"
                    id="phone_no"
                    className="form-control"
                    value={contact}
                    onChange={e => setcontact(e.target.value)}
                  />
                </div>
            </div>
            <div class="form-group row">
                <label for="Role" class="col-sm-2 col-lg-2 col-form-label">Role</label>
                <div class="col-sm-10 col-lg-10 pl-5">
                    <input
                    type="text"
                    name="role"
                    id="role"
                    className="form-control"
                    value={role}
                    onChange={e => setrole(e.target.value)}
                    />
                </div>
            </div>
            <div className="row float-right pr-3">
              <button type="submit" className="btn btn-secondary float-right">Save</button>
            </div>
        </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

 export default EditUser;
