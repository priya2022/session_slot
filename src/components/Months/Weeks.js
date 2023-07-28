import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import SlotList from '../Listing/SlotList';
import './Month.css'
import { setSlot } from '../../Features/PerDaySlot';
import { useSelector,useDispatch } from 'react-redux';
import styled from 'styled-components'
export const MonthContext = createContext()



const StyledButton = styled(Button)`
    display:flex;
    flex-direction:column;
    padding:2rem;
    align-items:center;
    justify-content:center;

    .wdate{
      font-size:2rem;
    }
    @media only screen and (max-width:480px){
      
    }


`

const initialMonth = [
  "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
]


const Month = () => {
    const [nextSixDays, setNextSixDays] = useState([]);
    const [perDay,setPerDay]=useState([])
    const [highlight,setHighlight] = useState('')
    const [days, setDays] = useState([]);
    const [currentDay,setCurrentDay ] =useState([])
    const dispatch = useDispatch()


  const [mynewMonth,setmyMonth]= useState(initialMonth)
    const [show,setShow] =useState(false)

    

    const today = new Date();

    useEffect(()=>{
      let current = mynewMonth[today.getMonth()]
      setmyMonth(current)
        const tempNextSixDays = [];
        let count = 0;
        // const defaultMorningHour = 11;
        // const defaultEveningHour = 15;

        while (tempNextSixDays.length < 6) {
          const nextDay = new Date(today.getTime() + count * 24 * 60 * 60 * 1000);
          const day = nextDay.getDate();

          // const morningSessionDate = new Date(nextDay);
          // morningSessionDate.setHours(defaultMorningHour);
          // const morningSessionFormattedDate = morningSessionDate.toLocaleDateString('en-US', {
          //   year: 'numeric',
          //   month: 'short',
          //   day: 'numeric',
          // });
    
          // const eveningSessionDate = new Date(nextDay);
          // eveningSessionDate.setHours(defaultEveningHour);
          // const eveningSessionFormattedDate = eveningSessionDate.toLocaleDateString('en-US', {
          //   year: 'numeric',
          //   month: 'short',
          //   day: 'numeric',
          // });
          // console.log("morningSessionFormattedDate",morningSessionFormattedDate.getTime())

          const dayOfWeek = nextDay.toLocaleString('en-US', { weekday: 'short' });
          if (nextDay.getDay() !== 0 && nextDay.getDay() !== 6 ) {
            
            const additionalInfo =[
                {
                  "id":"1",
                  "timings":"11AM-1PM",
                  "count":15,
                   "date":day,
                   "session":'Morning Session',
                   "dayOfWeek":dayOfWeek,
                   "booked":false
                   
                  //  "bookedDate":morningSessionFormattedDate
                  //  "users":[]
                },
                // {
                //   "id":"2",
                //   "timings":"3PM-6PM",
                //   "count":15,
                //     "date":day,
                //     "session":'Evening Session',
                //     "dayOfWeek":dayOfWeek,
                //     // "bookedDate":eveningSessionFormattedDate


                //   //  "users":[]
                // },
              
            ]
            //  console.log("additionalInfo",additionalInfo)

            tempNextSixDays.push(additionalInfo);

          }
          count++;
        }
        setNextSixDays(tempNextSixDays);
      
       
      }, []);

    useEffect(()=>{
      

      const sixDays = nextSixDays.map((item,index)=>{
        return item
      })

      const firsDay = sixDays[0] 
      setCurrentDay(firsDay)
      setHighlight(firsDay)
      dispatch(setSlot(firsDay))

      // console.log("sixdays",firsDay)
      
    },[nextSixDays])
    
    const handleButtonClick=(data)=>{
      const {id,timings,count,dayOfWeek,date} =data
        // console.log("perdata",data)

        dispatch(setSlot(data))
        setPerDay(data)

        setHighlight(data)
    }

    useEffect(()=>{
      generateDays()
    },[])
  
  
    const generateDays = () => {
    const today = new Date();
      
        const currentMonth = today.getMonth();
        const startDay= new Date(today.getFullYear(),currentMonth,1).getDay()
        const daysInMonth = new Date(today.getFullYear(),currentMonth +1,0).getDate();      
      
          const newDays = [];
          for (let i = 0; i < startDay; i++) {
            newDays.push('');
          }
          for (let i = 1; i <= daysInMonth; i++) {
            newDays.push(i);
          }
          setDays(newDays);
          
        
      }

      const myMonthData = {monthDays:days,mynewMonth }


        return (
          <MonthContext.Provider value={myMonthData}>
          <div>
            
     <SlotList perDaySlot = {perDay} currentDay={currentDay} /> 

           <div className="new">      
     <div className= "myMon"  gap={2} style={{"marginTop":"3%"}}>
          {nextSixDays.map((additionalInfoGroup, index) => (
            <div key={index}>
              {/* {console.log("additional",additionalInfoGroup)}
              {console.log("highlight",highlight)} */}


              <weekwrapper> 
         <StyledButton className={`monthBtn ${highlight === additionalInfoGroup ? 'high' : ''}`} variant="outline-warning" onClick={handleButtonClick.bind(this,additionalInfoGroup)} >
         
            <div className="wWeek">{additionalInfoGroup[0].dayOfWeek}</div>
            <div className='wdate'>{additionalInfoGroup[0].date}</div>
            <div className="weekButton">
              
            </div>


           
             
        </StyledButton>
        </weekwrapper>

            </div>
          ))}
          </div>

      </div> 

        </div>
        </MonthContext.Provider>
        );
      };
      




export default Month

 



