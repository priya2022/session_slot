import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import './StudentList.css'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Home from '../../Home/Home';


const data =[
  {
    id:'01',
    name:'arun',
    booked:'05',
    available:'02',
    completed:'03',
    validity:'Aug 15',
    status:'Active'
  },
  {
    id:'02',
    name:'Arr',
    booked:'05',
    available:'02',
    completed:'03',
    validity:'Aug 15',
    status:'In Active'
  }
]


const Attendance = () => {

  const [user,setUser] =useState(data)
  const [search,setSearch] =useState()
  const [show,setShow]  = useState(false)
  const [msg,setMsg]= useState('')
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
          <th> Name</th>
          <th>Student ID</th>
          <th>Booked</th>
          <th>Available</th>
          <th>Completed</th>
          <th>Validity</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {
          (!show ) ? 
          (
            
              user.map((person,index)=>{
              const {id,name,booked,available,completed,status,validity} = person
  
              const statusClass = status === 'Active' ? 'status-active' : 'status-inactive';
              const newStatusClass = status === 'Active' ? 'tdActive' : 'tdInactive';
            return(
              <>
              <tr key ={index} className={`userRow ${newStatusClass}`}>
              <td >{name}</td>
              <td>{id}</td>
              <td>{booked}</td>
              <td>{available}</td>
              <td>{completed}</td>
              <td>{validity}</td>
              <td className={statusClass}>{status}</td>
  
              
              </tr>
              </>
            )
           
          })
          ) :
          
          (<div>{msg}</div>)
        }
       

        
        
      </tbody>
    </Table>
  
    </div>
    </div>
    </>
  )
}

export default Attendance

