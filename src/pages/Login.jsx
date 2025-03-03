import { useForm } from "react-hook-form"; 
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import sign from "../assets/images/signup.png";
import { RiErrorWarningLine } from "react-icons/ri";

const schema = yup.object().shape({
email: yup.string().email("Invalid email").required("Email is required"),
password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const Login = () => {
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
    console.log("Form submitted:", data);
    toast.success("Login Successful!");
    navigate("/");
};

return (
    <div className="flex flex-col md:flex-row h-screen">
    <div className="hidden md:flex md:w-1/2 justify-center items-center">
        <img src={sign} alt="Sign Up" className="w-full h-[85%] object-cover" />
    </div>
    <div className="w-full md:w-1/2 flex justify-center items-center bg-white px-6 py-8 md:p-0">
        <div className="w-full max-w-sm md:max-w-md p-6 md:p-8">
        <h1 className="text-3xl font-medium mb-4">Log in to Exclusive</h1>
        <p className="text-gray-500 mb-6">Enter your details below</p>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="relative z-0 w-full mb-5 group">
            <input
                type="email"
                {...register("email")}
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer"
                placeholder=" "
            />
            <label
                htmlFor="floating_email"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                Email or Phone number
            </label>
            {errors.email && (
                <p className="text-red-800 bg-red-200 text-sm mt-1 flex">
                <RiErrorWarningLine className="mt-[3px] mx-1" />
                {errors.email.message}
                </p>
            )}
            </div>
            <div className="relative z-0 w-full mb-5 group">
            <input
                type="password"
                {...register("password")}
                id="floating_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-red-600 peer"
                placeholder=" "
            />
            <label
                htmlFor="floating_password"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 peer-focus:text-red-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                Password
            </label>
            {errors.password && (
                <p className="text-red-800 bg-red-200 text-sm mt-1 flex">
                <RiErrorWarningLine className="mt-[3px] mx-1" />
                {errors.password.message}
                </p>
            )}
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mt-9 space-y-4 md:space-y-0">
            <button type="submit" className="w-full md:w-1/2 bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition">
                Log In
            </button>
            <a href="#" className="text-red-500 text-sm lg:text-base md:ml-4">Forgot Password?</a>
            </div>
        </form>
        </div>
    </div>
    </div>
);
};

export default Login;
