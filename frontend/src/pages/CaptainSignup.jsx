import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Footer from "@/uber/Footer";
import Header from "@/uber/Header";
import { useRegisterCaptainMutation } from "@/utils/api/captainApi";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CaptainSignup = () => {
  const [inputData, setInputData] = useState({
    fullName: { firstName: "", lastName: "" },
    email: "",
    password: "",
    vehicle: { plate: "", color: "", capacity: 1, vehicleType: "" },
  });

  const navigate=useNavigate()

  const [registerCaptain, { data, isLoading, isSuccess, isError, error }] =
    useRegisterCaptainMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message);
      navigate("/captain-login")
    }
    if (error) {
      if(error?.data?.errors.length){
        error?.data?.errors.forEach((err)=>{
            toast.error(err.msg)
        })
      }else if (error?.data?.message){
        toast.error(error.data.message)
      }else{
        toast.error("Something went wrong")
      }
    }
  }, [data, isSuccess, error, isError]);

  const onchangeHandler = (e) => {
    const { name, value } = e.target;

    if (name === "firstName" || name === "lastName") {
      setInputData({
        ...inputData,
        fullName: { ...inputData.fullName, [name]: value },
      });
    } else if (
      (["color", "plate", "capacity", "vehicleType"].includes(name))
    ) {
      setInputData({
        ...inputData,
        vehicle: { ...inputData.vehicle, [name]: value },
      });
    } else {
      setInputData({ ...inputData, [name]: value });
    }
  };
  const captainSignupHandler = () => {
    console.log(inputData);
    registerCaptain(inputData);
  };
  return (
    <>
      <Header />
      <div className="min-h-screen mt-14 w-full bg-[#FFB121] flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="flex flex-col items-center justify-center w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
            alt="uber"
            className="w-20 py-5 border-b-2"
          />

          <h1 className="font-bold text-3xl sm:text-4xl border-b-2 border-[#FFB121] pb-2 mb-6">
            Create Captain Account
          </h1>

          <div className="w-full mb-4">
            <Label className="block mb-2">What's your name?</Label>
            <div className="flex gap-4">
              <Input
                required
                value={inputData.fullName.firstName}
                name="firstName"
                onChange={onchangeHandler}
                type="text"
                placeholder="First Name"
                className="w-1/2 bg-gray-100 border rounded-lg p-2"
              />
              <Input
                required
                value={inputData.fullName.lastName}
                name="lastName"
                onChange={onchangeHandler}
                type="text"
                placeholder="Last Name"
                className="w-1/2 bg-gray-100 border rounded-lg p-2"
              />
            </div>
          </div>

          <div className="w-full mb-4">
            <Label className="block mb-2">What's your email?</Label>
            <Input
              required
              value={inputData.email}
              name="email"
              onChange={onchangeHandler}
              type="email"
              placeholder="email@example.com"
              className="w-full bg-gray-100 border rounded-lg p-2"
            />
          </div>

          <div className="w-full mb-4">
            <Label className="block mb-2">Password</Label>
            <Input
              required
              value={inputData.password}
              name="password"
              onChange={onchangeHandler}
              type="password"
              placeholder="**********"
              className="w-full bg-gray-100 border rounded-lg p-2"
            />
          </div>

          <div className="w-full mb-4">
            <Label className="block mb-2">Vehicle Information</Label>
            <div className="flex gap-4">
              <Input
                required
                value={inputData.vehicle.color}
                name="color"
                onChange={onchangeHandler}
                type="text"
                placeholder="Vehicle Color"
                className="w-1/2 bg-gray-100 border rounded-lg p-2"
              />
              <Input
                required
                value={inputData.vehicle.plate}
                name="plate"
                onChange={onchangeHandler}
                type="text"
                placeholder="Vehicle Plate"
                className="w-1/2 bg-gray-100 border rounded-lg p-2"
              />
            </div>
            <div className="flex gap-4 mt-4">
              <Input
                required
                value={inputData.vehicle.capacity}
                name="capacity"
                onChange={onchangeHandler}
                type="number"
                placeholder="Vehicle Capacity"
                className="w-1/2 bg-gray-100 border rounded-lg p-2"
              />
              <select
                required
                value={inputData.vehicle.vehicleType}
                name="vehicleType"
                onChange={onchangeHandler}
                className="w-1/2 bg-gray-100 border rounded-lg p-2"
              >
                <option value="" disabled>
                  Select Vehicle Type
                </option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="motorcycle">Motorcycle</option>
              </select>
            </div>
          </div>

          <Button
            className="my-3 w-full bg-black text-white py-2 rounded-lg shadow-md hover:bg-blue-600"
            onClick={captainSignupHandler}
          >
            {isLoading ? "please wait" : "Create Captain Account"}
          </Button>

          <p className="text-center text-sm mt-3">
            Already have an account?{" "}
            <Link to="/captain-login" className="text-blue-600 font-bold">
              Login here
            </Link>
          </p>

          <p className="text-[10px] mt-6 leading-tight text-center">
            This site is protected by reCAPTCHA and the{" "}
            <span className="underline">Google Privacy Policy</span> and{" "}
            <span className="underline">Terms of Service apply</span>.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CaptainSignup;
