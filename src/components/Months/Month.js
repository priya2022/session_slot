import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Listing from '../Listing/Listing';
import './Month.css'
const initialMonth = [
  "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
]

export const MonthContext = createContext()
const Month = () => {
  
  const [month,setMonth]= useState('')
 const [mynewMonth,setmyMonth]= useState(initialMonth)
 const [highlight,setHighlight]= useState('')
  const [data,setData]=useState([])
  const [days, setDays] = useState([]);


  useEffect(()=>{    
    let d = new Date();
    let current = mynewMonth[d.getMonth()]
    setmyMonth(current)
    
  },[])


  const generateDays = (data) => {
    if (data && data.length > 0) {
      const currentMonth = data.find((item) => item.month === month);
      if (currentMonth && currentMonth.startOfWeek) {
        const startDay = currentMonth.startOfWeek; // Assuming startOfWeek is provided in the API response
        const daysInMonth = new Date(
          new Date().getFullYear(),
          mynewMonth.indexOf(month) + 1,
          0
        ).getDate();
        const newDays = [];
        for (let i = 0; i < startDay; i++) {
          newDays.push('');
        }
        for (let i = 1; i <= daysInMonth; i++) {
          newDays.push(i);
        }
        setDays(newDays);
      }
    }
  };


  const callgetApi=async()=>{
   const response = await axios.get("https://646352d67a9eead6fae32f76.mockapi.io/year")
   setData(response.data)
 }

  useEffect(()=>{
    callgetApi()
  
  },[])
  
  const handleChange=(month)=>{
    setMonth(month.month)
    generateDays(data);
  }
  
  
  const dataReceiver = (data)=>{
    console.log("data",data);    
    setHighlight(data)
     
   }

  const myMonthData = {monthData:data,monthDays:days }


  
  return (
   
    <MonthContext.Provider value={myMonthData}>
      {console.log("Monthin My Month", month)}
    <div className="new">      
    <div className= "myMon"  gap={2} style={{"marginTop":"3%"}}>
    {
      data.map((month)=>{
        return(         
          <Button className={`monthBtn ${highlight.includes(month.month)  ? "high" : " "}`} variant="outline-warning" onClick={handleChange.bind(this, month)}>{month.month}</Button>
        )
       
      })
    }
    </div>

    </div>
    <Listing month={month} mynewMonth={mynewMonth} monthDataReceiver={dataReceiver}/> 
    </MonthContext.Provider>
  )
}

export default Month