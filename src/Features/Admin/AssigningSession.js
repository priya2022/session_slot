import { createSlice } from "@reduxjs/toolkit";

export const AssigningSession = createSlice({
    name:'sessionAssign',
    initialState:{
        value:[]
    },
    reducers:{
        AddUsers:(state,action)=>{
            state.value.push(action.payload)
        }
    }
})

export const {AddUsers} = AssigningSession.actions
export default AssigningSession.reducer