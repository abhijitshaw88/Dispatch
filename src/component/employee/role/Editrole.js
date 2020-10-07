import React,{useState} from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button  from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

function Editrole(props) {
  console.log(props.data);
  const [show, setShow] = useState(false);
  const [role, setrole] = useState(props.data.role_name);
  const [view, setview] = useState(props.data.add_user);
  const [add, setadd] = useState(props.data.edit_user);
  const [edit, setedit] = useState(props.data.view_user);
  const handleClose = () => {
    setShow(false);
  }
  const handleview = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setview(value)
  }
  const handleedit = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setedit(value)
  }
  const handleadd = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setadd(value)
  }
  const handleShow = () => setShow(true);
  const handleAdd = async event  =>{
    console.log("hello I am handleAdd");
    const data = {
      user_role: role,
      view_user:view,
      edit_user:edit,
      add_user:add
   };
   console.log(data);
    const  handleSubmit= async event => {
       event.preventDefault();
       const user = {
      };
      console.log("hello");
       try {
         const response =
           await axios.post(
           `https://aggregate-dispatch.herokuapp.com/api/aggregate/addUser`,
            user ,
           {
             params: {
               aggregate_company_id: '41'
             },
             headers: {
                "x_auth_token": `${this.state.tokenvalue}`,
                "content-type": "application/json"
             }
           });}
       catch (error) {
         alert(error);
         console.log(error);
       }
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
                <label for="username" class="col-sm-2 col-form-label">Role</label>
                <div class="col-sm-10 pl-5">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="form-control"
                      value={role}
                      onChange={e => setrole(e.target.value)}
                    />
                </div>
            </div>
            <div class="form-group row">
                  <label  class="col-sm-2 col-form-label">View</label>
                  <div class="col-sm-10 pl-5">
                  <input
                  type="checkbox"
                  className="form-control"
                  checked={view}
                  onChange={handleview}
                  />
                  </div>
            </div>
            <div class="form-group row">
                  <label  class="col-sm-2 col-form-label">Edit</label>
                  <div class="col-sm-10 pl-5">
                  <input
                  type="checkbox"
                  name="edit"
                  id="edit"
                  className="form-control"
                  checked={edit}
                  onChange={handleedit}
                  />
                  </div>
            </div>
            <div class="form-group row">
                  <label  class="col-sm-2 col-form-label">Add</label>
                  <div class="col-sm-10 pl-5">
                  <input
                  type="checkbox"
                  name="add"
                  id="add"
                  className="form-control"
                  checked={add}
                  onChange={handleadd}
                  />
                  </div>
            </div>
            <div className="row float-right pr-3">
              <button type="submit" onCl className="btn btn-secondary float-right"  onClick={handleAdd}>Save</button>
            </div>

        </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

 export default Editrole;
