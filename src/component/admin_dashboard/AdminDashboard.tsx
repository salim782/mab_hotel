"use client";

import Image from "next/image";
import React, { useEffect } from "react";

const AdminDashboard = () => {
  return (
    <div className="w-full grid grid-cols-5 gap-10">
      <div className="w-full bg-white rounded-none transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] border-b-4 border-b-green-500 p-4">
        <div className="flex justify-center items-center gap-10">
          <div className="relative">
            <Image
              src="/images/arrival.png"
              width={100}
              height={100}
              alt="Arrival"
            />
          </div>
          <div>
            <h1 className=" text-lg font-bold text-gray-800">Arrival</h1>
            <p className="">Total 0</p>
            <p>Arrived 0</p>
            <p>Pending 0</p>
          </div>
        </div>
      </div>

      <div className="w-full bg-white rounded-none transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] border-b-4 border-b-yellow-600 p-4">
        <div className="flex justify-center items-center gap-10">
          <div className="relative">
            <Image
              src="/images/departure.png"
              width={100}
              height={100}
              alt="Arrival"
            />
          </div>
          <div>
            <h1 className=" text-lg font-bold text-gray-800">Departure</h1>
            <p className="">Total 9</p>
            <p>CheckedOut 0</p>
            <p>Pending 9</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white rounded-none transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] border-b-4 border-b-pink-800 p-4">
        <div className="flex justify-center items-center gap-10">
          <div className="relative">
            <Image
              src="/images/hotelbooking.svg"
              width={100}
              height={100}
              alt="Arrival"
            />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-800">Total Booking</h1>
            <p>0</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white rounded-none transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] border-b-4 border-b-indigo-500 p-4">
        <div className="flex justify-center items-center gap-10">
          <div className="relative">
            <Image
              src="/images/house.svg"
              width={100}
              height={100}
              alt="Arrival"
            />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-800">IN House</h1>
            <p>10</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white rounded-none transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] border-b-4 border-b-violet-800 p-4">
        <div className="flex justify-center items-center gap-10">
          <div className="relative">
            <Image
              src="/images/availbles.png"
              width={200}
              height={200}
              alt="Arrival"
            />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-800">Availble Room</h1>
            <p>108</p>
            {/* <h1 className="text-lg font-bold text-gray-800">UnAlloted Room</h1> */}
            {/* <p>0</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
