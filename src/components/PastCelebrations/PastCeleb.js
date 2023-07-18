import React,{useContext} from 'react'
import {ListingContext} from '../Listing/Listing'
import './pastCelebration.css'
import { Link } from 'react-router-dom'


const PastCeleb = ({myPast}) => {
const {prevData} = useContext(ListingContext)
const dataToMap = myPast ? myPast : prevData;
  return (
    <>

      <h2 className="pheading">See Past celebrations</h2>
      {
       dataToMap.map(item=>{

        if(item.title){
          return(
            <Link to ={`/${item.id}`} className="pastLink">
            <div className="pastCel">
  
              <div className="imgDiv ForAlign">
              <img className="pastCelImage" src={item.img} alt="" />
              </div>
  
              <div className='ForAlign celebTitle'>
              <h6>{item.title}</h6>
              </div>
  
              <div className='ForAlign celebLink'>
              <i class="bi bi-chevron-right alignCelebLink"></i>
              </div>
  
            </div>
            </Link>
          )
        }
        else{
          return null;
        }
       
       })
      }
      
      
      
      
    </>
   
  )
}

export default PastCeleb