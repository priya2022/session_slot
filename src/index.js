import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';

import Router from './Router';
import DaySlotReducer from './Features/PerDaySlot'
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from 'react-redux'
import BookingReducer from './Features/slotBooking'
import BookedReducer from './Features/Booked'
import UserReducer from './Features/User'
import DashBoardReducer from './Features/DashBoard';
import ProjectReducer from './Features/Projects/setProjects'
import saveReducer from './Features/Save'
import AssigningReducer from './Features/Admin/AssigningSession'
import newUserReducer from './Features/Admin/CreateUser'
import App from './App'
const store = configureStore({
    reducer:{
        perDaySlot:DaySlotReducer,
        booking:BookingReducer,
        booked:BookedReducer,
        user:UserReducer,
        dashBoard:DashBoardReducer,
        project:ProjectReducer,
        save:saveReducer,
        sessionAssign:AssigningReducer,
        newUser: newUserReducer

    }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
    <Router />
    {/* <App /> */}
    </Provider>

);

