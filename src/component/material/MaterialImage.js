import React,{useState} from 'react';
import faker from 'faker';
import Button  from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function MaterialImage() {

  return (
    <>
    <Card>
      <Card.Img variant="top" src={faker.image.business()}/>
      <Card.Body>
      <Card.Text>
        Color Name
      </Card.Text>
      </Card.Body>
      </Card>

    </>
  );
}

 export default MaterialImage;
