import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'



const Home = () => {
  return (
    <>
    <div className='mycontainer'>
      <div className="homecontainer">

      <Link to='/'  className="myLink">
        <span className="myh">
        <i class="bi bi-emoji-smile myColor"></i></span>
        <span  className="myh title">Sessions</span>
        </Link>
       
     
      <Link to='/projects'  className="myLink">

        <div> <span className="myh">
        <i class="bi bi-hand-thumbs-up myColor"></i>
        </span>
         <span  className="myh title">Projects</span>
         </div>
        </Link>

      <Link to='/savedProjects'  className="myLink">
          <div> <span className="myh">
          <i class="bi bi-lightbulb myColor"></i></span>
         <span  className="myh title">Saved Projects</span>
         </div>
        </Link>


         </div>
    </div>

    
    </>
  )
}

export default Home