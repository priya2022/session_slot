import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const ContainerWrapperHome = styled.div`

@media only screen and (max-width: 480px) {
  /* Apply styles for screen width <= 300px */
  background-color: lightblue; /* Change background color for smaller screens */
  .mycontainer {
    display: none; /* Hide the container for smaller screens */
  }
}
`;


const Home = () => {
  return (
    <>
   <ContainerWrapperHome>
    <div className='mycontainer'>

    {/* <div className="hamburgerIcon">
         <i class="bi bi-list"></i>
    </div> */}

      <div className="homecontainer">

      <Link to='/'  className="myLink">
        <span className="myh">
        <i class="bi bi-emoji-smile myColor"></i></span>
        <span  className="myh title">Sessions</span>
        </Link>

        

          <Link to='/dashBoard'  className="myLink">

          <div> <span className="myh">
          <i class="bi bi-hand-thumbs-up myColor"></i>
          </span>
          <span  className="myh title">Dashboard</span>
          </div>
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
         <span  className="myh title">My Projects</span>
         </div>
        </Link>


         </div>

    </div>
    </ContainerWrapperHome>

    
    </>
  )
}

export default Home