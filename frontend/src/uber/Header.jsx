import React, { useEffect } from "react";
import { logoutUserUi } from "@/features/api/userSlice";
import { useLogoutUserMutation } from "@/utils/api/userApi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLogoutCaptainMutation } from "@/utils/api/captainApi";
import { logoutCaptainUi } from "@/features/api/captainSlice";

const Header = () => {
  const user = useSelector((state)=>state?.user?.user)
  const captain = useSelector((state)=>state?.captain?.captain)
  const dispatch = useDispatch();
  const [logoutUser, { isLoading, isSuccess, error }] = useLogoutUserMutation();
  const [logoutCaptain,{isLoading:isCapatinLoading,isSuccess:isCaptainSuccess,error:captainError}]=useLogoutCaptainMutation()
  const navigate=useNavigate()
  const handleLogout = async () => {
    try {
      if(user){

        await logoutUser();
        dispatch(logoutUserUi());
        localStorage.removeItem("token");
        navigate("/")
      }
      if(captain){
        await logoutCaptain();
        dispatch(logoutCaptainUi())
        localStorage.removeItem("token");
        navigate("/")
      }
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Logout successfully");
    }
    if (error) {
      toast.error(error?.message || "Something went wrong!!!");
    }
  }, [isSuccess, error]);

  return (
    <div className="w-full py-4 bg-black text-white flex fixed top-0 z-50 justify-around cursor-pointer">
      <div className="max-w-3xl flex px-8 items-center">
        <Link to="/">
          <h1 className="font-mono text-xl underline">Uber</h1>
        </Link>

        <ul className="hidden sm:flex font-mono list-none ml-8">
          <Link to="/login">
            <li className="px-2 hover:bg-gray-800 hover:rounded-xl transition-colors duration-300 ease-in-out">Ride</li>
          </Link>
          <li className="px-2 hover:bg-gray-800 hover:rounded-xl">Drive</li>
          <li className="px-2 hover:bg-gray-800 hover:rounded-xl">Business</li>
          <li className="px-2 hover:bg-gray-800 hover:rounded-xl">About</li>
        </ul>
      </div>

      <div className="flex items-center">
        <ul className="flex list-none gap-2">
          <li className="hidden sm:inline hover:bg-gray-800 hover:rounded-xl">En</li>
          <li className="hidden sm:inline hover:bg-gray-800 hover:rounded-xl">Help</li>
          {!user && !captain ? (
            <>
              <Link to="/login">
                <button className="px-4 border-2 rounded-xl border-white hover:bg-gray-800">Log in</button>
              </Link>
              <Link to="/signup">
                <button className="px-4 bg-white rounded-xl text-black hover:bg-gray-800">Sign up</button>
              </Link>
            </>
          ) : (
            <button
            
              onClick={handleLogout}
              className="px-4 bg-white rounded-xl text-black hover:bg-gray-800">
             {isLoading || isCapatinLoading ? 'please wait':'log out'} 
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
