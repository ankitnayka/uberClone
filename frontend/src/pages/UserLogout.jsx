// import React from "react";
// import { useLogoutUserMutation } from "@/utils/api/userApi";
// import { useNavigate } from "react-router-dom";

// const UserLogout = () => {
//   const [logoutUser, [isLoading, isError, isSuccess]] = useLogoutUserMutation();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await logoutUser().unwrap(); // Call API & unwrap response
//       localStorage.removeItem("token"); // Clear token if stored
//       navigate("/login"); // Redirect to login page
//     } catch (err) {
//       console.error("Logout failed:", err);
//     }
//   };
//   return (
//     <div>
//       <button
//         onClick={handleLogout}
//         disabled={isLoading}
//         className="px-4 py-2 bg-red-500 text-white rounded"
//       >
//         {isLoading ? "Logging out..." : "Logout"}
//       </button>
//     </div>
//   );
// };

// export default UserLogout;
