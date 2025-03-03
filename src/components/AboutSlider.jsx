/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import boy1 from "../assets/images/boy1.png"
import boy2 from "../assets/images/boy2.png"
import girl1 from "../assets/images/girl1.png"
import { 
    RiInstagramLine, RiTwitterLine, RiLinkedinLine 
} from "react-icons/ri";

export default function AboutSlider() {
const slides = [
    {
    title: "Tom Cruise",
    description: "Founder & Chairman",
    image: boy1,
    },
    {
    title: "Emma Watson",
    description: "Managing Director",
    image: girl1,
    },
    {
    title: "Will Smith",
    description: "Product Designer",
    image: boy2,
    },
    {
    title: "Sandra Mohsen",
    description: "Team Lead",
    image: girl1,
    },
    {
    title: "John William",
    description: "UX/UI Developer",
    image: boy1,
    },
];

return (
    <>
    <div className="w-full max-w-5xl mx-auto pb-8">
    <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        }}
        pagination={{
        clickable: true,
        dynamicBullets: true,
        }}
        autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="w-full"
    >
        {slides.map((slide, index) => (
        <SwiperSlide key={index} className="flex justify-center">
            <div className="max-w-sm bg-white rounded-lg mt-9">
            <a href="#">
                <img className="rounded-t-lg" src={slide.image} alt={slide.title} />
            </a>
            <div className="p-5">
                <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {slide.title}
                </h5>
                </a>
                <p className="mb-3 font-normal text-sm text-gray-700">{slide.description}</p>
                <div className="flex justify-center md:justify-start space-x-8 my-5 text-black">
                    <a href="#" aria-label="Twitter" className="hover:text-gray-400">
                        <RiTwitterLine className="text-2xl" />
                    </a>
                    <a href="#" aria-label="Instagram" className="hover:text-gray-400">
                        <RiInstagramLine className="text-2xl" />
                    </a>
                    <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">
                        <RiLinkedinLine className="text-2xl" />
                    </a>
                </div>
            </div>
            </div>
        </SwiperSlide>
        ))}
    </Swiper>
    </div>
    <div className="swiper-pagination"></div>
    <style>
        {`
        .swiper-pagination-bullet-active {
            background-color: #dc2626 !important;
            opacity: 1;
        }
        `}
    </style>
    </>
);
}
