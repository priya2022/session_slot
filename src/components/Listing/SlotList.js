import axios from 'axios'
import React, {  useEffect, useState,createContext } from 'react'
import Card from 'react-bootstrap/Card';
import './Listing.css'
import SlotCalendar from '../Calendar/SlotCalendar'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from './Modal'
import {useSelector} from 'react-redux'
import { setBooking } from '../../Features/slotBooking';
import {useDispatch} from 'react-redux'

const Listing = ({currentDay}) => {
  

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
    console.log("items in slotList",item)
    const updateCount = item.count - 1
    console.log("updateCount",updateCount)
    dispatch(setBooking({...item,count:updateCount}))   

    setShow(true)

  }
       return (
        <>
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
