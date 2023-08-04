import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFirebase } from "../context/Firebase";

const Login = () => {
  const firebase = useFirebase();
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(firebase)

  useEffect(() => {
    if(firebase.isLoggedIn){
        // ! navigate to Home
        navigate('/')
    }
  }, [firebase, navigate])

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('logging in a user...')
        
        const result = await firebase.signInUserWithEmailAndPassword(email, password)


        console.log('Successfull!', result)
    }

    const handleSubmitWithSignInWithGoogle = async () => {
        await firebase.signInWithGoogle()
    }

  return (
    <div className="container mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

      <h4 className="mt-5 mb-5">OR</h4>
      <Button onClick={handleSubmitWithSignInWithGoogle} variant="danger">Sign In With Google</Button>
    </div>
  );
};

export default Login;
