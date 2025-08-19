"use client";

import { Button } from "antd";
import Image from "next/image";
import React, { useEffect } from "react";
import { FaSignal } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div className="">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
        <div className="w-full flex justify-center items-center h-[150px] overflow-hidden bg-white rounded-none transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] border-b-4 border-b-green-500 p-4">
          <div className="flex justify-center items-center gap-6 overflow-hidden">
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

        <div className="w-full flex justify-center items-center h-[150px] overflow-hidden bg-white rounded-none transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] border-b-4 border-b-yellow-600 p-4">
          <div className="flex justify-center items-center gap-6">
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
        <div className="w-full flex justify-center items-center h-[150px] overflow-hidden bg-white rounded-none transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] border-b-4 border-b-pink-800 p-4">
          <div className="flex justify-center items-center gap-6">
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
              <p className="text-center">0</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center h-[150px] overflow-hidden bg-white rounded-none transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] border-b-4 border-b-indigo-500 p-4">
          <div className="flex justify-center items-center gap-6">
            <div className="relative h-[85px] w-[85px]">
              <Image src="/images/house.svg" fill alt="Arrival" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-800">IN House</h1>
              <p className="text-center">10</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center h-[150px] overflow-hidden bg-white rounded-none transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] border-b-4 border-b-violet-800 p-4">
          <div className="flex justify-center items-center gap-6">
            <div className="relative">
              <Image
                src="/images/availbles.png"
                width={100}
                height={100}
                alt="Arrival"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-800">Availble Room</h1>
              <p className="text-center">108</p>
              {/* <h1 className="text-lg font-bold text-gray-800">UnAlloted Room</h1> */}
              {/* <p>0</p> */}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6">
        <div className="w-full bg-white rounded-none transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] p-4">
          <div className="border border-gray-200 rounded-2xl p-10">
            <div className="flex justify-start items-center gap-2">
              <div className="relative">
                <Image
                  src="/images/sales.png"
                  alt="img"
                  height={40}
                  width={40}
                />
              </div>
              <span className="font-semibold">Sales</span>
            </div>
            <div className="px-4">
              <div className="flex justify-between items-center py-2">
                <p className="">Today</p>
                {/* <Button type="text"className="!hover:bg-transparent !hover:text-inherit">Today</Button> */}
                <p>1376.00</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="bg-green-700 h-[22px] w-[50px] flex justify-center items-center">
                  <p className="text-white text-xs">Month</p>
                </div>
                <p>13,92187.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-none transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] p-4">
          <div className="border border-gray-200 rounded-2xl p-10">
            <div className="flex justify-start items-center gap-2">
              <div className="relative">
                <Image
                  src="/images/sales.png"
                  alt="img"
                  height={40}
                  width={40}
                />
              </div>
              <span className="font-semibold">Sales</span>
            </div>
            <div className="px-4">
              <div className="flex justify-between items-center py-2">
                <p className="">Today</p>
                {/* <Button type="text"className="!hover:bg-transparent !hover:text-inherit">Today</Button> */}
                <p>1376.00</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="bg-green-700 h-[22px] w-[50px] flex justify-center items-center">
                  <p className="text-white text-xs">Month</p>
                </div>
                <p>13,92187.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-none transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] p-4">
          <div className="border border-gray-200 rounded-2xl p-10">
            <div className="flex justify-start items-center gap-2">
              <div className="relative">
                <Image
                  src="/images/sales.png"
                  alt="img"
                  height={40}
                  width={40}
                />
              </div>
              <span className="font-semibold">Sales</span>
            </div>
            <div className="px-4">
              <div className="flex justify-between items-center py-2">
                <p className="">Today</p>
                {/* <Button type="text"className="!hover:bg-transparent !hover:text-inherit">Today</Button> */}
                <p>1376.00</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="bg-green-700 h-[22px] w-[50px] flex justify-center items-center">
                  <p className="text-white text-xs">Month</p>
                </div>
                <p>13,92187.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
