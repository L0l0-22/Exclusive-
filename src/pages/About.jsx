/* eslint-disable no-unused-vars */
import React from 'react'
import about from "../assets/images/about.png"
import { BiStore, BiDollarCircle,BiShoppingBag } from "react-icons/bi";
import { TbMoneybag } from "react-icons/tb";
import AboutSlider from '../components/AboutSlider';
import ServiceCard from '../components/ServicesCard';
import { TbTruckDelivery , TbHeadphones } from "react-icons/tb";
import { MdDoneOutline } from "react-icons/md";


export default function About() {
    const services = [
        { title: "10.5K", icon: <BiStore />, desc: "Sallers active our site" },
        { title: "33K", icon: <BiDollarCircle />, desc: "Mopnthly Produduct Sale" },
        { title: "45.5K", icon: <BiShoppingBag />, desc: "Customer active in our site" },
        { title: "22K", icon: <TbMoneybag />, desc: "Anual gross sale in our site" },
    ];
    const services2 = [
        { title: "FREE AND FAST DELIVERY", icon: <TbTruckDelivery />, desc: "Free delivery for all orders over $140" },
        { title: "24/7 CUSTOMER SERVICE", icon: <TbHeadphones />, desc: "Friendly 24/7 customer support" },
        { title: "MONEY BACK GUARANTEE", icon:<MdDoneOutline /> , desc: "We return money within 30 days" },
    ];
return (
    <>
        {/* path */}
        <div className="container px-6 py-12 mx-auto">
        <p className="font-normal text-gray-500 lg:ml-40">
        Home / <span className="text-black">About</span>
        </p>
        </div>
        {/* section1 */}
        <div className='flex flex-col md:flex-row mb-5'>
        <div className="w-full md:w-1/2 flex justify-center items-center bg-white px-6 py-8 md:p-0">
            <div className="w-full max-w-sm md:max-w-md p-6 md:p-8">
            <h1 className="text-5xl tracking-widest font-medium mb-6">Our Story</h1>
            <p className="text-gray-800 text-sm mb-6">Launced in 2015, Exclusive is South Asia`s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.</p> 
            <p className="text-gray-800 text-sm mb-6">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.</p>
        </div>
        </div>
        <div className="hidden md:flex md:w-1/2 justify-center items-center">
            <img src={about} alt="Sign Up" className="w-full h-[85%] object-cover" />
        </div>
        </div>
        {/* section2 */}
        <div id="services" className="section relative pt-20 pb-8 mb-10 md:pt-16 md:pb-0 bg-white">
        <div className="container xl:max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {services.map((service, index) => (
        <div
            key={index}
            className="p-6  border border-gray-300 rounded flex flex-col items-center transition duration-300 hover:-translate-y-2 hover:bg-red-500 group">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-200 transition duration-300 group-hover:bg-red-300">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-black text-white transition duration-300 text-3xl group-hover:bg-white group-hover:text-black">
                {service.icon}
            </div>
            </div>
            <h3 className="text-2xl font-semibold text-black group-hover:text-white transition duration-300 my-3">
            {service.title}
            </h3>
            <p className="text-black text-[13.4px] group-hover:text-white transition duration-300">
            {service.desc}
            </p>
        </div>
        ))}
        </div>
    </div>
        </div>
        {/* section4 */}
        <AboutSlider/>
        {/* section3 */}
        <div id="services2" className="section relative pt-20 pb-8 mb-10 md:pt-16 md:pb-0 bg-white">
            <div className="container xl:max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-center">
                    {services2.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </div>
    </>
)
}
