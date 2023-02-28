import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState={ 
    loading:true,
    users:[],
    error:'',
}

//Generated panding, fulfilled, rejected action types
export const fetchUsers = createAsyncThunk('users/fetchUsers',()=>{  // two parameters first is actins type second is callback
    return axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>
      response.data
    )
})

const usersSlice=createSlice({
    name:'users',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.loading=true
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading=false,
            state.users=action.payload,
            state.error= ''
        })
        .addCase(fetchUsers.rejected,(state,action)=>{
            state.loading=false,
            state.users=[],
            state.error=action.error.message
        })
    }
})

export default usersSlice.reducer