import { createSlice } from "@reduxjs/toolkit";

export const slotSlice = createSlice({
    name:"booking",
    initialState:{
        value:{
            // id:'',
            // timings:'',
            // dayOfWeek:'',
            // date:'',
            // count:15
        }
    },
    reducers: {
                setBooking: (state, action) => {
                    state.value = {...action.payload}
                }
            }
})
export const { setBooking }  = slotSlice.actions
export default slotSlice.reducer


