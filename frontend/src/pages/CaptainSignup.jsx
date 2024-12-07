import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { Link } from "react-router-dom";



const CaptainSignup = () => {
  const [inputData, setInputData] = useState({
    firstname:"",
    lastname:"",
    email: "",
    password: "",
    plate:"",
    color:"",
    capacity:1,
    vehicleType:""

})

const onchangeHandler = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value })

}
const captainSignupHandler=()=>{
  console.log(inputData);
  
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

                        value={inputData.firstname}
                        name="firstname"
                        onChange={onchangeHandler}
                        type="text"
                        placeholder="FirstName"
                       className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border  text-lg placeholder:text-base'
                    />
                    <Input
                        required
                        value={inputData.lastname}
                        name="lastname"
                        onChange={onchangeHandler}
                        type="text"
                        placeholder="LastName"
                        className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border  text-lg placeholder:text-base'
                    />
                </div>
            </div> </div>
            <div>

                <h3 className='text-lg font-medium mb-2'>What's our Captain's email</h3>
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
            <div>
            <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
             value={inputData.color}
             name="color"
             onChange={onchangeHandler}
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
            />
            <input
            value={inputData.plate}
            name="plate"
            onChange={onchangeHandler}
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
            />
          </div>
          <div>
          <div className='flex gap-4 mb-7'>
            <input
            value={inputData.capacity}
            name="capacity"
            onChange={onchangeHandler}
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={inputData.vehicleType}
              onChange={onchangeHandler}
              name="vehicleType"
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motorcycle">Motorcycle</option>
            </select>
          </div>
          <button
            onClick={captainSignupHandler}
            className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
          >Create Captain Account</button>
          </div>
          <p className='text-center'>Already have a account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
          <div>
        <p className='text-[10px] mt-6 leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
          Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
            </div>
           
        </div>

  );
};

export default CaptainSignup;
