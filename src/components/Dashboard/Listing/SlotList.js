import axios from 'axios'
import React, {  useEffect, useState,createContext } from 'react'
import Card from 'react-bootstrap/Card';
import './Listing.css'
// import SlotCalendar from '../Calendar/SlotCalendar'
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from '../../Listing/Modal'
import {useSelector} from 'react-redux'
import { setBooking } from '../../../Features/slotBooking';
import { setSlot } from '../../../Features/PerDaySlot';

import {useDispatch} from 'react-redux'
import { Col, Row } from 'react-bootstrap';

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

    if(!isAlreadyBooked)
    {
      const updatedData = list.map((dataItem) => {
        if (dataItem.id === item.id) {
          return {
            ...dataItem,
            count: dataItem.count - 1,
          };
        }
        return dataItem;
      });
      console.log("updatedData ,item",item)
      dispatch(setSlot(updatedData))
      dispatch(setBooking(item));
      setShow(true)
    }
    else {
      dispatch(setBooking({"AlreadyBooked": "You Are Already Booked","count":item.count}));
      setShow(true)
    }
    

     
  }
  
       return (
      
     <div className="llistingMainClass">
        
       <div className="lmyListingcontainer">   
       <Row>
        {
          
          list.map((item,index)=>{
          if(item.id){
            return(
              <Col>
              <div className='sCardWrapper'>
               
              <Card onClick={handleSlotClick.bind(this,item)} className="lmyCard">
              <div className="lmainCardImage">
              <Card.Text className="lcardimg">
                {item.date}
              </Card.Text>
              </div>
                {/* <Card.Img  variant="left" className="cardimg" src="" />     */}
                  <Card.Body className="lcardBody">
                   <Card.Title>{item.dayOfWeek}</Card.Title>
                  <Card.Text className="lcardText ">
                   </Card.Text>
                   <Card.Text className="ltext">
                   <Button className="lmonthBtn"  variant="outline-warning" onClick={handleSlotClick.bind(this,item)}>{item.timings}</Button>
                   </Card.Text>  
                   <Card.Text className="ltext">
                 
                    <span className="licon">
                    <Button className="lmonthBtn"  variant="outline-warning" onClick={handleSlotClick.bind(this,item)}>Book Now</Button>             
                     <Button className="lmonthBtn"  variant="outline-warning" onClick={handleSlotClick.bind(this,item)}>{item.count}</Button>             
                    </span>
                   </Card.Text>   
                 </Card.Body>
               </Card> 
               
              </div>
              </Col>
              )
          }
          else {
            return null
          }
              
           
          })
        }

          <div>
            
           </div>
           </Row>
        </div> 
       
          {
            show && <Modal show={show} list={list} setShow={setShow}/>

          } 
          
        {/* <SlotCalendar /> */}
        
        </div> 
    
       )
     }

export default Listing
