import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import './attendance.css'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Home from '../../Home/Home'


const data =[
  {
    "id":'1',
    "name":'arun',
    "session":'05',
    "notShow":true,
    
    
    
  },
  {
    "id":'2',
    "name":'Arr',
    "session":'05',
    "notShow":true,
    
  }
]
const Attendance = () => {

  const [user,setUser] =useState(data)
  const [search,setSearch] =useState()
  const [show,setShow]  = useState(false)
  const [msg,setMsg]= useState('')
  const [toggle,setToggle] = useState(true)
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
      event.preventDefault();

      const filteredUsers= data.filter((person)=>
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
  

  const handleReport =(id)=>{
    console.log("id",id)
    const userId = id.toString()
    console.log("id",userId)

    const updateAttendance = user.map((item)=>{

      if(item.id === String(userId)) {
        return {...item,"notShow":!item.notShow}
      }
      return item
    })
    console.log("updateAttendance",updateAttendance)
    setUser(updateAttendance)
  }

  return (
    <>
    <Home />
    <div>

      <div className=" attendanceWrapper">
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

    <Table striped bordered hover className="tableAttendance">
      <thead className="tbMain">
        <tr className="tbRow">
          <th>User ID</th>
          <th> Name</th>
          <th>Section 11.00am</th>
          <th>Attendance</th>
          
        </tr>
      </thead>
      <tbody>
        {
          (!show)? (
            user.map((person,index)=>{
              const {id,name,session,notShow} = person
  
             const isNotShow = notShow ?  'userPresent': 'userAbsent'
             const istdata = notShow ? 'tdRed':"tdGreen"
             console.log("isNotShow",isNotShow)
            return(
              <>
              <tr key ={index} className={`tableBody ${istdata} `}>
              <td>{id}</td>
              <td >{name}</td>
              <td>{session}</td>
              <td>
              <Button onClick={handleReport.bind(this,id)} className={`text-center ${isNotShow}`}>
              {notShow ? ' Show' : 'Not Show'}              
              </Button>
              </td>
              </tr>
              </>
            )
           
          })

          ):(<div>{msg}</div>)
           
        }
       
      </tbody>
    </Table>
     </div>
    </div>
    </>
  )
}

export default Attendance

