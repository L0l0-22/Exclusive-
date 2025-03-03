/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import iphone from "../assets/images/iphone.png";
import sound from "../assets/images/sliderHome.png";
import womanCollection from "../assets/images/SliderHome2.png";

export default function Slider() {
    const slides = [
        { image: iphone },
        { image: sound },
        { image: womanCollection },
        { image: iphone },
        { image: sound },
    ];
    return (
        <div className="w-full max-w-5xl mx-auto relative my-5">
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
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
                        <a href="#">
                            <img className="w-full" src={slide.image} alt={`Slide ${index + 1}`} />
                        </a>
                    </SwiperSlide>
                ))}
                <div className="swiper-pagination"></div>
            </Swiper>
            <style>
                {`
                .swiper-pagination {
                    position: absolute;
                    bottom: 10px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    justify-content: center;
                    width: auto;
                }
                .swiper-pagination-bullet {
                    background-color: white !important; 
                    opacity: 0.7; /* Slight transparency */
                }
                .swiper-pagination-bullet-active {
                    background-color: #dc2626 !important; 
                    opacity: 1;
                }
                `}
            </style>
        </div>
    );
}
