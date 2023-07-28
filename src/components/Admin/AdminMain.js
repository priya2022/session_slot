import React from 'react'
import ListingPage from './Main/ListingPage'
import Form from './StudentForm/ScheduleStudent/Form'
import Home from './Home/Home'
import './admin.css'
import Attendance from './StudentForm/Attendance/Attendance'
const AdminMain = () => {
  return (
    <div className ="adminPage">
      {/* <Attendance /> */}
        <div className="adLeft">
        <Home  />
        </div>

        <div className="adRight">
        <ListingPage className="adright" />
        </div>
         {/* <Form />  */}
    </div>
  )
}

export default AdminMain