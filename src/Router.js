import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Project from './components/Projects/project'
import Home from './components/Home/Home'

import App from './App'



const Router = () => {
  return (
    <BrowserRouter>
    <Home />
    <Routes>
       <Route path='/' element={<App/>} />
       <Route path='/projects' element={<Project/>} />

       

    </Routes>
    </BrowserRouter>
  )
}

export default Router