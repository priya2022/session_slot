import axios from 'axios'
import React, {  useEffect, useState,createContext } from 'react'
import Card from 'react-bootstrap/Card';
import './Listing.css'
import Calendar from '../Calendar/Calendar';
import { Link } from 'react-router-dom';
export const ListingContext = createContext();

const slots=[
  {
   "id":"1",
   "slot":"1",
    "students":[
      {isBooked:false}
    ],
    "timings":"10am-11am"
  },
  {
   "id":"2",
   "slot":"2",
    "students":[
      {isBooked:false}

    ],
    "timings":"10am-11am"
  },
  {
   "id":"3",
   "slot":"3",
    "students":[
      {isBooked:false}
    ],
    "timings":"10am-11am"
  },
  {
   "id":"4",
   "slot":"4",
    "students":[
      {isBooked:false}
    ],
    "timings":"10am-11am"
  },
  {
   "id":"5",
   "slot":"5",
    "students":[
      {isBooked:false}
    ],
    "timings":"10am-11am"
  }


]


const Listing = ({month,mynewMonth,monthDataReceiver}) => {
  
  var filteredData;
    const [mydata, setData] = useState([])
    const [calData,setCalData]=useState([])
    const [prevData,setPrev] = useState([])

    

    const callgetApi=async()=>{
      const response = await axios.get("https://646352d67a9eead6fae32f76.mockapi.io/months")
      setData(response.data)
    }

     useEffect(()=>{
       callgetApi()
     },[])

     const myCurrentMonth= Object.values({mynewMonth})[0]
     const myMonth= Object.values({month})[0]
     const selectedMonth = myMonth||myCurrentMonth
    

     useEffect(()=>{
      //CallData
      const initialData = mydata.filter((item)=> item.month === selectedMonth)
      setCalData(initialData)  
      
      //Previous Month
      for(let i=0;i<mydata.length;i++)
      {
        if(mydata[i].month === selectedMonth)
        {
          var firstOne= mydata.findIndex((item)=>item.month === selectedMonth)
          console.log("firstOne",firstOne)
          var previousIndex=firstOne-1   

          var value = mydata[previousIndex].month.toString()
          console.log("myMonth",value)
          var previous = mydata.filter(item => item.month === value)
          console.log("letMyPrevious",previous)
          setPrev(previous)
        }
      }
       
     },[selectedMonth, mydata])
     
     const dataReceiver = (data)=>{      
        filteredData= mydata.filter((item)=>item.month === data)      
        const calendarMonth = calData.map(item=> item.month )
        console.log("calData",calData);
        const calendarValue = Object.values(calendarMonth)[0] 
        console.log("valje",calendarValue);
        monthDataReceiver(calendarValue)
        setCalData(filteredData)
     }
 
      filteredData= mydata.filter((item)=> item.month === selectedMonth )

      var previousAndListData = {
        prevData,myData:mydata 
      }

       return (
        <>
         
      <ListingContext.Provider value={previousAndListData}>
     
       <div className="myListingcontainer">      
        {
        
          calData.map((item)=>{

            if(item.title){
              return(
              <Link to ={`/${item.id}`} >
                {console.log("previousINLisnting",prevData)}
                <Card key ={item.id} className="myCard">
                <Card.Img  variant="left" className="cardimg" src={item.img} />    
                 <Card.Body className="cardBody">
                   <Card.Title>{item.title}</Card.Title>
                  <Card.Text className="cardText ">
                    {item.description}
                   </Card.Text>
                   <Card.Text className="text">
                     <span>{item.month} {item.day}</span>
                    <span className="icon"><i class="bi bi-arrow-right-short"></i></span>
                   </Card.Text>                 
                 </Card.Body>
               </Card> 
               </Link>
              )
            }
            else{
              return null;
            }
            
          })
        }
        </div>       
        <Calendar items={calData} dataReceiver = {dataReceiver}/>
        </ListingContext.Provider>
        </>
      
    
       )
     }

export default Listing

