import { createSlice } from "@reduxjs/toolkit";

export const BookedSlice = createSlice({
    name:"booked",
    initialState: {
        value:[]
            
    }, 
    reducers: {
        setBooked: (state, action) => {
            state.value.push(action.payload)
        }
    }
    
})
export const { setBooked }  = BookedSlice.actions
export default BookedSlice.reducer

