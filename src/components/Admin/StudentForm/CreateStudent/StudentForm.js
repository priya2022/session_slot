import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';

import Offcanvas from 'react-bootstrap/Offcanvas';

import './Popup.css'
import { useDispatch, useSelector } from 'react-redux';
import { addNewUsers } from '../../../../Features/Admin/CreateUser';
import axios from 'axios';
import Home from '../../Home/Home';
import { useNavigate } from 'react-router-dom';


const userDetails = (state)=> state.newUser.value.map((user,index)=>({
  name:user.firstName,
  emailId:user.email
}))

function PopDis({show,setShow}) {

  const navigate = useNavigate()
  
  let userIdCounter = 0;
  
  const [lastUsedId, setLastUsedId] =useState(0)

  const dispatch = useDispatch()

  const user =useSelector(state=> state.newUser.value)

    const FormLabel={
        fontWeight:'700'
    }
  

  const offCanvasStyles ={
    height:'95vh',
    borderTopLeftRadius:"50px",
    borderTopRightRadius:"50px",
    border:"2px solid purple",

  }

  const popUpContent={
    display:"flex",
    flexDirection:"column",   
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height: "80vh",
    border:"2px solid red",
    textAlign: "justify",
  }

const userInfo = useSelector(userDetails)
  

  const handleClose = () => setShow(false);

  const [validated, setValidated] = useState(false);
      const  [data,setData] = useState({
        // userId: 1,
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        // dob:'',
        contactNumber:0,
        address:'',
        preference:'',
        age:0
  
  
      })

      const calculateAge = (value) => {
        const dob = new Date(value);
        const currentDate = new Date();
    
        let age = currentDate.getFullYear() - dob.getFullYear();
        const currentMonth = currentDate.getMonth();
        const currentDay = currentDate.getDate();
    
        const birthMonth = dob.getMonth();
        const birthDay = dob.getDate();
    
        if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
          age -= 1; // Reduce age if the birthday has not occurred yet this year
        }
    
        return age;
      };




      const handleSubmit = (event) => {

        const isDuplicate = userInfo.some(
          (user) => user.emailId === data.email && user.name === data.firstName
        );
        
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else{
        
          if(isDuplicate){
            alert('Email and Name combination already registered. Please use a different email or name.');
          }
          else{


           

            const age = calculateAge(data.dob)
            // const newUserId = lastUsedId + 1;
            
            // setLastUsedId(newUserId)

            setData((prevData)=>{
              return {
                ...prevData,
                
               
              };///here the newUserId remains the same as 1
            })

            // setData((prevData)=>{
            //   return { ...prevData, userId: lastUsedId , age: age }; ///here the newUserId remains the same as 1
            // })
            localStorage.setItem('userName', JSON.stringify({...data}));
           

            axios.post('https://codelabs-server.el.r.appspot.com/v1/admin/users/create',{
              ...data
            }).then((response)=>{
              localStorage.setItem('userData', JSON.stringify(response.data));
              console.log("data",response.data)
            })


            dispatch(addNewUsers(data))
            event.preventDefault();          
            console.log("user created",data)
          }
          
         
        }
    
        setValidated(true);
        navigate('/schedule')
      };
    
  
      const handleChange =(event)=>{
        const {name,value} = event.target
        if (name === 'preference') {
          const preferenceArray = value.split(',').map(item => item.trim()); // Split by comma and remove leading/trailing whitespaces
          setData(prevData => ({
            ...prevData,
            [name]: preferenceArray,
          }));
        } else {
          setData(prevData => ({
            ...prevData,
            [name]: value,
          }));
        }
      }

 
  


  return (
    <>
    <div >
      <Home />
     
     
      <div className="container-fluid">
        <div className="CardWrapper">
      
           <div className="sfCard " >

           <Form noValidate validated={validated} onSubmit={handleSubmit} className ="stForm">
    
             <Row className="mb-3 cardRow">
      
            <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label style={FormLabel}>First Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={data.firstName}
                  onChange ={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label style={FormLabel}>Last Name</Form.Label>
                    <Form.Control
                    required
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={data.lastName}
                    onChange ={handleChange}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>


     </Row>

       
     <Row className="mb-3 cardRow">
      
      <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label style={FormLabel}>Email ID</Form.Label>
          <Form.Control
           required
           type="email"
           placeholder="Email ID"
           name="email"
           value={data.email}
           onChange ={handleChange}
         />
         <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
       </Form.Group>

       <Form.Group as={Col} md="4" controlId="validationCustom01">
         <Form.Label style={FormLabel}>Password</Form.Label>
         <Form.Control
           required
           type="text"
           placeholder="Password"
           name="password"
           value={data.password}
           onChange ={handleChange}
         />
         <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
       </Form.Group>


     </Row>

     <Row className="mb-3 cardRow">
      
     <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label style={FormLabel}>Age</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Enter your age"
            name="age"
            value={data.age}
            onChange ={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
{/* 
      <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label style={FormLabel}>Date Of Birth</Form.Label>
          <Form.Control
            required
            type="date"
            placeholder="Date Of Birth"
            name="dob"
            value={data.dob}
            onChange ={handleChange}
            pattern="\d{4}-\d{2}-\d{2}"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group> */}

        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label style={FormLabel}>Contact Number</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter your Phone Number"
            name="contactNumber"
            value={data.contactNumber}
            onChange ={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        </Row>

        <Row className="mb-3 cardRow">
      
      <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label style={FormLabel}>Preferences</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="HTML, Javascript, Python"
            name="preference"
            value={data.preference}
            onChange ={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label style={FormLabel}>Address</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter your Residential Address "
                name="address"
                value={data.address}
                onChange ={handleChange}
                style={{ height: '100px' }}
                />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

        </Row> 
        
        <div className="buttonSubmit" as={Col} md="4">
      <Button className="btnSubmit"  block variant ="warning" type="submit">Submit</Button>

        </div>
    </Form>
          </div>
          </div>
          </div>
  
        {/* </Offcanvas.Body>
      </Offcanvas> */}


        </div>
    </>
  );
}

export default PopDis;