
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useSelector,useDispatch} from 'react-redux'
import { setBooked } from '../../Features/Booked';
import { addBooking } from '../../Features/User';
import { setSlot } from '../../Features/PerDaySlot';
import { setBooking } from '../../Features/slotBooking';
import { setDashBoardValues } from '../../Features/DashBoard';





function Example({show,setShow,list}) {

  const dispatch = useDispatch()
  const handleClose = ()=> setShow(false)
  const user = useSelector(state=> state.user.value)
  const data = useSelector(state=> state.perDaySlot.value)


  
  const booking = useSelector(state=> state.booking.value)
  const {id,timings,dayOfWeek,date,count}= booking




  const handleSubmit =(item)=>{
   
    
    const isAlreadyBooked= user.isBooked.some(booking=> booking.id === item.id && booking.dayOfWeek === item.dayOfWeek)
    console.log("isAlreadyBooked",isAlreadyBooked)
    if(!isAlreadyBooked)
    {
      const updatedData = data.map((dataItem) => {
        if (dataItem.id === item.id) {
          return {
            ...dataItem,
            count: dataItem.count - 1,
          };
        }
        return dataItem;
      });
      const updatedItem = updatedData.find((arr)=>{
        return arr.id === item.id
      })

      dispatch(setSlot(updatedData))
      dispatch(setBooking(updatedItem));
    dispatch(setBooked(updatedItem))
      dispatch(addBooking(updatedItem))
      dispatch(setDashBoardValues(updatedItem))
      setShow(false)
    }
    // else {
    //   dispatch(setBooking({"AlreadyBooked": "You Are Already Booked","count":item.count}));
    //   setShow(true)
    // }

  }

  const handleCancel= (item)=>{
    const isAlreadyBooked = user.isBooked.some(booking=> booking.id === item.id && booking.dayOfWeek === item.dayOfWeek)
    console.log("isAlreadyBooked",isAlreadyBooked)

    if(isAlreadyBooked && item.count < 15)
    {
      const updatedData = data.map((dataItem)=>{
        if(dataItem.id === item.id && dataItem.dayOfWeek === item.dayOfWeek)
        {
          return{
            ...dataItem,
            count: dataItem.count + 1,
          }
        }
        return dataItem;
      })
      const updatedItem = updatedData.find((arr)=>{
        return arr.id === item.id
      })
      console.log("updatedData in modal",updatedData)
      dispatch(setSlot(updatedData));
      dispatch(setBooking(updatedItem));
      dispatch(addBooking())
      
    }
    handleClose()
  }
  

  return (
    <>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Session Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            booking.hasOwnProperty('AlreadyBooked')? (
              <>
              <p>{booking.AlreadyBooked}</p>
              <p>Do you want to cancel that booking ,{booking.count}</p>
              </>
              ) :
              (
                <>
                 <p>Do you Confirm about to book a sessions at {timings}.</p>
                 <p>Available Seats {count}</p>
                </>
              )
          }
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {
            !booking.hasOwnProperty('AlreadyBooked') ? 
            (
              <Button variant="primary" onClick={handleSubmit.bind(this,booking)}>
              Confirm Changes
            </Button>
            ) :
            (
              <Button variant="primary" onClick={handleCancel.bind(this,booking)}>
              Confirm cancel
              </Button>
            )
          }
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;