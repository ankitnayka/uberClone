import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Footer from "@/uber/Footer";
import Header from "@/uber/Header";
import { useLoginUserMutation } from "@/utils/api/userApi";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { setUser } from "@/features/api/userSlice";
const UserLogin = () => {
    const [inputData, setInputData] = useState({
        email: "",
        password: ""
    })

    const onchangeHandler = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value })
        
    }

    const [loginUser,{data,isLoading,isSuccess,isError,error}]=useLoginUserMutation()

    const dispatch=useDispatch()

      useEffect(()=>{
        if(isSuccess){
          toast.success(data?.message || "Logging Successfully")
          console.log(data)
          dispatch(setUser(data?.user))
        }
        if(error){
          toast.error(error?.message || "Something wrong !!!")
        }
      },[data,isSuccess,error,isError])
    const loginHandler=()=>{
        console.log(inputData)
          loginUser(inputData)      
    }
    return (
        <>
        <Header/>
        <div className="min-h-screen w-full bg-[#FFB121] flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 lg:px-20">
            <div className="flex flex-col items-center justify-center w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                <h1 className="font-bold text-3xl sm:text-4xl border-b-2 border-[#FFB121] pb-2 mb-6">user-Log in</h1>
                
                <div className="w-full mb-4">
                    <Label className="block mb-2">What's your email</Label>
                    <Input
                        required
                        value={inputData.email}
                        name="email"
                        onChange={onchangeHandler}
                        type="email"
                        placeholder="ankitnayka.dev"
                        className="w-full border rounded-lg border-black placeholder:text-black placeholder:opacity-50 p-2"
                    />
                </div>
                
                <div className="w-full mb-4">
                    <Label className="block mb-2">Password</Label>
                    <Input
                        required
                        type="password"
                        value={inputData.password}
                        name="password"
                        onChange={onchangeHandler}
                        placeholder="**********"
                        className="w-full border rounded-lg border-black placeholder:text-black placeholder:opacity-50 p-2"
                    />
                </div>
                
                <Button className="my-3 w-full bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600" onClick={loginHandler}>{isLoading ? 'please wait' : 'Log in'}</Button>
                
                <p className="text-center text-sm mt-3">
                    Click here to
                    <Link to='/signup' className="text-black font-bold ml-1">Create New Account</Link>
                </p>
                
                <Link to='/captain-login' className="w-full">
                    <Button className="my-3 w-full bg-[#333333] text-white py-2 rounded-lg shadow-md hover:bg-gray-800">Sign in as Captain</Button>
                </Link>
            </div>
        </div>
        <Footer/>
                        </>
    )
}

export default UserLogin