// import React,{useState}from "react";
// import { FaLocationArrow } from "react-icons/fa";

// const Ride = () => {
//   const [location, setLocation] = useState("");
//   const [destination, setDestination] = useState("");
//   console.log(location)
//   console.log(destination)
//   return (
//     <>
//     {/* <RideRequestForm/> */}
//     <div className="mx-8 flex my-16 ">
//     <div className="flex flex-col items-center justify-center  md:w-1/2 bg-gray-100 p-6">
//       <div className="bg-white shadow-lg rounded-2xl p-6 w-96">
//         <h1 className="text-2xl font-bold mb-2 text-black">Request a ride for now or later</h1>
//         <p className="text-gray-600 mb-4">Add your trip details, hop in, and go.</p>
        
//         <div className="mb-4 relative">
//           <div className="line absolute h-16 w-1 top-[35%] left-[2%] bg-gray-700 rounded-lg  z-10"></div>
//           <div className="relative flex items-center">
//             <input
//               type="text"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter location"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//             />
//             <FaLocationArrow className="absolute right-3 text-gray-500" />
//           </div>
//         </div>

//         <div className="mb-4">
//           <input
//             type="text"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Enter destination"
//             value={destination}
//             onChange={(e) => setDestination(e.target.value)}
//           />
//         </div>

//         <div className="flex gap-2">
//           <button className="bg-black text-white px-4 py-2 rounded-lg w-full hover:bg-gray-800">
//             See prices
//           </button>
//           <button className="bg-gray-300 text-black px-4 py-2 rounded-lg w-full hover:bg-gray-400">
//             Schedule for later
//           </button>
//         </div>
//       </div>
//     </div>
//       <div className="hidden md:inline md:w-1/2 my-8 px-8 z-10 ">
//         <img
//           src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_576,w_576/v1683919251/assets/42/a29147-e043-42f9-8544-ecfffe0532e9/original/travel-ilustra.png"
//           alt="ridewithABCD"
//           className="w-full h-full  shadow-xl rouned h-64 object-contain  transform transition-transform duration-300 ease-in-out hover:-translate-y-2 "
//           />
//       </div>
//     </div>
//           </>
//   );
// };

// export default Ride;
import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import RideSelection from "./RideSelection";

const dummyLocations = [
  "New York, USA",
  "Los Angeles, USA",
  "Chicago, USA",
  "San Francisco, USA",
  "London, UK",
  "Berlin, Germany",
  "Tokyo, Japan",
  "Sydney, Australia",
];

const Ride = () => {
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(value);

    // Simulating autocomplete suggestions
    if (value) {
      setFilteredLocations(
        dummyLocations.filter((loc) =>
          loc.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setFilteredLocations([]);
    }
  };

  const handleDestinationChange = (e) => {
    const value = e.target.value;
    setDestination(value);

    
    if (value) {
      setFilteredDestinations(
        dummyLocations.filter((loc) =>
          loc.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setFilteredDestinations([]);
    }
  };

  const selectLocation = (value) => {
    setLocation(value);
    setFilteredLocations([]);
  };

  const selectDestination = (value) => {
    setDestination(value);
    setFilteredDestinations([]);
  };

  return (
    <div className="mx-8 flex my-16">
      <div className="flex flex-col items-center justify-center md:w-1/2 bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-2xl p-6 w-96">
          <h1 className="text-2xl font-bold mb-2 text-black">
            Request a ride for now or later
          </h1>
          <p className="text-gray-600 mb-4">
            Add your trip details, hop in, and go.
          </p>

          
          <div className="mb-4 relative">
            <div className="relative flex items-center">
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter location"
                value={location}
                onChange={handleLocationChange}
              />
              <FaLocationArrow className="absolute right-3 text-gray-500" />
            </div>
            {filteredLocations.length > 0 && (
              <ul className="absolute w-full bg-white shadow-md rounded-md mt-1">
                {filteredLocations.map((loc, index) => (
                  <li
                    key={index}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => selectLocation(loc)}
                  >
                    {loc}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Destination Input */}
          <div className="mb-4 relative">
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter destination"
              value={destination}
              onChange={handleDestinationChange}
            />
            {filteredDestinations.length > 0 && (
              <ul className="absolute w-full bg-white shadow-md rounded-md mt-1">
                {filteredDestinations.map((dest, index) => (
                  <li
                    key={index}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => selectDestination(dest)}
                  >
                    {dest}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex gap-2">
            <button className="bg-black text-white px-4 py-2 rounded-lg w-full hover:bg-gray-800">
              See prices
            </button>
            <button className="bg-gray-300 text-black px-4 py-2 rounded-lg w-full hover:bg-gray-400">
              Schedule for later
            </button>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden md:inline md:w-1/2 my-8 px-8 z-10">
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_576,w_576/v1683919251/assets/42/a29147-e043-42f9-8544-ecfffe0532e9/original/travel-ilustra.png"
          alt="ridewithABCD"
          className="w-full h-full shadow-xl rounded h-64 object-contain transform transition-transform duration-300 ease-in-out hover:-translate-y-2"
        />
      </div>
      
    </div>
  );
};

export default Ride;
