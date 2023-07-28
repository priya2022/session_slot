import axios from 'axios'
import React, {  useEffect, useState,createContext } from 'react'
import Card from 'react-bootstrap/Card';
import './Listing.css'
import SlotCalendar from '../Calendar/SlotCalendar'
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from './Modal'
import {useSelector} from 'react-redux'
import { setBooking } from '../../Features/slotBooking';
import { setSlot } from '../../Features/PerDaySlot';

import {useDispatch} from 'react-redux'



const Listing = ({currentDay}) => {
  
  const navigate= useNavigate()

  const dispatch = useDispatch()
  const data = useSelector(state=> state.perDaySlot.value)
  const user = useSelector(state=> state.user.value)

  const [show, setShow] = useState(false);
  const [list,setList] = useState([])



  useEffect(()=>{


    let currentData =data||currentDay
    

    setList(currentData)
  },[data,currentDay])

  
  const handleSlotClick=(item)=>{
    
  
    const isAlreadyBooked= user.isBooked.some(booking=> booking.id === item.id && booking.dayOfWeek === item.dayOfWeek)
    console.log("isAlreadyBooked",isAlreadyBooked)
    if(!isAlreadyBooked){
      dispatch(setBooking({...item, booked:true}));
      setShow(true)
    }
    else {
      dispatch(setBooking({"AlreadyBooked": "You Are Already Booked","count":item.count}));
      setShow(true)
    }

    // if(!isAlreadyBooked)
    // {
    //   const updatedData = list.map((dataItem) => {
    //     if (dataItem.id === item.id) {
    //       return {
    //         ...dataItem,
    //         count: dataItem.count - 1,
    //       };
    //     }
    //     return dataItem;
    //   });
    //   const updatedItem = updatedData.find((arr)=>{
    //     return arr.id === item.id
    //   })
    //   console.log("updatedData ,item",updatedData)
    //   dispatch(setSlot(updatedData))
    //   dispatch(setBooking(updatedItem));
    //   setShow(true)
    // }
    // else {
    //   dispatch(setBooking({"AlreadyBooked": "You Are Already Booked","count":item.count}));
    //   setShow(true)
    // }
    

     
  }
       return (
     <div className="listingMainClass">
       <div className="myListingcontainer">      
        {
          
          list.map((item,index)=>{
          if(item.id){
            return(
              

              <div onClick={handleSlotClick.bind(this,item)}  className="myCardContainer" >
                <div className="cardWrapper">

               <div className="cardLeft">

                  <div className="cardLeftText">

                    <div className="session">
                    {item.session}
                    </div>

                    <div className="timings">
                    {item.timings}
                    </div>

                  </div>

               </div>

               <div className="cardRight">

                <div className="cardRightText">
                <Button className="monthButton"  variant="outline-warning" onClick={handleSlotClick.bind(this,item)}>Book</Button>
                </div>

               </div>





                </div>
 
               </div> 
              
              
              
              )
          }
          else {
            return null
          }
              
           
          })
        }

          <div>
            
           </div>
        </div> 
       
          {
            show && <Modal show={show} list={list} setShow={setShow}/>

          } 
          
            <SlotCalendar className="calendar" />
        </div> 
      
    
       )
     }

export default Listing
