import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const user=true
  return (
    <div className="w-full py-4 bg-black text-white flex fixed top-0 z-50 justify-around  cursor-pointer ">
        <div className="max-w-3xl flex px-8  items-center  ">
        <Link to='/'>
           <h1 className="font-mono text-xl underline ">Uber</h1> </Link> 
                
                <ul className="hidden sm:flex flex font-mono list-none ml-8 ">
                 <Link to='/login'>    <li className="px-2 hover:bg-gray-800 hover:rounded-xl  transition-colors duration-300 ease-in-out ">Ride</li> </Link>
                    <li className="px-2 hover:bg-gray-800 hover:rounded-xl">Drive</li>
                    <li className="px-2 hover:bg-gray-800 hover:rounded-xl">Bussiness</li>
                    <li className="px-2 hover:bg-gray-800 hover:rounded-xl">About</li>
                
                </ul>
         </div>

        <div className=" flex items-center  ">
                <ul className="flex  list-none gap-2  ">
                    <li className="hidden sm:inline   hover:bg-gray-800 hover:rounded-xl">En</li>
                    <li className="hidden sm:inline  hover:bg-gray-800 hover:rounded-xl">Help</li>
                    { user && (
                        <>
                       <Link to='/login'>     <button className="px-4 border-2 rounded-xl border-white hover:gray-800 hover:rounded-xl">Log in</button> </Link>

                       <Link to='/signup'>  <button className="px-4  bg-white rounded-xl  text-black hover:gray-800 hover:rounded-xl">sign up </button> </Link>
                        </>
                    )

                    }
                </ul>
         </div>
    </div>
  );
};

export default Header;
 