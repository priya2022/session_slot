import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import SlotList from '../Listing/SlotList';
import './Month.css'




const Month = () => {
    const [nextSixDays, setNextSixDays] = useState([]);
    const [highlight,setHighlight] = useState('')

    const [slots,setSlot]=useState([
      {
        "id":"1",
        "timings":"10a.m-11a.m",
        "count":15,
        
      },
      {
        "id":"2",
        "timings":"11a.m-12p.m",
        "count":15
      },
      {
        "id":"3",
        "timings":"3p.m-4p.m",
        "count":15
      },
      {
        "id":"4",
        "timings":"4p.m-5p.m",
        "count":15
      },
      {
        "id":"5",
        "timings":"5p.m-6p.m",
        "count":15
      },
    ]);

    const today = new Date();

    useEffect(()=>{
        const tempNextSixDays = [];
        let count = 0;
        while (tempNextSixDays.length < 6) {
          const nextDay = new Date(today.getTime() + count * 24 * 60 * 60 * 1000);
          console.log("nextDay",nextDay)
          if (nextDay.getDay() !== 0) {
            const additionalInfo =[
                {
                  "id":"1",
                  "timings":"10a.m-11a.m",
                  "count":15,
                   "date":nextDay
                  
                },
                {
                  "id":"2",
                  "timings":"11a.m-12p.m",
                  "count":15,
                  "date":nextDay
                },
                {
                  "id":"3",
                  "timings":"3p.m-4p.m",
                  "count":15,
                  "date":nextDay
                },
                {
                  "id":"4",
                  "timings":"4p.m-5p.m",
                  "count":15,
                  "date":nextDay
                },
                {
                  "id":"5",
                  "timings":"5p.m-6p.m",
                  "count":15,
                  "date":nextDay.toLocaleDateString(undefined, { weekday: 'long' }),
                },
            ]
             console.log("additionalInfo",additionalInfo.date)

            tempNextSixDays.push(additionalInfo);

          }
          count++;
        }
        setNextSixDays(tempNextSixDays);
      }, []);

    // Get the current date
    
    const handleButtonClick=(data)=>{
        console.log("data",data)
    }
    
        return (
            <>
            <div>
      {nextSixDays.map((day, index) => (
        <div key={index}>
          <Button className='monthBtn' variant="outline-warning" onClick={handleButtonClick.bind(this, day.date)}>
            {day.date.toLocaleDateString(undefined, { weekday: 'long' })}
            week 
          </Button>
          <SlotList slots={slots} />
        </div>
      ))}
    </div>

            
            </>
        );
      };
      




export default Month

 



