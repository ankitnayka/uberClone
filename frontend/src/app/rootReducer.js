import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "@/utils/api/userApi";
import { authCaptainApi } from "@/utils/api/captainApi";
import { mapsApi } from "@/utils/api/mapsApi";

const rootReducer=combineReducers({
    [authApi.reducerPath]:authApi.reducer,
    [authCaptainApi.reducerPath]:authCaptainApi.reducer,
    [mapsApi.reducerPath]:mapsApi.reducer
})

export default rootReducer;