import { createSlice } from "@reduxjs/toolkit";

export const PerDaySlot = createSlice({
    name:"perDaySlot",
    initialState:{
        value:[
        //     {
            // id:'',
            // timings:'',
            // dayOfWeek:'',
            // date:'',
            // count:15
        // }
    ]
    },
    reducers:{
        setSlot:(state,action)=>{
            state.value= action.payload
        }
    }

})

export const {setSlot} = PerDaySlot.actions
export default PerDaySlot.reducer