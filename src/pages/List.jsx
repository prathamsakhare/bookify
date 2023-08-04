import React, {useState} from 'react'
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useFirebase } from '../context/Firebase';

export const List = () => {

    const firebase = useFirebase();

    const [name, setName] = useState('');
    const [isbnNumber, setIsbnNumber] = useState('');
    const [price, setPrice] = useState('');
    const [coverPic, setCoverPic] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        firebase.handleCreateNewListing(name, isbnNumber, price, coverPic)

    }

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Book Name</Form.Label>
          <Form.Control value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Enter Book Name..." />
         
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>ISBN</Form.Label>
          <Form.Control value={isbnNumber} onChange={e => setIsbnNumber(e.target.value)} type="text" placeholder="ISBN Number..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control value={price} onChange={e => setPrice(e.target.value)} type="text" placeholder="Enter Price..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Cover Picture</Form.Label>
          <Form.Control onChange={e => setCoverPic(e.target.files[0])} type="file" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </Container>
  );
};

export default List;
