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
  
  const user = useSelector(state=> state.user.value)
  const navigate= useNavigate()
  // const [clickedSlot,setClickedSlot]= useState([])

  const dispatch = useDispatch()
  const data = useSelector(state=> state.perDaySlot.value)
  const [show, setShow] = useState(false);
  const [list,setList] = useState([])



  useEffect(()=>{


    let currentData =data||currentDay
    // console.log("currentDatainListing",currentData)
    // console.log("currentDatainListing",currentDay)

    setList(currentData)
  },[data,currentDay])

  
  const handleSlotClick=(item)=>{

    const isAlreadyBooked= user.isBooked.some(booking=> booking.id === item.id && booking.dayOfWeek === item.dayOfWeek)
    console.log("isAlreadyBooked",isAlreadyBooked)
    // if (!user.id) {
    //   // User is not logged in, redirect to the login page
    //   navigate('/login');
    //   return;
    // }
    // console.log("itemin slotList",item)

    // if(!clickedSlot.includes(item.id) && item.count>0)

    if (!isAlreadyBooked && item.count > 0) {
      const updatedData = list.map((dataItem) => {
        if (dataItem.id === item.id) {
          return {
            ...dataItem,
            count: dataItem.count - 1,
          };
        }
        return dataItem;
      });
      // console.log("updatedData",updatedData)
      dispatch(setSlot(updatedData))
      dispatch(setBooking(item));
      console.log("updatedData",updatedData)
      // setClickedSlot([...clickedSlot,item.id])
      setShow(true)
      
    }
    else if(isAlreadyBooked){
      dispatch(setBooking({"AlreadyBooked": "You Are Already Booked"}));
      setShow(true)
    }
    
  }
  
       return (
        <>
        {console.log("user details",user)}
     {/* {console.log("data in listing",list)} */}
       <div className="myListingcontainer">      
        {
          
          list.map((item,index)=>{
          if(item.id){
            return(
              <div>

              <Card onClick={handleSlotClick.bind(this,item)} className="myCard">
              <Card.Text className="cardimg">
                {item.date}
              </Card.Text>
                {/* <Card.Img  variant="left" className="cardimg" src="" />     */}
                  <Card.Body className="cardBody">
                   <Card.Title>{item.dayOfWeek}</Card.Title>
                  <Card.Text className="cardText ">
                   </Card.Text>
                   <Card.Text className="text">
                   <Button className="monthBtn"  variant="outline-warning" onClick={handleSlotClick.bind(this,item)}>{item.timings}</Button>
                   </Card.Text>  
                   <Card.Text className="text">
                 
                    <span className="icon">
                    <Button className="monthBtn"  variant="outline-warning" onClick={handleSlotClick.bind(this,item)}>Book Now</Button>             
                     <Button className="monthBtn"  variant="outline-warning" onClick={handleSlotClick.bind(this,item)}>{item.count}</Button>             
                    </span>
                   </Card.Text>   
                 </Card.Body>
               </Card> 
              
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
            show && <Modal show={show} setShow={setShow}/>

          } 
        <SlotCalendar />
        </>
      
    
       )
     }

export default Listing
