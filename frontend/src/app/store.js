import {configureStore} from '@reduxjs/toolkit';
import { authApi } from '@/utils/api/userApi';
import { authCaptainApi } from '@/utils/api/captainApi';
import userReducer from '../features/api/userSlice'


export const  store =configureStore({
    reducer:{
        [authApi.reducerPath]:authApi.reducer,
        [authCaptainApi.reducerPath]:authCaptainApi.reducer,
        user:userReducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(authApi.middleware,authCaptainApi.middleware)
})