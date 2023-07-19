
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useSelector,useDispatch} from 'react-redux'
import { setBooked } from '../../Features/Booked';


function Example({show,setShow}) {

  const dispatch = useDispatch()
  const handleClose = ()=> setShow(false)

  
  const booking = useSelector(state=> state.booking.value)
  const {id,timings,dayOfWeek,date,count}= booking

  const handleSubmit =(booked)=>{

    dispatch(setBooked(booked))
    setShow(false);

  }
  

  return (
    <>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Session Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Do you Confirm about to book a sessions at {timings}.</p>
          <p>Available Seats {count}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit.bind(this,booking)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;