import {configureStore} from '@reduxjs/toolkit';
import { authApi } from '@/utils/api/userApi';
import { authCaptainApi } from '@/utils/api/captainApi';
import userReducer from '../features/api/userSlice'
import captainReducer from '../features/api/captainSlice'
import { mapsApi } from '@/utils/api/mapsApi';

export const  store =configureStore({
    reducer:{
        [authApi.reducerPath]:authApi.reducer,
        [authCaptainApi.reducerPath]:authCaptainApi.reducer,
        user:userReducer,
        captain:captainReducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(authApi.middleware,authCaptainApi.middleware,mapsApi.middleware)
})