import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './booked.css'

const BookedSession = () => {
    const user = useSelector(state=>state.dashBoard.value)
  return (
    <div className='bwrapper'>
        <h2 className="bpheading">Booked Session</h2>
     { user.map((item,index) => {

        if(item.id){
            return(
                <Link to ={''} className="bpastLink">
            <div className="bpastCel">
  
              <div className="bimgDiv bForAlign">
              <h6>{item.date} {item.dayOfWeek}</h6>
              </div>
  
              <div className='bForAlign bcelebTitle'>
              <h6>{item.timings}</h6>
              </div>
  
              <div className='bForAlign bcelebLink'>
              <i class="bi bi-chevron-right balignCelebLink"></i>
              </div>
  
            </div>
            </Link>
            )
        }
        // return item.id ? <div key={index}>{item.timings}</div> : null;
       
      })}
      
        
    </div>
  )
}

export default BookedSession