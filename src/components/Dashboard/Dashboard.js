import React from 'react'
import Home from '../Home/Home'
import './DashBoard.css'
import BookedSession from './Booked/BookedSession'
import SavedProject from './SavedProject'
import SlotList from './Listing/SlotList'
const Dashboard = () => {
  return (
    <>
     <Home />

     <div className="DashBoardMainClass">

     <div className="bookedSessionContainer">
     <BookedSession />
     </div>

     <div className="SlotContainer">
     <SlotList />
     </div>

      <div className="savedProjectContainer">
        <SavedProject />
      </div>

      


     </div>
    



    </>
   
  )
}

export default Dashboard