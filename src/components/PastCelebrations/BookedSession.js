import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './pastCelebration.css';

const BookedSession = () => {
  const bookedSessions = useSelector((state) => state.booked.value);


  return (
    <>
    {/* {console.log("bookedSession",bookedSessions)} */}
      <h2 className="pheading">Booked Session</h2>
     { bookedSessions.map((item,index) => {

        if(item.id){
            return(
                <Link to ={`/${item.id}`} className="pastLink">
            <div className="pastCel">
  
              <div className="imgDiv ForAlign">
              <h6>{item.date} {item.dayOfWeek}</h6>
              </div>
  
              <div className='ForAlign celebTitle'>
              <h6>{item.timings}</h6>
              </div>
  
              <div className='ForAlign celebLink'>
              <i class="bi bi-chevron-right alignCelebLink"></i>
              </div>
  
            </div>
            </Link>
            )
        }
        // return item.id ? <div key={index}>{item.timings}</div> : null;
       
      })}
      
    </>
  );
};

export default BookedSession;
