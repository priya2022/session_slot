import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"; 
import Router from './Router';
import DaySlotReducer from './Features/PerDaySlot'
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from 'react-redux'
import BookingReducer from './Features/slotBooking'
import BookedReducer from './Features/Booked'

const store = configureStore({
    reducer:{
        perDaySlot:DaySlotReducer,
        booking:BookingReducer,
        booked:BookedReducer
    }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
    <Router />
    </Provider>

);

