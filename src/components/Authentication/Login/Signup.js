import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../../Features/User';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(state=> state.user.value)
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signUp({firstName,lastName,email,password}))
    navigate('/')
    // Perform signup logic here, such as making an API request
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    

  };

  return (
    <>
    {
      !user.email && (
        <div className="signupBorder ">
    <div className="main_container">
        <div className="imgContainer">
         <img src="assets/images/login.png" alt="" className="loginImage"/>
      </div>   
    <Container className="login-Signupcontainer">   
    <div className="signupAlign">   
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label className="Login_Label">First Name</Form.Label>
          <Form.Control
            type="text"
            value={firstName}
              placeholder="Enter your FirstName"
             className="Login_Input"   
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="Login_Label">Last Name</Form.Label>
          <Form.Control
            type="text"
            value={lastName}
              placeholder="Enter your LastName"
             className="Login_Input"   
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="Login_Label">Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
              placeholder="Enter your Email"
             className="Login_Input"   
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="Login_Label">Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
              placeholder="Enter your Password"
             className="Login_Input"   
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="Login_Label">Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={confirmPassword}
              placeholder="Enter your ConfirmPassword"
             className="Login_Input"   
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" className="LoginButton"  variant="warning">Signup</Button>
        <b>If not registered please Signup!</b>
            <Link to='/'>
            <Button type="submit" className="LoginButton" variant="warning">Login</Button>
            </Link>
      </Form>
      </div>
    </Container>
    </div>
    </div>
      )
    }
    
    
    </>
  );
};

export default Signup;
