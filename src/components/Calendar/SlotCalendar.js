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

  <div className="mainContent">

  <ul className="weeks">
      <li className="weekDays">Sun</li>
      <li className="weekDays">Mon</li>
      <li className="weekDays">Tue</li>
      <li className="weekDays">Wed</li>
      <li className="weekDays">Thu</li>
      <li className="weekDays">Fri</li>
      <li className="weekDays">Sat</li>
    </ul>

    <div className="calendar">


{monthDays.map((day, index) => {
  let className = 'calendar-day';
  const isBooked =bookedDates.includes(day)
  
  
    return (
      <div className={className}>
          <div key={index} className={isBooked? 'highlight':''}>
        {day}
      </div>
      </div>
      
    );
  })}
    </div> 
      </div> 
      </div>
      <BookedSession />

  </div>
    </>
  )
}

export default Cal;