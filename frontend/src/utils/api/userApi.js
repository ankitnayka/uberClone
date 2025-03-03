import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = "http://localhost:4000/users/"

export const authApi = createApi({
    reducerPath: 'userAuth',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        credentials: 'include'
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (inputData) => ({
                url: "register",
                method: "POST",
                body: inputData,
            })
        }),
        loginUser:builder.mutation({
            query:(inputData)=>({
                url:"login",
                method:"POST",
                body:inputData
            })
        })
    })
})


export const { useRegisterUserMutation ,useLoginUserMutation} = authApi;