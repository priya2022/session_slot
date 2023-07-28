import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './pastCelebration.css';

const BookedSession = () => {
  const bookedSessions = useSelector((state) => state.booked.value);


  return (
    <>
    <div className="wrapperPast">
    {/* {console.log("bookedSession",bookedSessions)} */}
      <h2 className="pheading">Booked Session</h2>
     { bookedSessions.map((item,index) => {

        if(item.id){
            return(
                <Link to ={`/${item.id}`} className="pastLink">
            <div className="pastCel">
  
              <div className="imgDiv ForAlign celebrityBox">
                <div className="imgBox">
                    <h6>{item.date} {item.dayOfWeek}</h6>
                </div>
              </div>
  
              <div className='ForAlign celebTitle celebrityBox '>
              <h6>{item.timings}</h6>
              </div>
  
              <div className='ForAlign celebLink celebrityBox'>
                  <div className="celebrityBox2">
                   <i class="bi bi-chevron-right alignCelebLink"></i>
              </div>
              </div>
  
            </div>
            </Link>
            )
        }
        // return item.id ? <div key={index}>{item.timings}</div> : null;
       
      })}
      </div>
    </>
  );
};

export default BookedSession;
