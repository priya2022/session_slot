import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Project from './components/Projects/project'
import Home from './components/Home/Home'
import Login from './components/Authentication/Login/Login'
import Signup from './components/Authentication/Login/Signup'
import App from './App'

const Router = () => {
  return (
    <BrowserRouter>
    
    <Routes>
    <Route exact path='/login' element={<Login/>}  />
        <Route path='/SignUp' element={<Signup/>}/>
       <Route path='/' element={<App/>} />
       <Route path='/projects' element={<Project/>} />

       

    </Routes>
    </BrowserRouter>
  )
}

export default Router