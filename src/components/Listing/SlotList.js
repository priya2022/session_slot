import axios from 'axios'
import React, {  useEffect, useState,createContext } from 'react'
import Card from 'react-bootstrap/Card';
import './Listing.css'
import Calendar from '../Calendar/Calendar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export const ListingContext = createContext();


const Listing = ({slots}) => {
  
  
       return (
        <>
         
      <ListingContext.Provider >
     
       <div className="myListingcontainer">      
        {
        
        slots.map((item)=>{

              return(
              <Link >
              <Button className="monthBtn"  variant="outline-warning" >{item.timings}</Button>
               </Link>
              )
           
          })
        }
        </div>       
        
        </ListingContext.Provider>
        </>
      
    
       )
     }

export default Listing

