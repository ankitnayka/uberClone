import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Footer from "@/uber/Footer";
import Header from "@/uber/Header";
import { useRegisterUserMutation } from "@/utils/api/userApi";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const UserSignup = () => {
  const [inputData, setInputData] = useState({
    fullName: { firstName: "", lastName: "" },
    
    email: "",
    password: "",
  })


  const [registerUser,{data,isLoading,isSuccess,isError,error}]=useRegisterUserMutation()

  

  useEffect(()=>{
    if(isSuccess){
      toast.success(data?.message)
    }
    if(error){
      toast.error(error?.message || "Something wrong !!!")
    }
  },[data,isSuccess,error,isError])

const onchangeHandler = (e) => {
  const { name, value } = e.target;

  if (name === "firstName" || name === "lastName") {
      setInputData({
          ...inputData,
          fullName: { ...inputData.fullName, [name]: value }
      });
  } else {
      setInputData({ ...inputData, [name]: value });
  }
};
  const userSignupHandler = () => {
    console.log(inputData)
    registerUser(inputData)
    console.log("hello");

  }
  return (
    <>
    <Header/>
    <div className="min-h-screen w-full bg-[#FFB121] flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 lg:px-20">
            <div className="flex flex-col items-center justify-center w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="uber" className="w-20 py-5 border-b-2" />
                
                <h1 className="font-bold text-3xl sm:text-4xl border-b-2 border-[#FFB121] pb-2 mb-6">Create user Account</h1>
                
                <div className="w-full mb-4">
                    <Label className="block mb-2">What's your name?</Label>
                    <div className="flex gap-4">
                        <Input required value={inputData.fullName.firstName} name="firstName" onChange={onchangeHandler} type="text" placeholder="First Name" className="w-1/2 bg-gray-100 border rounded-lg p-2" />
                        <Input required value={inputData.fullName.lastName} name="lastName" onChange={onchangeHandler} type="text" placeholder="Last Name" className="w-1/2 bg-gray-100 border rounded-lg p-2" />
                    </div>
                </div>
                
                <div className="w-full mb-4">
                    <Label className="block mb-2">What's your email?</Label>
                    <Input required value={inputData.email} name="email" onChange={onchangeHandler} type="email" placeholder="email@example.com" className="w-full bg-gray-100 border rounded-lg p-2" />
                </div>
                
                <div className="w-full mb-4">
                    <Label className="block mb-2">Password</Label>
                    <Input required value={inputData.password} name="password" onChange={onchangeHandler} type="password" placeholder="**********" className="w-full bg-gray-100 border rounded-lg p-2" />
                </div>
                
                <Button disabled={isLoading} className="my-3 w-full bg-black text-white py-2 rounded-lg shadow-md hover:bg-blue-600 flex justify-center items-center" onClick={userSignupHandler}>
                    {isLoading ? <span className="flex items-center"><p className="text-lg">Please wait</p><Loader2 className="w-4 h-4 ml-2 animate-spin" /></span> : 'Create Account'}
                </Button>
                
                <p className="text-center text-sm mt-3">Already have an account? <Link to='/login' className="text-blue-600 font-bold">Login here</Link></p>
                
                <p className='text-[10px] mt-6 leading-tight text-center'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
            </div>
        </div>
        <Footer/>
         </>
  )
}

export default UserSignup