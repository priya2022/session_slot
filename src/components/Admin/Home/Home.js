import React, { useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'



const Home = () => {
  const [activeLink,setActiveLink] = useState('')

  const handleClick=(path)=>{
    setActiveLink(path)
  }


  return (
    <>
    <div className="homWrap">
    
      <div className='mycontainer'>


      <div className="homecontainer">

      {/* <Link to='/home' onClick={handleClick.bind(this,'/home')}  className={activeLink==='/home'? 'myLink active': 'myLink fade'}>
        <span className="myh">
        <i class="bi bi-house-door myColor"></i>
        </span>
        <span  className="myh title">Home</span>
        </Link>

        <Link to='/session' onClick={handleClick.bind(this,'/session')}    className={activeLink==='/session'? 'myLink active': 'myLink fade'}>
        <span className="myh">
        <i class="bi bi-person myColor"></i>
        </span>
        <span  className="myh title">Session</span>
        </Link>

        <Link to='/adschedule'onClick={handleClick.bind(this,'/adschedule')}     className={activeLink==='/adschedule'? 'myLink active': 'myLink fade'}>
        <span className="myh">
        <i class="bi bi-person myColor"></i>
        </span>
        <span  className="myh title">Schedule</span>
        </Link>

        

      <Link to='/students'onClick={handleClick.bind(this,'/students')}     className={activeLink==='/students'? 'myLink active': 'myLink fade'}>
        <span className="myh">
        <i class="bi bi-people myColor"></i>
        </span>
        <span  className="myh title">Students</span>
        </Link>

        <Link to='/adattandance' onClick={handleClick.bind(this,'/adattandance')}    className={activeLink==='/adattandance'? 'myLink active': 'myLink fade'}>
        <span className="myh">
        <i class="bi bi-card-checklist myColor"></i>
        </span>
        <span  className="myh title">Atttendance</span>
        </Link>

         */}


<Link to='/home' onClick={handleClick.bind(this,'/home')}className="myLink" >
        <span className="myh">
        <i class="bi bi-house-door myColor"></i>
        </span>
        <span  className="myh title">Home</span>
        </Link>

        <Link to='/session' onClick={handleClick.bind(this,'/session')}   className="myLink" >
        <span className="myh">
        <i class="bi bi-person myColor"></i>
        </span>
        <span  className="myh title">Session</span>
        </Link>

        <Link to='/adschedule'onClick={handleClick.bind(this,'/adschedule')}   className="myLink" >
        <span className="myh">
        <i class="bi bi-person myColor"></i>
        </span>
        <span  className="myh title">Schedule</span>
        </Link>

        

      <Link to='/students'onClick={handleClick.bind(this,'/students')}    className="myLink" >
        <span className="myh">
        <i class="bi bi-people myColor"></i>
        </span>
        <span  className="myh title">Students</span>
        </Link>

        <Link to='/adattandance' onClick={handleClick.bind(this,'/adattandance')}   className="myLink" >
        <span className="myh">
        <i class="bi bi-card-checklist myColor"></i>
        </span>
        <span  className="myh title">Atttendance</span>
        </Link>


        

          {/* <div   className="myLink">

          <div> 
            <span className="myh">
          <i className="bi bi-people myColor"></i>
          </span>
          <span  className="myh title">Student</span>
          </div>*/}
       
         </div> 

    </div> 
    </div>
    
    </>
  )
}

export default Home