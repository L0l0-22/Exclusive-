// pages/Home.jsx
import FlashSale from "../components/CountDown";
import Slider from "../components/Slider";
import { IoIosArrowForward, IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import play from "../assets/images/playHome-Photoroom.png";
import { TbTruckDelivery , TbHeadphones } from "react-icons/tb";
import { CiMobile4, CiCamera, CiHeadphones } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoWatchOutline } from "react-icons/io5";
import { LuGamepad } from "react-icons/lu";
import speaker from "../assets/images/sound.png";
import playstation from "../assets/images/playstation5.png";
import collection from "../assets/images/womanCollection.jpeg";
import speakers from "../assets/images/speakers.png";
import perfume from "../assets/images/perfume.png";
import SectionHeader from "../components/SectionHeader";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import ServiceCard from "../components/ServicesCard";
import { MdDoneOutline } from "react-icons/md";
import keyboard from "../assets/images/keyboard-Photoroom.png"
import LCD from "../assets/images/LCD-Photoroom.png"
import chair from "../assets/images/chair-Photoroom.png"
import coat from "../assets/images/book-Photoroom.png"
import bag from "../assets/images/bag-Photoroom.png"
import soundwave from "../assets/images/sound-Photoroom.png"
import book from "../assets/images/book-Photoroom.png"
import animal from "../assets/images/animal-Photoroom.png"
import camera from "../assets/images/camera-Photoroom.png"
import laptop from "../assets/images/laptop-Photoroom.png"
import cream from "../assets/images/cream-Photoroom.png"
import car from "../assets/images/car-Photoroom.png"
import football from "../assets/images/footbal shoes-Photoroom.png"
import shooter from "../assets/images/shooterGamepad-Photoroom.png"
import stain from "../assets/images/satin jacket-Photoroom.png"
import ScrollToTop from "../components/scrollToTop";

