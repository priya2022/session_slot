import StudentForm from '../StudentForm/CreateStudent/StudentForm'
import Schedule from '../StudentForm/ScheduleStudent/Form'
import Attendance from '../StudentForm/Attendance/Attendance'
import StudentList from '../StudentForm/ListStudent/AllStu'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import './createStudent.css'
import { Link } from 'react-router-dom'

const ListingPage = () => {
    const[show,setShow] = useState(false)
    const [activeComponent,setActiveComponent] = useState(null)
   

    // const handleClick =(component)=>{
    //     setActiveComponent(component)
    // }
    // const handleShow=()=>{
    //     setShow(true)
    // }

  return (
    <div>

        <div className="userWrapper">

            <Link to='/create'>
            <div className="iconWrapper">
                {/* <Button className="addUser" onClick={handleShow} > */}
                <Button className="addUser" >

                  <div>
                  <i class="bi bi-plus-circle"></i>
                  </div>
                  <div>
                <p className="userText">Create New User</p>
                  </div>
                </Button>
            </div>
            </Link>

            <Link to='/schedule'>
            <div className="iconWrapper">
                {/* <Button className="addUser" onClick={handleClick.bind(this,'createSession')}> */}
                <Button className="addUser" >
                  <div> 
                <i class="bi bi-plus-circle"></i> 
                  </div>
                  <div>
                <p className="userText">
                  Create Section
                </p>
                  </div>
                
                </Button>
            </div>
            </Link>

            <Link to='/attendance'>
            <div className="iconWrapper">
                {/* <Button className="addUser" onClick={handleClick.bind(this,'createAttendance')}> */}
                <Button className="addUser" >

                  <div>
                  <i class="bi bi-people"></i>
                  </div>
                  <div>
                <p className="userText">
                   Attendance
                </p>
                  </div>
                </Button>
            </div>
            </Link>

            <Link to='/list'>
            <div className="iconWrapper">
                {/* <Button className="addUser" onClick={handleClick.bind(this,'createMembers')}> */}
                <Button className="addUser" >

                  <div>
                  <i class="bi bi-card-list"></i>
                  </div>
                  <div>
                <p className="userText">Members </p>
                  </div>
                </Button>
            </div>

            </Link>

           


            

            
    {/* </Card> */}


</div>
{/* 
                    {activeComponent === 'createUser' && <StudentForm/>}
                    {
                        show && <StudentForm show={show} setShow = {setShow}/>
                    }
                    {activeComponent === 'createSession' && <Schedule/>}
                    {activeComponent === 'createAttendance' && <Attendance/>}
                    {activeComponent === 'createMembers' && <StudentList/>} */}


    </div>
  )
}

export default ListingPage
