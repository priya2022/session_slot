import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import './StudentList.css'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Home from '../../Home/Home';
import {API_URL} from '../../api'
import axios from 'axios';

// const data =[
//   {
//     id:'01',
//     name:'arun',
//     booked:'05',
//     available:'02',
//     complete:'03',
//     scheduleDate:'25/07/2023',
    
//   },
//   {
//     id:'02',
//     name:'Arr',
//     booked:'05',
//     available:'02',
//     complete:'03',
//     scheduleDate:'25/07/2023',
//   }
// ]


const Attendance = () => {

  const [user,setUser] =useState([])
  const [search,setSearch] =useState()
  const [show,setShow]  = useState(false)
  const [msg,setMsg]= useState('')
  const [validated, setValidated] = useState(false);
 

useEffect(()=>{
  axios.get(API_URL.Sessions,{params:{show:'FULL_SESSION'}})
  .then((response)=>{
    console.log("response", response.data.data)
    setUser(response.data.data)
  })
  .catch((error)=>{
    console.error("API request failed with error:", error.message);
  })
},[])

const handleSubmit = (event) => {
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }
  else{
    event.preventDefault();

    const filteredUsers= user.filter((person)=>
    person.name.toLowerCase().includes(search.toLowerCase())
    )
    if(filteredUsers.length === 0 ){
      setShow(true)
      setMsg("Users Not Found")
    }
    else{
      setUser(filteredUsers)
    }
    
  }

  setValidated(true);
};

const handleChange=(name,e)=>{
  if(name === 'userName')
  {
    setSearch(e.target.value)
  }
}


  
  
  return (
    <>
    <Home />
    <div>
    <div className="listWrapper">
    <Form noValidate onSubmit={handleSubmit} className="slForm">

          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              {/* <Form.Label>First name</Form.Label> */}
              <Form.Control
                required
                type="text"
                value={search}
                onChange ={handleChange.bind(this, 'userName')}
                placeholder="Search by User Name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

            <Form.Group  as={Col} md="3" >
            <Button type="submit" variant="warning">Search</Button>
            </Form.Group>
          </Row>
          
        </Form>
        


    <Table striped bordered hover>
      <thead>
        <tr className="userHRow">
          {/* <th> Name</th> */}
          <th>User ID</th>
          <th>Scheduled Dates</th>
          <th>Booked </th>
          <th>Available</th>
          <th>Complete</th>

          
        </tr>
      </thead>
      <tbody>
      {user.map((person) => (
          <tr key={person._id} className="userRow">
            <td>{person.studentId}</td>
            {person.sessions.map((session, sessionIndex) => (
              <React.Fragment key={sessionIndex}>
                <td>{new Date(session.validity.start).toLocaleDateString()}</td>
                <td>{session.validity.end}</td>
                <td>{session.totalSessions}</td>
                <td>{session.sessionsLeft}</td>
                {/* <td>{session.amount}</td>
                <td>{new Date(session.paymentDate).toLocaleDateString()}</td>
                <td>{session.paymentMode}</td>
                <td>{session.paymentStatus}</td>
                <td>{session.paymentType}</td> */}
              </React.Fragment>
            ))}
          </tr>
        ))}
        
      </tbody>
    </Table>
  
    </div>
    
    </div>
    </>
  )
}


export default Attendance

