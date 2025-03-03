/* eslint-disable no-unused-vars */
import React from "react";
import Countdown from "react-countdown";
import { IoMdArrowBack, IoMdArrowForward ,  } from "react-icons/io";

export default function FlashSale() {
    const countdownTarget = new Date("2025-03-15T23:59:59").getTime();
    const renderer = ({ days, hours, minutes, seconds }) => {
        return (
            <div className="flex items-center space-x-2 text-black font-semibold text-xl">
                <div className="flex flex-col items-center">
                    <span className="text-sm text-gray-500">Days</span>
                    <span>{days}</span>
                </div>
                <span className="text-red-500 text-2xl">:</span>
                <div className="flex flex-col items-center">
                    <span className="text-sm text-gray-500">Hours</span>
                    <span>{hours}</span>
                </div>
                <span className="text-red-500 text-2xl">:</span>
                <div className="flex flex-col items-center">
                    <span className="text-sm text-gray-500">Minutes</span>
                    <span>{minutes}</span>
                </div>
                <span className="text-red-500 text-2xl">:</span>
                <div className="flex flex-col items-center">
                    <span className="text-sm text-gray-500">Seconds</span>
                    <span>{seconds}</span>
                </div>
            </div>
        );
    };
    return (
        <div className="flex items-center flex-col md:flex-row justify-between w-[95%] md:mx-auto py-4 mt-5">            
        <div className="flex items-center space-x-24 flex-col md:flex-row left-[-60px] md:left-0 relative">
        <h2 className="text-3xl font-medium text-black">Flash Sales</h2>
            <Countdown date={countdownTarget} renderer={renderer} />
        </div>
        <div className="flex space-x-2 invisible md:visible">
            <button className="p-2 bg-gray-100 rounded-full">
                <IoMdArrowBack size={20} />
            </button>
            <button className="p-2 bg-gray-100 rounded-full">
                <IoMdArrowForward size={20} />
            </button>
        </div>
        </div>
    );
}
