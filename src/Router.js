import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Project from './components/Projects/project'
import Home from './components/Home/Home'
import Login from './components/Authentication/Login/Login'
import Signup from './components/Authentication/Login/Signup'
import App from './App'
import Dashboard from './components/Dashboard/Dashboard'
import Save from './components/SaveProject/Save'
import Attendance from './components/Admin/StudentForm/Attendance/Attendance'
import CreateStudent from './components/Admin/StudentForm/CreateStudent/StudentForm'
import ScheduleStudent from './components/Admin/StudentForm/ScheduleStudent/Form'
import ListStudent from './components/Admin/StudentForm/ListStudent/AllStu'


import ListSession from './components/Admin/StudentForm/ListSession/AllStu'
import ListSchedule from './components/Admin/StudentForm/ListScheduled/AllStu'

import AdminMain from './components/Admin/AdminMain'


const Router = () => {
  return (
    <BrowserRouter>
    
    <Routes>
    <Route exact path='/login' element={<Login/>}  />
        <Route path='/SignUp' element={<Signup/>}/>
       <Route path='/' element={<App/>} />
       <Route path='/dashBoard' element={<Dashboard/>} />
       <Route path='/projects' element={<Project/>} />
       <Route path='/savedProjects' element={<Save/>} />

       <Route path='/home' element={<AdminMain/>} />

       <Route path='/session' element={<ListSession/>} />
       <Route path='/adschedule' element={<ListSchedule/>} />
       <Route path='/students' element={<ListStudent/>} />
       <Route path='/adattandance' element={<Attendance/>} />

       <Route path='/admin' element={<AdminMain/>} />

       <Route path='/create' element={<CreateStudent/>} />
       <Route path='/schedule' element={<ScheduleStudent/>} />
       <Route path='/attendance' element={<Attendance/>} />
       <Route path='/list' element={<ListStudent/>} />


       
       

    </Routes>
    </BrowserRouter>
  )
}

export default Router