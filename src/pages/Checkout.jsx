/* eslint-disable no-unused-vars */
import toast from "react-hot-toast";
import nagad from "../assets/images/nagad.png";
import visa from "../assets/images/visa1-Photoroom.png";
import mastercard from "../assets/images/master-Photoroom.png";
import bkash from "../assets/images/bkash1-Photoroom.png";
import LCD from "../assets/images/LCD-Photoroom.png";
import gamepad from "../assets/images/playHome-Photoroom.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RiErrorWarningLine } from "react-icons/ri";

function Checkout() {
    const schema = yup.object().shape({
        firstName: yup.string().min(2, "First name must be at least 2 characters").required("First name is required"),
        address: yup.string().required("Street address is required"),
        city: yup.string().required("City is required"),
        phone: yup.string().matches(/^\d{10,15}$/, "Enter a valid phone number").required("Phone number is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
    });
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onTouched",
    });
    const onSubmit = (data , event) => {
        toast.success("Order placed successfully!");
        reset(); 
        event.preventDefault();
    };
    return (
        <div className="w-[90%] mx-auto py-6">
            <div className="flex justify-between mb-6">
                <p className="font-normal text-gray-500">
                    Account / My Account / Product / View Cart /
                    <span className="text-black"> Checkout</span>
                </p>
            </div>
            <h2 className="text-3xl font-medium my-10">Billing Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                <div className="md:col-span-3">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block text-sm text-gray-500">
                                First Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                {...register("firstName")}
                                className="block w-full px-5 text-sm py-2.5 mt-2 text-gray-700 bg-gray-100 rounded dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                            {errors.firstName && (
                                <p className="text-red-800 bg-red-200 text-sm mt-1 flex">
                                    <RiErrorWarningLine className="mt-[3px] mx-1" />
                                    {errors.firstName.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm text-gray-500">Company Name</label>
                            <input
                                type="text"
                                className="block w-full px-5 text-sm py-2.5 mt-2 text-gray-700 bg-gray-100 rounded dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-500">
                                Street Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                {...register("address")}
                                className="block w-full px-5 text-sm py-2.5 mt-2 text-gray-700 bg-gray-100 rounded dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                            {errors.address && (
                                <p className="text-red-800 bg-red-200 text-sm mt-1 flex">
                                    <RiErrorWarningLine className="mt-[3px] mx-1" />
                                    {errors.address.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm text-gray-500">Apartment, floor, etc. (optional)</label>
                            <input
                                type="text"
                                className="block w-full px-5 text-sm py-2.5 mt-2 text-gray-700 bg-gray-100 rounded dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-500">
                                Town/City <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                {...register("city")}
                                className="block w-full px-5 text-sm py-2.5 mt-2 text-gray-700 bg-gray-100 rounded dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                            {errors.city && (
                                <p className="text-red-800 bg-red-200 text-sm mt-1 flex">
                                    <RiErrorWarningLine className="mt-[3px] mx-1" />
                                    {errors.city.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm text-gray-500">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                {...register("phone")}
                                className="block w-full px-5 text-sm py-2.5 mt-2 text-gray-700 bg-gray-100 rounded dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                            {errors.phone && (
                                <p className="text-red-800 bg-red-200 text-sm mt-1 flex">
                                    <RiErrorWarningLine className="mt-[3px] mx-1" />
                                    {errors.phone.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm text-gray-500">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                {...register("email")}
                                className="block w-full px-5 text-sm py-2.5 mt-2 text-gray-700 bg-gray-100 rounded dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                            {errors.email && (
                                <p className="text-red-800 bg-red-200 text-sm mt-1 flex">
                                    <RiErrorWarningLine className="mt-[3px] mx-1" />
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" className="w-5 h-5 accent-red-500" />
                            <label className="text-gray-700">
                                Save this information for faster check-out next time
                            </label>
                        </div>
                    </form>
                </div>
                <div className="md:col-span-2">
                    <div className="space-y-4 pt-5">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-3">
                                <img src={LCD} alt="LCD Monitor" className="w-12 h-12" />
                                <span className="font-medium text-lg ">LCD Monitor</span>
                            </div>
                            <span className="font-bold">$1100</span>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-3">
                                <img src={gamepad} alt="H1 Gamepad" className="w-12 h-12" />
                                <span className="font-medium text-lg ">H1 Gamepad</span>
                            </div>
                            <span className="font-bold">$650</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-400 pb-2">
                            <span>Subtotal:</span>
                            <span>$1750</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-400 pb-2">
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>

                        <div className="flex justify-between text-lg">
                            <span>Total:</span>
                            <span>$1750</span>
                        </div>
                    </div>
                    <div className="mt-4 space-y-3">
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="payment"
                                className="w-5 h-5 accent-black"
                            />
                            <div className="flex justify-between items-center w-full">
                                <span>Bank</span>
                                <div className="flex items-center space-x-3 my-4">
                                    <img src={bkash} alt="bKash" className="w-9 lg:w-10" />
                                    <img src={visa} alt="Visa" className="w-9 lg:w-10" />
                                    <img src={mastercard} alt="MasterCard" className="w-9 lg:w-10" />
                                    <img src={nagad} alt="Nagad" className="w-9 lg:w-10" />
                                </div>
                            </div>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="payment"
                                className="w-5 h-5 accent-black"
                            />
                            <span>Cash on delivery</span>
                        </label>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-3 mt-5 md:space-y-0 md:space-x-2">
                        <input
                            type="text"
                            placeholder="Coupon Code"
                            className="flex-1 w-2/3 text-black border border-gray-600 p-1 lg:p-3 rounded-sm"
                        />
                        <button className="w-1/3 bg-red-500 text-white p-1 lg:px-4 lg:py-3 rounded-sm">
                            Apply Coupon
                        </button>
                        
                    </div>
                    <button
                    type="button"
                    onClick={handleSubmit(onSubmit)}
                    className="w-1/3 mt-4 bg-red-500 text-white p-2 lg:px-6 lg:py-3 rounded-sm">
                    Place Order
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Checkout;