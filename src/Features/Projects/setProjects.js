import { createSlice } from "@reduxjs/toolkit";
import Challengelevels from "../../components/Projects/ChallengeLevel";


export const setProject = createSlice({
    name:'project',
    initialState:{
        value:Challengelevels
    },
    reducers:{
        toSetProject:(state,action)=>{
            state.value =action.payload
        }
    }

})

export const {toSetProject} = setProject.actions
export default setProject.reducer