import { createSlice } from "@reduxjs/toolkit";

export const slotSlice = createSlice({
    name:"booking",
    initialState:{
        value:{}
    },
    reducers: {
                setBooking: (state, action) => {
                    state.value=action.payload
                }
            }
})
export const { setBooking }  = slotSlice.actions
export default slotSlice.reducer


