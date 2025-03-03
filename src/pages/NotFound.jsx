/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from "react-router-dom"; 
import notfound from "../assets/images/NotFound-removebg-preview.png";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <section className="bg-white dark:bg-gray-900 h-[80vh] flex flex-col justify-center">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <img src={notfound} alt="Not Found" className="w-full h-full object-cover" />
                    <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="w-full md:w-1/3 bg-red-500 text-white py-3 my-6 rounded-sm hover:bg-red-600 transition"
                    >
                        Back To Home Page
                    </button>
                </div>   
            </div>
        </section>
    );
}
