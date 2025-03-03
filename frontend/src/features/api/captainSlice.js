import { createSlice } from "@reduxjs/toolkit";

const initialState={
    captain:null
}


const captainSlice=createSlice({
    name:'captain',
    initialState,
    reducers:{
        setCaptain:(state,action)=>{
            state.captain=action.payload
        },
        logoutCaptain:(state)=>{
            state.captain=null
        }
    }
});

export const {setCaptain,logoutCaptain}=captainSlice.actions;
export default captainSlice.reducer