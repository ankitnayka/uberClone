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
        logoutCaptainUi:(state)=>{
            state.captain=null
        }
    }
});

export const {setCaptain,logoutCaptainUi}=captainSlice.actions;
export default captainSlice.reducer