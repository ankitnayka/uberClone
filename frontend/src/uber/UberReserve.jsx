import React, { useState } from "react";
import { data } from "react-router-dom";


const UberReserve=()=>{

  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const date=new Date()
  let month=months[date.getMonth()]

  const [selectDate,setSelectDate]=useState(new Date())
  return(
    <div className="bg-[#0DCDD6]/40 p-8 mx-8 rounded-xl transform transition-transform duration-300 ease-in-out hover:-translate-y-2 ">
        <h1 className="text-2xl font-semibold
        ">Get your ride right with Uber Reserve</h1>
        <p className="text-xl font-semibold my-2 "> choose date and time</p>
        <div>
          <select 
          selected={selectDate}
          onChange={(data)=>setSelectDate(data)}
          >

          </select>
        
        </div>
    </div>
  )
}


export default UberReserve