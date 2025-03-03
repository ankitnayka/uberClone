import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const BASE_URL="http://localhost:4000/captain/"

export const authCaptainApi=createApi({
    reducerPath:'captainAuth',
    baseQuery:fetchBaseQuery({
        baseUrl:BASE_URL,
        credentials:'include'
    }),
    endpoints:(builder)=>({
        registerCaptain:builder.mutation({
            query:(inputData)=>({
                url:"register",
                method:"POST",
                body:inputData
            })
        }),
        loginCaptain:builder.mutation({
            query:(inputData)=>({
                url:"login",
                method:"POST",
                body:inputData
            })
        })
    })
})

export const {useRegisterCaptainMutation,useLoginCaptainMutation}=authCaptainApi