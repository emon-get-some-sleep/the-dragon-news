import React, { useContext } from 'react';

import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from '../../../providers/AuthProviders';
import { useState } from 'react';
import useTitle from '../../../hooks/useTitle';
const Register = () => {
  const {createUser} = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  useTitle('register')
  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, photo, password);
    createUser(email, password)
    .then(result => {
      const createdUser = result.user;
      console.log(createdUser);
    })
    .catch(error => {
      console.log(error);
    })
  }
  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  }
    return (
        <Container className="w-25 mx-auto">
      <h3>Please Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3"  >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Your Name" required/>
         
        </Form.Group>
        <Form.Group className="mb-3"  >
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name="photo" placeholder="Photo URL" required/>
         
        </Form.Group>
        <Form.Group className="mb-3"  >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required/>
         
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name= "password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Check 
           type="checkbox"
           name="accept" 
           onClick={handleAccepted}
           label={<>Accept <Link to="/terms">Terms</Link></>} />
        </Form.Group>
        <Button variant="primary" disabled={!accepted} type="submit">
          Register
        </Button>
        <br />
      <Form.Text className="text-secondary">
        Already Have an Account? <Link to="/login">Login</Link>
      </Form.Text>

        <Form.Text className="text-success">
           
          </Form.Text>
        <Form.Text className="text-danger">
            
          </Form.Text>
      </Form>
    </Container>
    );
};

export default Register;