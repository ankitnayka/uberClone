import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "@/utils/api/userApi";


const rootReducer=combineReducers({
    [authApi.reducerPath]:authApi.reducer,
})

export default rootReducer;