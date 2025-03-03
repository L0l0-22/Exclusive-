/* eslint-disable no-unused-vars */
import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RiErrorWarningLine } from "react-icons/ri";
import toast from "react-hot-toast";


export function Contact() {
    const schema = yup.object().shape({
        name: yup.string().min(2, "Name must be at least 2 characters").required("Name is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
        phone: yup.string()
            .matches(/^\d{10,15}$/, "Phone number must be 10-15 digits")
            .required("Phone number is required"),
    });
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onTouched",
    });
    const onSubmit = (data , event) => {
        reset();
        event.preventDefault();
        toast.success("Your message has been sent");
    };
    

return (
    <section className="bg-white dark:bg-gray-900 w-[90%] mx-auto">
    <div className="container px-6 py-12 mx-auto">
        <p className="font-normal text-gray-500">
        Home / <span className="text-black">Contact</span>
        </p>
        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-[1fr_3fr]">
        <div className="p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800">
            <div className="flex items-center space-x-4">
            <div className="bg-red-500 p-3 rounded-full mb-4">
                <FaPhoneAlt className="text-white text-xl" />
            </div>
            <h3 className="text-lg font-semibold">Call To Us</h3>
            </div>
            <p className="text-black text-sm my-5">
            We are available 24/7, 7 days a week.
            </p>
            <p className="text-black font-medium my-5">
            Phone: +8801611112222
            </p>
            <hr className="my-4 border-gray-600" />
            <div className="flex items-center space-x-4">
            <div className="bg-red-500 p-3 rounded-full mb-4">
                <FaEnvelope className="text-white text-xl" />
            </div>
            <h3 className="text-lg font-semibold">Write To Us</h3>
            </div>
            <p className="text-black text-sm my-5">
            Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-black font-medium my-5">
            Emails: customer@exclusive.com
            </p>
            <p className="text-black font-medium mt-5">
            Emails: support@exclusive.com
            </p>
        </div>
        <div className="p-4 py-6 rounded shadow-lg dark:bg-gray-800 md:p-8">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="-mx-2 md:items-center md:flex mb-9">
                <div className="flex-1 px-2">
                <input
                    {...register("name")}
                    type="text"
                    placeholder="Your Name *"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-500 bg-gray-100 rounded dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.name && (
                    <p className="text-red-800 bg-red-200 text-sm mt-1 flex">
                        <RiErrorWarningLine className="mt-[3px] mx-1" />
                        {errors.name.message}
                    </p>
                )}
                </div>
                <div className="flex-1 px-2 mt-4 md:mt-0">
                <input
                    {...register("email")}
                    type="email"
                    placeholder="Your Email *"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-500 bg-gray-100 rounded dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.email && (
                    <p className="text-red-800 bg-red-200 text-sm mt-1 flex">
                        <RiErrorWarningLine className="mt-[3px] mx-1" />
                        {errors.email.message}
                    </p>
                )}
                </div>
                <div className="flex-1 px-2 mt-4 md:mt-0">
                <input
                    {...register("phone")}
                    type="tel"
                    placeholder="Your Phone *"
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-500 bg-gray-100 rounded dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.phone && (
                    <p className="text-red-800 bg-red-200 text-sm mt-1 flex">
                        <RiErrorWarningLine className="mt-[3px] mx-1" />
                        {errors.phone.message}
                    </p>
                )}
                </div>
            </div>
            <div className="w-full mt-4">
                <textarea
                className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-500 bg-gray-100 rounded md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Your Message"
                ></textarea>
            </div>
            <div className="flex justify-end">
                <button
                type="submit"
                onClick={handleSubmit(onSubmit)}
                className=" lg:w-1/4 px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded hover:bg-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50"
                >
                Send message
                </button>
            </div>
            </form>
        </div>
        </div>
    </div>
    </section>
);
}

export default Contact;
