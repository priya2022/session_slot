import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:"user",
    initialState:{

        value:{
            id:'',
            firstName:'',
            lastName:'',
            // confirmPassword:'',
            email:'',
            password:'',
            isBooked: [] // Change this to an array
            
        }
       
    },
    reducers:{
        signUp:(state,action)=>{
            state.value= action.payload
        },
        login:(state,action)=>{
            state.value= action.payload
            if (!state.value.hasOwnProperty('isBooked')) {
                state.value.isBooked = [];
              }
        },
        // logout:(state,action)=>{
        //     state.value ={name:'',age:0,email:'',password:'',confirmPassword:''}
        // },
        addBooking: (state, action) => {
            state.value.isBooked.push(action.payload)
            // state.value.isBooked = action.payload
        }
    }
})

export const {signUp,login,logout,addBooking}= userSlice.actions
export default userSlice.reducer