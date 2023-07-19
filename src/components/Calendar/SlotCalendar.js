import axios from 'axios';
import * as React from 'react';
import { useEffect,useState,useContext } from 'react';
import { MonthContext } from '../Months/Weeks';
// import {ListingContext} from '../Listing/Listing'
import './myCalendar.css'
import BookedSession from  '../PastCelebrations/BookedSession'
import { useSelector } from 'react-redux';



const Cal=()=> {
  const bookedSessions = useSelector((state) => state.booked.value);
  const [bookedDates,setBookedDates] = useState([])
  

  const {monthDays,mynewMonth} = useContext(MonthContext)

    useEffect(()=>{
      const BookedDate= bookedSessions.map(item=>{
        return item.id ? item.date : null
      })
      setBookedDates(BookedDate)
    },[bookedSessions])

  return (
    
    <>
    

<div className="myCalCont">
<div  className="table"> 

    <div className='monthdisplay'>                 
    <h4 className="calHead"> {mynewMonth} 2023</h4>
     
   
  </div> 
  <ul>
      <li>Sun</li>
      <li>Mon</li>
      <li>Tue</li>
      <li>Wed</li>
      <li>Thu</li>
      <li>Fri</li>
      <li>Sat</li>
    </ul>
  <div className="myCalendarcontainer">

{monthDays.map((day, index) => {
  
  const isBooked =bookedDates.includes(day)
  
  
    return (
      <div >
          <div key={index} className={isBooked? 'highlight':''}>
        {day}
      </div>
      </div>
      
    );
  })}
      </div> 
      </div>
      <BookedSession />

  </div>
    </>
  )
}

export default Cal;