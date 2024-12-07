import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin=()=>{
    const [inputData, setInputData] = useState({
        email: "",
        password: ""
    })

    const onchangeHandler = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value })
        
    }
    const loginHandler=()=>{
        console.log(inputData)
        console.log("hello");
        
    }
    return (
        <div className="h-screen w-full bg-[#FFB121] flex justify-around flex-col items-center" >
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="uber" srcset=""
                className="w-16 pl-5 pt-5 underline  "
            />

            <div className=" flex flex-col items-center justify-center  my-32   ">
                <h1 className="font-bold text-4xl border rounded-lg  border-[#FFB121] shadow-md"> Log in </h1>
                <div className="p-3">
                    <Label>What's your an  email</Label>
                    <Input
                        required
                        value={inputData.email}
                        name="email"
                        onChange={onchangeHandler}
                        type="email"
                        placeholder="ankitnayka.dev"
                        className="border rounded-lg border-black placeholder:text-black placeholder:opacity-50"
                    />
                </div>
                <div>
                    <Label>Password</Label>
                    <Input
                        required
                        type="password"
                        value={inputData.password}
                        name="password"
                        onChange={onchangeHandler}
                        placeholder="**********"
                        className="border rounded-lg border-black placeholder:text-black placeholder:opacity-50"
                    />
                </div>
                
                    <Button className="my-5 shadow-lg w-52" onClick={loginHandler}>Log in </Button>
                
                <p>
                    Register as captain<Link to='/captain-signup' className="text-black shadow-lg font-bold">create new Account </Link>
                </p>

            </div>
            {/* //captain */}
            <Link to='/login'>
                <Button className="my-3 mb-10 shadow-lg text-white w-48 bg-[#333333]">
                    sign in as user</Button>
            </Link>
        </div>
    )
}

export default CaptainLogin