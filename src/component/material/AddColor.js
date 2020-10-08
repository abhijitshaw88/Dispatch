import React,{useState} from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button  from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
function AddColor() {
  const [show, setShow] = useState(false);
  const [color, setcolor] = useState('');
  const [image, setimage] = useState('');
  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => setShow(true);
  const handleAdd = async event  =>{

    const formData = new FormData();

   Array.from(image).forEach(image => {
     formData.append('files', image);
   });
   const data = {
     color_name: color,
     image: formData
   }
   try {
     const response =
       await axios.post(
       `https://aggregate-dispatch.herokuapp.com/api/aggregate/addColor`,
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
    console.log(formData);
    setShow(false);
    window.location.reload();
  }
  return (
    <>
      <Button style={{backgroundColor:"grey"}} onClick={handleShow}>
        Add
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}  aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title>Add Color</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row pl-5">
          <label className="pr-5">Color Name</label>
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
          <label className="">Image</label>
           <input type="file"  className="pl-5 ml-5" onChange={e => setimage(e.target.value)} />
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

 export default AddColor;
