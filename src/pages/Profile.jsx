/* eslint-disable no-unused-vars */
import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RiErrorWarningLine } from "react-icons/ri";

export function Profile() {
    const schema = yup.object().shape({
        firstName: yup.string().min(2, "First Name must be at least 2 characters").required("First Name is required"),
        lastName: yup.string().min(2, "Last Name must be at least 2 characters").required("Last Name is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
        address: yup.string().min(5, "Address must be at least 5 characters").required("Address is required"),
        currentPassword: yup.string().required("Current Password is required"),
        newPassword: yup.string().min(6, "New Password must be at least 6 characters"),
        confirmPassword: yup.string()
            .oneOf([yup.ref("newPassword"), null], "Passwords must match")
    });
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onTouched",
    });
    
    const onSubmit = (data) => {
        console.log("Profile updated:", data);
        toast.success("Profile updated successfully!");
    };
    

return (
    <section className="bg-white dark:bg-gray-900 w-[90%] mx-auto">
    <Toaster position="top-right" reverseOrder={false} />
    <div className="container px-6 py-12 mx-auto">
    <div className="flex flex-col sm:flex-row justify-between md:items-center items-start py-2 gap-2 md:gap-0">
    <p className="font-normal text-gray-500">
        Home / <span className="text-black">My Account</span>
    </p>
    <p className="font-normal text-black">
        Welcome! <span className="text-red-500">Md Rimel</span>
    </p>
    </div>
        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-[1fr_3fr]">
            <ul className="text-lg md:flex md:justify-between lg:block font-semibold text-gray-700 lg:space-y-6 mt-2">
        <li>
            Manage My Account
            <ul className="ml-6 text-base font-normal text-gray-600 space-y-2 mt-2">
            <li className="text-red-500">My Profile</li>
            <li>Address Book</li>
            <li>My Payment Options</li>
            </ul>
        </li>
        <div>
        <li>
            My Orders
            <ul className="ml-6 text-base font-normal text-gray-600 space-y-2 mt-2">
            <li>My Returns</li>
            <li>My Cancellations</li>
            </ul>
        </li>
        <li className="mt-4">My Wishlist</li>
        </div>
        </ul>
        
        <div className="p-4 py-6 rounded shadow-lg dark:bg-gray-800 md:p-8">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="-mx-2 md:items-center md:flex mb-9">
            <div className="flex-1 px-2">
                <label className="block mb-2 text-lg text-black dark:text-gray-200">First Name</label>
                <input
                type="text"
                    placeholder="Md"
                    className="block w-full px-5 text-sm py-2.5 mt-2 text-gray-700 placeholder-gray-500 bg-gray-100 rounded dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.firstName && (
                    <p className="text-red-800 bg-red-200 text-sm mt-1 flex">
                        <RiErrorWarningLine className="mt-[3px] mx-1" />
                        {errors.firstName.message}
                    </p>
                )}
                </div>
                <div className="flex-1 px-2">
                <label className="block mb-2 text-lg text-black dark:text-gray-200">Last Name</label>
                <input
                type="text"
                    placeholder="Rimel"
                    className="block w-full px-5 text-sm py-2.5 mt-2 text-gray-700 placeholder-gray-500 bg-gray-100 rounded dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.lastName && (
                    <p className="text-red-800 bg-red-200 text-sm mt-1 flex">
                        <RiErrorWarningLine className="mt-[3px] mx-1" />
                        {errors.lastName.message}
                    </p>
                )}
                </div>
            </div>
            <div className="-mx-2 md:items-center md:flex mb-9">
            <div className="flex-1 px-2 mt-4">
            <label className="block mb-2 text-lg text-black dark:text-gray-200">Email</label>
            <input
                type="email"
                placeholder="example@email.com"
                className="block w-full px-5 text-sm py-2.5 mt-2 text-gray-700 placeholder-gray-500 bg-gray-100 rounded dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.email && (
                    <p className="text-red-800 bg-red-200 text-sm mt-1 flex">
                        <RiErrorWarningLine className="mt-[3px] mx-1" />
                        {errors.email.message}
                    </p>
                )}
            </div>
            <div className="flex-1 px-2 mt-4">
            <label className="block mb-2 text-lg text-black dark:text-gray-200">Address</label>
            <input
                type="text"
                placeholder="123 Street, City, Country"
                className="block w-full px-5 text-sm py-2.5 mt-2 text-gray-700 placeholder-gray-500 bg-gray-100 rounded dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.address && (
                    <p className="text-red-800 bg-red-200 text-sm mt-1 flex">
                        <RiErrorWarningLine className="mt-[3px] mx-1" />
                        {errors.firstName.message}
                    </p>
                )}
            </div>
            </div>
            <div className="flex-1 px-2 mt-4">
            <label className="block mb-2 text-lg text-black dark:text-gray-200">Password Changes</label>
            <input
                type="plgsword"
                placeholder="Current Password"
                className="block w-full px-5 text-sm py-2.5 mt-2 text-gray-700 placeholder-gray-500 bg-gray-100 rounded dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.currentPassword && (
                    <p className="text-red-800 bg-red-200 text-sm mt-1 flex">
                        <RiErrorWarningLine className="mt-[3px] mx-1" />
                        {errors.currentPassword.message}
                    </p>
                )}
        </div>
        <div className="flex-1 px-2 mt-4">
            <input
                type="password"
                placeholder="New Password"
                className="block w-full px-5 text-sm py-2.5 mt-2 text-gray-700 placeholder-gray-500 bg-gray-100 rounded dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.newPassword && (
                    <p className="text-red-800 bg-red-200 text-sm mt-1 flex">
                        <RiErrorWarningLine className="mt-[3px] mx-1" />
                        {errors.newPassword.message}
                    </p>
                )}
        </div>
        <div className="flex-1 px-2 mt-4">
            <input
                type="password"
                placeholder="Confirm New Password"
                className="block w-full px-5 text-sm py-2.5 mt-2 text-gray-700 placeholder-gray-500 bg-gray-100 rounded dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {errors.confirmPassword && (
                    <p className="text-red-800 bg-red-200 text-sm mt-1 flex">
                        <RiErrorWarningLine className="mt-[3px] mx-1" />
                        {errors.confirmPassword.message}
                    </p>
                )}
            </div>
            <div className="flex justify-between md:justify-end mt-5">
                <p className=" md:text-lg text-center mx-5 pt-2">Cancel</p>
                <button
                type="submit"
                className=" w-1/2 md:w-1/4 text-sm font-medium py-3 text-white capitalize transition-colors duration-300 transform bg-red-500 rounded hover:bg-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50"
                >
                Save Changes
                </button>
            </div>
            </form>
        </div>
        </div>
    </div>
    </section>
);
}

export default Profile;
