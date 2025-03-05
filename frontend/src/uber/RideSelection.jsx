import { useState } from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const rides = [
  { type: "Auto", seats: 3, time: "1:13 PM", price: 106.32, cashOnly: true, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTquU__-057RaPIj-AvepyUjPJ6590ADxFA3g&s" },
  { type: "Uber Go", seats: 4, time: "1:14 PM", price: 138.67, discount: 184.90, image: "https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/Hatchback.png" },
  { type: "Premier", seats: 4, time: "1:14 PM", price: 151.69, discount: 202.25, image: "https://d1a3f4spazzrp4.cloudfront.net/car-types/haloProductImages/v1.1/TukTuk_Green_v1.png" },
  { type: "Go Sedan", seats: 4, time: "1:14 PM", price: 152.51, discount: 203.35, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTquU__-057RaPIj-AvepyUjPJ6590ADxFA3g&s" },
];

export default function RideSelection() {
  const [selectedRide, setSelectedRide] = useState(rides[0]);

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold">Choose a ride</h2>
      <div className="mt-4">
        {rides.map((ride, index) => (
          <div
            key={index}
            onClick={() => setSelectedRide(ride)}
            className={`p-4 mb-2 border rounded-lg cursor-pointer  flex justify-between items-center ${
                selectedRide.type === ride.type ? "border-black" : "border-gray-300"
            }`}
          >
            <div className="flex items-center">
              <img src={ride.image} alt={ride.type} width={50} height={50} className="mr-3" />
              <div>
                <p className="font-semibold">{ride.type}</p>
                <p className="text-sm text-gray-600">{ride.seats} seats • {ride.time}</p>
                {ride.cashOnly && <p className="text-sm text-gray-500">Pay directly to driver, Cash/UPI only</p>}
              </div>
            </div>
            <div className="text-right">
              {ride.discount && (
                <p className="text-xs text-green-600">25% off</p>
              )}
              <p className="text-lg font-semibold">₹{ride.price.toFixed(2)}</p>
              {ride.discount && (
                <p className="text-xs text-gray-500 line-through">₹{ride.discount.toFixed(2)}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center text-green-700">
          <FaMoneyBillWave className="mr-2" />
          <span>Cash</span>
        </div>
        <Button className="bg-black text-white px-4 py-2 rounded-lg">Request {selectedRide.type}</Button>
      </div>
    </div>
  );
}