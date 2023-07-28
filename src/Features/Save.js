import {createSlice} from '@reduxjs/toolkit'

export const saveSlice= createSlice({
    name:"save",
    initialState:{
        projects:[],
    },
    reducers:{

      saveProject:(state,action)=>{

        const existingIndex= state.projects.findIndex(item=>item.id === action.payload.id)

        if(existingIndex === -1){
            state.projects.push(action.payload)     
        }
        else {
            state.projects[existingIndex] = action.payload;
          }
       
        },
       
        removeProject:(state,action)=>{
            const projectId = action.payload;
            state.projects = state.projects.filter((project)=> project.id !== projectId )
        }
    }
})

export const {saveProject,removeProject} = saveSlice.actions
export default saveSlice.reducer