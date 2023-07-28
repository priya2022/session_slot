import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import './Listing.css'
import { useDispatch } from 'react-redux';
import { AddUsers } from '../../../../Features/Admin/AssigningSession';
import Home from '../../Home/Home';
import axios from 'axios';


const FormComponent = () => {

  const dispatch = useDispatch()

    const [id,setId]= useState('')
    const [name,setName] = useState('')
    const [validated, setValidated] = useState(false);
    const  [data,setData] = useState({
      studentId: '',
      // studentName:'',
      totalSessions:0,
      date:'',
      sessionsLeft :0,
      amount:0,
      paymentDate:'',
      paymentMode: '',
      paymentStatus: '',
      paymentType: '',
      validity:{
        start:''
      }

    })

    // useEffecf(()=>{
    //   sessionsLeft :'',
    // },[])
   

    useEffect(()=>{

      const storedData = JSON.parse(localStorage.getItem("userData"))

      const userName = JSON.parse(localStorage.getItem("userName"))

      

      if(storedData)
        {
          const userId = storedData.data.insertedId
          setId(userId)
        }

        if(userName)
        {
          const userN = userName.firstName
          setName(userN)
        }
    },[])

    // useEffect(()=>{
    //   setData((prevState)=>({
    //     ...prevState,
    //     studentId:id|| '',
    //     studentName:name|| ''

    //   }))
      
    // },[id,name])

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      else{
        event.preventDefault();
        event.stopPropagation()

        const submitData = {
          
          studentId: data.studentId,
          validity: {
            start:new Date( data.date).getTime()// Assuming that the 'start' property of 'validity' holds the date number
          },
          totalSessions: parseInt(data.totalSessions),
          sessionsLeft: parseInt(data.totalSessions), // Assuming that 'sessionsLeft' should be the same as 'totalSessions'
          amount: parseInt(data.amount),
          paymentDate: new Date(data.paymentDate).getTime(),
          paymentMode: data.paymentMode,
          paymentStatus: data.paymentStatus,
          paymentType: data.paymentType,
        };
        console.log("submitData",submitData)

        // fetch('https://codelabs-server.el.r.appspot.com/v1/admin/sessions', {
        //   method: 'POST',
        //   headers: {
        //     'accept': 'application/json',
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify(submitData)
        // })
        //   .then((response) => {
        //     // Check if the response status is in the success range (200-299) indicating success
        //     if (response.ok) {
        //       // Parse the response body as JSON
        //       return response.json();
        //     } else {
        //       // If the response status is outside the success range, handle the error
        //       throw new Error('Network response was not ok.');
        //     }
        //   })
        //   .then((data) => {
        //     // 'data' will contain the parsed response data (assuming the server returns JSON data)
        //     console.log("Response data:", data);
        //   })
        //   .catch((error) => {
        //     // Handle any errors that occurred during the request or response processing
        //     console.log("Error:", error.message);
        //   });

          //         axios.post('https://codelabs-server.el.r.appspot.com/v1/admin/sessions', submitData, {
          // headers: {
          //   'accept': 'application/json',
          //   'Content-Type': 'application/json'
          // }
          // })
          // .then(response => {
          //   console.log("Response data:", response.data);
          // })
          // .catch(error => {
          //   console.log("Error:", error.message);
          // });


        // axios.post('https://codelabs-server.el.r.appspot.com/v1/admin/sessions', submitData, {
        //   headers: {
        //     'accept':'application/json',
        //     'Content-Type': 'application/json',
        //   },
        // })
        //   .then((response) => {
        //     console.log("Response data:", response.data);
        //   })
        //   .catch((error) => {
        //     console.log("Error:", error.message);
        //   });

        
          console.log("data",data)
        
        dispatch(AddUsers(data))
      }
  
      setValidated(true);
    };
  

    // const handleChange =(event)=>{
    //   const {name,value} = event.target
    //   if (name === 'date') {
    //     const selectedDate = new Date(value);
  
    //     // Set the default time (11:00:00 AM) for the selected date
    //     selectedDate.setHours(11);
    //     selectedDate.setMinutes(0);
    //     selectedDate.setSeconds(0);
    //     setData((prevData) => ({
    //       ...prevData,
    //       validity: {
    //         start: selectedDate.toISOString().split('T')[0],
    //       },
    //       paymentDate:selectedDate.toISOString().split('T')[0],
    //       date:selectedDate.toISOString().split('T')[0],

    //       [name]: selectedDate.getTime(),
    //     }));
    //   } 
    //   else {
    //     setData((prevData) => ({
    //       ...prevData,
    //       [name]: name === "totalSessions" ? parseInt(value, 10) : value,
    //       sessionsLeft:prevData.totalSessions,
    //       [name]: value
    //     }));
    //   }
    // }


    const handleChange = (event) => {
      const { name, value } = event.target;
    
      if (name === 'date') {
        const selectedDate = new Date(value);
    
        // Set the default time (11:00:00 AM) for the selected date
        selectedDate.setHours(11);
        selectedDate.setMinutes(0);
        selectedDate.setSeconds(0);

        const formattedDate = selectedDate.toISOString().split('T')[0];
        console.log("Formatted date:", formattedDate);
    
        setData((prevData) => ({
          ...prevData,
          validity: {
            start: formattedDate, // Convert to "yyyy-MM-dd" format
          },
          paymentDate: formattedDate, // Convert to "yyyy-MM-dd" format
          [name]: formattedDate
        }));
      } else {
        setData((prevData) => ({
          ...prevData,
          [name]: name === "totalSessions" ? parseInt(value, 10) : value,
          sessionsLeft: prevData.totalSessions,
          [name]: value
        }));
      }
    };
    

   
  return (
    <>
    <Home />
    <div>

      <div className="container-fluid">
      <div className="fmyListingcontainer">

      
    <div  className ="formCard">
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="fSchedule">
       <Row className="mb-3 cardRow">

      <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Student ID</Form.Label>
          <Form.Control
            required
            type="string"
            placeholder="Student ID"
            name="studentId"
            value={data.studentId}
            onChange ={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as ={Col} md="6" controlId="validationCustom06"> 
          <Form.Label>
            Select Selection
          </Form.Label>
          <Form.Control as ="select" 
          value={parseInt(data.totalSessions)}
          onChange ={handleChange}

          name="totalSessions"
          placeholder="select Section"
           required>
            <option value="">select Section</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </Form.Control>
        
        </Form.Group>

        {/* <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Student Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Student Name"
            name="studentName"
            value={name}
            onChange ={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group> */}


      </Row>

       <Row className="mb-3 cardRow">

        {/* <Form.Group as ={Col} md="6" controlId="validationCustom06"> 
          <Form.Label>
            Select Selection
          </Form.Label>
          <Form.Control as ="select" 
          value={parseInt(data.totalSessions)}
          onChange ={handleChange}

          name="totalSessions"
          placeholder="select Section"
           required>
            <option value="">select Section</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </Form.Control>
        
        </Form.Group> */}

        

        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" 
          placeholder="State"
          value={data.date}
          name="date"
          required
          onChange ={handleChange}/>
           
         
            
          <Form.Control.Feedback type="invalid">
            Please provide a valid Date.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label> Payment Amount</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Payment Amount"
            name="amount"
            value={parseInt(data.amount)}
            onChange ={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

       


      </Row>

                 <Row className="mb-3 cardRow">

                <Form.Group as ={Col} md="6" controlId="validationCustom06"> 
              <Form.Label>
              Payment Mode
              </Form.Label>
              <Form.Control as ="select" 
              value={data.paymentMode}
              onChange ={handleChange}

              name="paymentMode"
              placeholder="select Payment Mode"
              required>
                <option value=""> Payment Mode</option>
                <option value="cash">Cash</option>
                <option value="bank-transfer">Bank Transfer</option>
                <option value="upi">upi</option>

              </Form.Control>

            </Form.Group>

          {/* <Form.Group as ={Col} md="6" controlId="validationCustom06"> 
            <Form.Label>
              Payment Amount
            </Form.Label>
            <Form.Control as ="select" 
            value={data.amount}
            onChange ={handleChange}

            name="amount"
            placeholder=" Payment Amount"
            required>
              <option value="">select Section</option>
              <option value="section 5">5</option>
              <option value="section 10">10</option>
            </Form.Control>

          </Form.Group> */}



          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>Payment Date</Form.Label>
            <Form.Control type="date" 
            placeholder="paymentDate"
            value={data.date}
            name="date"
            onChange ={handleChange}
            
            //  pattern="\d{4}-\d{2}-\d{2}"
              />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Date.
            </Form.Control.Feedback>
          </Form.Group>




          </Row>

       <Row className="mb-3 cardRow">

            {/* <Form.Group as ={Col} md="6" controlId="validationCustom06"> 
              <Form.Label>
              Payment Mode
              </Form.Label>
              <Form.Control as ="select" 
              value={data.paymentMode}
              onChange ={handleChange}

              name="paymentMode"
              placeholder="select Payment Mode"
              required>
                <option value=""> Payment Mode</option>
                <option value="cash">Cash</option>
                <option value="bank-transfer">Bank Transfer</option>
                <option value="upi">upi</option>

              </Form.Control>

            </Form.Group> */}

<Form.Group as ={Col} md="6" controlId="validationCustom06"> 
          <Form.Label>
          Payment Type
          </Form.Label>
          <Form.Control as ="select" 
          value={data.paymentType}
          onChange ={handleChange}

          name="paymentType"
          placeholder="select Section"
          required>
            <option value="">select Payment Type</option>
            <option value="full">full</option>
            <option value="partial">partial</option>
          </Form.Control>

        </Form.Group>


            <Form.Group as ={Col} md="6" controlId="validationCustom06"> 
              <Form.Label>
              Payment Status
              </Form.Label>
              <Form.Control as ="select" 
              value={data.paymentStatus}
              onChange ={handleChange}

              name="paymentStatus"
              placeholder="select Section"
              required>
                <option value="">select Payment</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
              </Form.Control>

            </Form.Group>



            </Row>

                   
      

        <div className="scheduleButton">
      <Button className="d-flex ml-auto sBtn" type="submit">Book a schedule</Button>
      </div>
    </Form>
    </div>

    </div>
    </div>
      </div>
      </>
  )
}

export default FormComponent