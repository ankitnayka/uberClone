import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

  // const onchangeHandler = (e) => {
  //   const { name, value } = e.target;
  //   setInputData({ ...inputData, [name]: value })

  // }

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
    <div className="px-5 py-5 flex flex-col justify-between " >
      <div>


        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="uber" srcset=""
          className="w-20  py-5 border underline  "
        />


        <div>

          <h3 className='text-lg font-medium mb-2'>What's your an  Name</h3>
          <div className="flex gap-5">
            <Input
              required

              value={inputData.firstName}
              name="firstName"
              onChange={onchangeHandler}
              type="text"
              placeholder="FirstName"
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border  text-lg placeholder:text-base'
            />
            <Input
              required
              value={inputData.lastName}
              name="lastName"
              onChange={onchangeHandler}
              type="text"
              placeholder="LastName"
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border  text-lg placeholder:text-base'
            />
          </div>
        </div> </div>
      <div>

        <h3 className='text-lg font-medium mb-2'>What's your  email</h3>
        <input
          required

          value={inputData.email}
          name="email"
          onChange={onchangeHandler}

          className='bg-[#eeeeee]  rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
          type="email"
          placeholder='email@example.com'
        />
      </div>
      <div>

        <h3 className='text-lg font-medium mb-2'>Password</h3>
        <input
          required

          value={inputData.password}
          name="password"
          onChange={onchangeHandler}
          className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
          type="password"
          placeholder='*******'
        />
      </div>
      <Button disabled={isLoading}
      onClick={userSignupHandler}
        className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-6 w-full text-lg placeholder:text-base'
      >
        {
          isLoading ? (
        <div className="flex justify-center items-center">
        <p className="text-2xl">plaease wait</p>  <Loader2 className="w-4  h-4 text-3xl animate-spin"/> 
        </div>
         
        ) : 'Create Account'
        }

      </Button>
        <p className='text-center'>Already have a account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
      <p className='text-[10px] mt-6 leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
      Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
    </div>
  )
}

export default UserSignup