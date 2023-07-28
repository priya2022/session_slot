import { createSlice } from "@reduxjs/toolkit";

export const CreateUserSlice = createSlice({
    name:'newUser',
    initialState:{
        value:[

        ]
    },
    reducers:{
        addNewUsers:(state,action)=>{
            state.value.push(action.payload)
        }
    }
})


export const {addNewUsers} = CreateUserSlice.actions
export default CreateUserSlice.reducer