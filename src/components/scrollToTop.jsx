/* eslint-disable no-unused-vars */
import { IoIosArrowUp } from "react-icons/io";
import React from "react";

export default function ScrollToTop() {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="w-[90%] mx-auto px-4">
            <button
                onClick={handleScrollToTop} 
                className="fixed bottom-6 right-6 bg-gray-200 text-black p-3 rounded-full shadow-lg hover:text-white hover:bg-red-500 transition"
            >
                <IoIosArrowUp size={24} />
            </button>
        </div>
    );
}
