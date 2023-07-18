import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Listing from './components/Listing/Listing'
import Calendar from './components/Calendar/Calendar'
import PastCeleb from './components/PastCelebrations/PastCeleb'
import App from './App'
import Popup from './components/Details/Popup'


const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<App/>} />
       <Route path='/' element={<Listing/>} />
       <Route path='/' element={<Calendar/>} />
       <Route path='/' element={<PastCeleb/>}/>
       <Route path='/:id' element={<Popup/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default Router