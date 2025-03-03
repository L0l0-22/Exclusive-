import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import sign from "../assets/images/signup.png";
import { RiErrorWarningLine } from "react-icons/ri";
import google from "../assets/images/google.png";

const schema = yup.object().shape({
    name: yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const SignUp = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onTouched",
    });

    const onSubmit = (data) => {
        console.log("User signed up:", data);
        toast.success("Account Created Successfully!");
        navigate("/");
    };

    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="hidden md:flex md:w-1/2 justify-center items-center">
                <img src={sign} alt="Sign Up" className="w-full h-[85%] object-cover" />
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center bg-white p-6">
                <div className="w-full max-w-md">
                    <h1 className="text-2xl md:text-3xl font-medium mb-4">Create an Account</h1>
                    <p className="text-gray-500 mb-6">Enter your details below</p>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="text"
                                {...register("name")}
                                className="block py-2.5 px-3 w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Name"
                            />
                            {errors.name && (
                                <p className="text-red-800 bg-red-200 text-sm mt-1 flex">
                                    <RiErrorWarningLine className="mt-[3px] mx-1" />
                                    {errors.name.message}
                                </p>
                            )}
                        </div>
                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="email"
                                {...register("email")}
                                className="block py-2.5 px-3 w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Email"
                            />
                            {errors.email && (
                                <p className="text-red-800 bg-red-200 text-sm mt-1 flex">
                                    <RiErrorWarningLine className="mt-[3px] mx-1" />
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="password"
                                {...register("password")}
                                className="block py-2.5 px-3 w-full text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Password"
                            />
                            {errors.password && (
                                <p className="text-red-800 bg-red-200 text-sm mt-1 flex">
                                    <RiErrorWarningLine className="mt-[3px] mx-1" />
                                    {errors.password.message}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col gap-3 mt-6">
                            <button type="submit" className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition">
                                Create Account
                            </button>
                            <button
                                type="button"
                                className="w-full border border-gray-300 text-gray-700 py-3 rounded-md flex justify-center items-center hover:bg-gray-100 transition"
                                onClick={() => toast("Google Sign-Up is not implemented yet")}
                            >
                                <img src={google} className="w-5 h-5 mr-3" />
                                Sign up with Google
                            </button>
                        </div>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-500">
                        Already have an account?{" "}
                        <span onClick={() => navigate("/login")} className="text-black underline cursor-pointer">
                            Log In
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
