

import { createSlice } from "@reduxjs/toolkit";

export const DashboardSlice = createSlice({
    name:"dashBoard",
    initialState: {
        value:[]
            
    }, 
    reducers: {
        setDashBoardValues: (state, action) => {
            state.value.push(action.payload)
        }
    }
    
})
export const { setDashBoardValues }  = DashboardSlice.actions
export default DashboardSlice.reducer

