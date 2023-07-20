import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import SlotList from '../Listing/SlotList';
import './Month.css'
import { setSlot } from '../../Features/PerDaySlot';
import { useSelector,useDispatch } from 'react-redux';
export const MonthContext = createContext()

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
        while (tempNextSixDays.length < 6) {
          const nextDay = new Date(today.getTime() + count * 24 * 60 * 60 * 1000);
          const day = nextDay.getDate();
          const dayOfWeek = nextDay.toLocaleString('en-US', { weekday: 'long' });
          if (nextDay.getDay() !== 0) {
            
            const additionalInfo =[
                {
                  "id":"1",
                  "timings":"10a.m-11a.m",
                  "count":15,
                   "date":day,
                   "dayOfWeek":dayOfWeek,
                  //  "users":[]
                },
                {
                  "id":"2",
                  "timings":"11a.m-12p.m",
                  "count":15,
                    "date":day,
                   "dayOfWeek":dayOfWeek,
                  //  "users":[]
                },
                {
                  "id":"3",
                  "timings":"3p.m-4p.m",
                  "count":15,
                    "date":day,
                   "dayOfWeek":dayOfWeek,
                  //  "users":[]
                },
                {
                  "id":"4",
                  "timings":"4p.m-5p.m",
                  "count":15,
                    "date":day,
                   "dayOfWeek":dayOfWeek,
                  //  "users":[]
                },
                {
                  "id":"5",
                  "timings":"5p.m-6p.m",
                  "count":15,
                    "date":day,
                   "dayOfWeek":dayOfWeek,
                  //  "users":[]
                },
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

           <div className="new">      
     <div className= "myMon"  gap={2} style={{"marginTop":"3%"}}>
          {nextSixDays.map((additionalInfoGroup, index) => (
            <div key={index}>
              {/* {console.log("additional",additionalInfoGroup)}
              {console.log("highlight",highlight)} */}
         <Button className={`monthBtn ${highlight === additionalInfoGroup ? 'high' : ''}`} variant="outline-warning" onClick={handleButtonClick.bind(this,additionalInfoGroup)} >
            {additionalInfoGroup[0].dayOfWeek}
             
        </Button>
            </div>
          ))}
          </div>

      </div> 
     <SlotList perDaySlot = {perDay} currentDay={currentDay} /> 

        </div>
        </MonthContext.Provider>
        );
      };
      




export default Month

 



