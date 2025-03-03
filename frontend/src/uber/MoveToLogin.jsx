import React from "react";

const MoveToLogin = () => {
  return (
    <div className="my-4 flex flex-col  md:flex-row">
      <div className="p-4 md:ml-16 md:w-1/2 md:mt-16">
        <h2 className="text-2xl font-bold ">
          Log in to see your recent activity
        </h2>
        <p className="text-gray-700">
          View past trips, tailored suggestions, support resources, and more.
        </p>
        <button className="bg-black text-white font-semibold p-2 rounded-lg my-4">
          Log in to your account
        </button>
        <p className="text-gray-700">Don’t have an Uber account? Sign up</p>
      </div>

      <div className=" md:inline md:w-1/2 my-8 px-8  ">
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_576,w_576/v1684887108/assets/76/baf1ea-385a-408c-846b-59211086196c/original/u4b-square.png"
          alt=""
          className="w-full h-full  shadow-xl rouned-xl h-64 object-cover  transform transition-transform duration-300 ease-in-out hover:-translate-y-2 "
        />
      </div>
    </div>
  );
};

export default MoveToLogin;
