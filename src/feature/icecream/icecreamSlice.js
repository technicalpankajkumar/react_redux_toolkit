import { createSlice } from "@reduxjs/toolkit"

const initialState={
    numOfIceCream : 10
}

const iceCreamSlice=createSlice({
    name:'iceCream',
    initialState,
    reducers:{
        ordered:(state,action)=>{
            state.numOfIceCream -= action.payload 
        },
        restocked:(state,action)=>{
            state.numOfIceCream += action.payload
        }
    }
})

export default iceCreamSlice.reducer
export const {ordered,restocked} = iceCreamSlice.actions