import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "@/utils/api/userApi";
import { authCaptainApi } from "@/utils/api/captainApi";

const rootReducer=combineReducers({
    [authApi.reducerPath]:authApi.reducer,
    [authCaptainApi.reducerPath]:authCaptainApi.reducer
})

export default rootReducer;