const services2 = [
    { title: "FREE AND FAST DELIVERY", icon: <TbTruckDelivery />, desc: "Free delivery for all orders over $140" },
    { title: "24/7 CUSTOMER SERVICE", icon: <TbHeadphones />, desc: "Friendly 24/7 customer support" },
    { title: "MONEY BACK GUARANTEE", icon:<MdDoneOutline /> , desc: "We return money within 30 days" },
];
const products = [
    {
        id: 1,
        name: "HAVIT HV-G92 Gamepad",
        price: 129.99,
        oldPrice: 159.99,
        rating: 4,
        rate: 88,
        image: play,
        sale: 40,
    },
    {
        id: 2,
        name: "AK-900 Wired Keyboard",
        price: 960,
        oldPrice: 1160,
        rating: 4,
        rate: 88,
        image: keyboard,
        sale: 35,
    },
    {
        id: 3,
        name: "IPS LCD Gaming Monitor",
        price: 370,
        oldPrice: 400,
        rating: 4,
        rate: 88,
        image: LCD,
        sale: 30,
    },
    {
        id: 4,
        name: "S-Series Comfort Chair",
        price: 375,
        oldPrice: 400,
        rating: 4,
        rate: 88,
        image: chair,
        sale: 25,
    },
];
const products2 = [
    {
        id: 5,
        name: "The north coat",
        price: 260,
        oldPrice: 360,
        rating: 4,
        rate: 88,
        image: coat,
    },
    {
        id: 6,
        name: "Gucci duffle bag",
        price: 960,
        oldPrice: 1160,
        rating: 4,
        rate: 88,
        image: bag,
    },
    {
        id: 7,
        name: "RGB liquid CPU Cooler",
        price: 370,
        oldPrice: 400,
        rating: 4,
        rate: 88,
        image: soundwave,
    },
    {
        id: 8,
        name: "Small BookSelf",
        price: 375,
        oldPrice: 400,
        rating: 4,
        rate: 88,
        image: book,
    },
];
const products3 = [
    {
        id: 9,
        name: "Breed Dry Drog Food",
        price: 260,
        oldPrice: 360,
        rating: 4,
        rate: 88,
        image: animal,
    },
    {
        id: 10,
        name: "CANON EOS DSLR Camera",
        price: 960,
        oldPrice: 1160,
        rating: 4,
        rate: 88,
        image: camera,
    },
    {
        id: 11,
        name: "ASUS FHD Gaming Laptop",
        price: 370,
        oldPrice: 400,
        rating: 4,
        rate: 88,
        image: laptop,
    },
    {
        id: 12,
        name: "Curology Product Set",
        price: 375,
        oldPrice: 400,
        rating: 4,
        rate: 88,
        image: cream,
    },
    {
        id: 13,
        name: "Kids Electric Car",
        price: 260,
        oldPrice: 360,
        rating: 4,
        rate: 88,
        image: car,
        isNew:true
    },
    {
        id: 14,
        name: "Jr. Zoom Soccer Cleats",
        price: 260,
        oldPrice: 360,
        rating: 4,
        rate: 88,
        image: football,
    },
    {
        id: 15,
        name: "GP11 Shooter USB Gamepad",
        price: 260,
        oldPrice: 360,
        rating: 4,
        rate: 88,
        image: shooter,
        isNew:true
    },
    {
        id: 16,
        name: "Quilted Satin Jacket",
        price: 260,
        oldPrice: 360,
        rating: 4,
        rate: 88,
        image: stain,
    },
];
const categories = [
    { icon: <CiMobile4 />, title: "Phones" },
    { icon: <HiOutlineComputerDesktop />, title: "Computers" },
    { icon: <IoWatchOutline />, title: "Smart Watch" },
    { icon: <CiCamera />, title: "Camera" },
    { icon: <CiHeadphones />, title: "Head Phones" },
    { icon: <LuGamepad />, title: "Gaming" },
];
function Home() {
    return (
    <div className="w-[90%] mx-auto px-4">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3 lg:w-1/4 md:text-left mb-4 md:mb-0">
        <ul className="space-y-3">
        <li className="flex items-center justify-between text-gray-700 hover:text-red-600 cursor-pointer relative">
        Woman’s Fashion
        <IoIosArrowForward className="absolute text-black right-0 group-hover:opacity-100 transition-opacity" />
        </li>
        <li className="flex items-center justify-between text-gray-700 hover:text-red-600 cursor-pointer relative">
        Men’s Fashion
            <IoIosArrowForward className="absolute text-black right-0 group-hover:opacity-100 transition-opacity" />
        </li>
        <li className="text-gray-700 hover:text-red-600 cursor-pointer">
        Electronics
        </li>
        <li className="text-gray-700 hover:text-red-600 cursor-pointer">
        Home & Lifestyle
        </li>
        <li className="text-gray-700 hover:text-red-600 cursor-pointer">
        Medicine
        </li>
        <li className="text-gray-700 hover:text-red-600 cursor-pointer">
        Sports & Outdoor
        </li>
        <li className="text-gray-700 hover:text-red-600 cursor-pointer">
        Baby’s & Toys
        </li>
        <li className="text-gray-700 hover:text-red-600 cursor-pointer">
        Groceries & Pets
        </li>
        <li className="text-gray-700 hover:text-red-600 cursor-pointer">
        Health & Beauty
        </li>
        </ul>
        </div>
        <div className="hidden md:block w-[1px] bg-gray-300 h-80 mx-6 top-0"></div>
        <div className="w-full md:w-2/3 lg:w-3/4">
            <Slider />
        </div>
        </div>
        {/* Section 2 */}
        <div className="mt-16 mb-10">
            <SectionHeader title="Today’s" />
            <FlashSale />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div className="flex justify-center">
                <button className="bg-[#db4444] text-white w-1/2 md:w-1/5 py-3 rounded-md mt-4 hover:bg-red-600 transition">
                    View All Products
                </button>
            </div>
            <hr className="my-10" />
        </div>
        {/* Section 3 */}
        <div>
        <SectionHeader title="Categories" />
        <div className="flex items-center justify-between w-[95%] mx-auto my-5">
            <h2 className="text-3xl font-medium text-black">Browse By Category</h2>
            <div className="flex space-x-2">
                <button className="p-2 bg-gray-100 rounded-full">
                    <IoMdArrowBack size={20} />
                </button>
                <button className="p-2 bg-gray-100 rounded-full">
                    <IoMdArrowForward size={20} />
                </button>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 w-[95%] mx-auto">
            {categories.map((category, index) => (
                <CategoryCard key={index} icon={category.icon} title={category.title} />
            ))}
        </div>
        <hr className="my-10" />
        </div>
        {/* Section 4 */}
        <div>
            <SectionHeader title="This Month" />
            <div className="flex items-center justify-between w-[95%] mx-auto my-5">
                <h2 className="text-3xl font-medium text-black">Best Selling Products</h2>
                <button className="bg-[#db4444] text-white p-3 rounded-md mt-4 hover:bg-red-600 transition">
                    View All Products
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {products2.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <hr className="my-10" />
        </div>
        {/* Section 5 */}
        <div>
            <img src={speaker} className="w-[95%] mx-auto" alt="Speaker" />
            <hr className="my-10" />
        </div>
        {/* Section 6 */}
        <div>
            <SectionHeader title="Our Products" />
            <div className="flex items-center justify-between w-[95%] mx-auto my-5">
                <h2 className="text-3xl font-medium text-black">Explore Our Products</h2>
                <div className="flex space-x-2">
                    <button className="p-2 bg-gray-100 rounded-full">
                        <IoMdArrowBack size={20} />
                    </button>
                    <button className="p-2 bg-gray-100 rounded-full">
                        <IoMdArrowForward size={20} />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {products3.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div className="flex justify-center">
                <button className="bg-[#db4444] text-white w-1/2 md:w-1/5 py-3 rounded-md mt-4 hover:bg-red-600 transition">
                    View All Products
                </button>
            </div>
            <hr className="my-10" />
        </div>
        {/* Section 7 */}
        <div>
            <SectionHeader title="Featured" />
            <div className="flex items-center justify-between w-[95%] mx-auto my-5">
                <h2 className="text-3xl font-medium text-black">New Arrivals</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5 w-[95%] mx-auto">
                <div className="h-full flex">
                    <img className="w-full h-full object-cover" src={playstation} alt="PlayStation 5" />
                </div>
                <div className="grid grid-rows-2 gap-4 h-full">
                    <img className="w-full h-full object-cover" src={collection} alt="Women's Collection" />
                    <div className="grid grid-cols-2 gap-4 h-full">
                        <img className="w-full h-full object-cover" src={speakers} alt="Speakers" />
                        <img className="w-full h-full object-cover" src={perfume} alt="Perfume" />
                    </div>
                </div>
            </div>
        </div>
        {/* Section 8 */}
        <div id="services2" className="section relative pt-20 pb-8 mb-10 md:pt-16 md:pb-0 bg-white">
            <div className="container xl:max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-center">
                    {services2.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </div>
        <ScrollToTop/>
    </div>
    );
}

export default Home;