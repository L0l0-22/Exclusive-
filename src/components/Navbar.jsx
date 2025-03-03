import { NavLink } from "react-router-dom";
import { FaSearch, FaRegHeart, FaBars, FaTimes } from "react-icons/fa";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import { FaUser, FaShoppingBag, FaStar, FaSignOutAlt } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { cart } = useCart();
    const { wishlist } = useWishlist();
    const totalItemsWish = wishlist.length;
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const userMenuRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setUserDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return (
        <>
            <nav className={`fixed ${isScrolled ? "top-0" : "top-10"} left-0 w-full bg-white shadow-md py-4 z-50 transition-all duration-300`}>
                <div className="container mx-auto flex items-center justify-between px-6 lg:px-[120px] relative">
                    <h1 className="text-2xl font-bold text-black">
                        Exclusive
                    </h1>
                    <ul
                        className={`absolute md:static top-full left-0 w-full md:w-auto bg-white shadow-md md:shadow-none md:flex space-x-6 text-black font-semibold p-4 md:p-0 transition-transform 
                        ${menuOpen ? "block" : "hidden md:flex"}`}
                    >
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `block py-2 md:py-0 ${isActive ? "underline underline-offset-4 decoration-gray-300" : "hover:underline hover:underline-offset-4 hover:decoration-gray-300"}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `block py-2 md:py-0 ${isActive ? "underline underline-offset-4 decoration-gray-300" : "hover:underline hover:underline-offset-4 hover:decoration-gray-300"}`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `block py-2 md:py-0 ${isActive ? "underline underline-offset-4 decoration-gray-300" : "hover:underline hover:underline-offset-4 hover:decoration-gray-300"}`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/signup"
                                className={({ isActive }) =>
                                    `block py-2 md:py-0 ${isActive ? "underline underline-offset-4 decoration-gray-300" : "hover:underline hover:underline-offset-4 hover:decoration-gray-300"}`
                                }
                            >
                                Sign Up
                            </NavLink>
                        </li>
                    </ul>
                    <div className="flex items-center space-x-4">
                        <div className="hidden lg:flex relative items-center">
                            <input
                                type="text"
                                placeholder="What are you looking for?"
                                className="bg-gray-50 rounded pr-4 py-2 focus:outline-none w-60"
                            />
                            <FaSearch className="absolute right-3 text-gray-500" />
                        </div>
                        <div className="flex items-center gap-x-6 text-gray-700">
                            <NavLink to="/wishlist" className="relative">
                            <FaRegHeart className="lg:text-2xl text-lg hover:text-red-500" />
                            {totalItemsWish > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center rounded-full">
                                    {totalItemsWish}
                                </span>
                            )}
                            </NavLink>
                            <NavLink to="/cart" className="relative">
                            <FiShoppingCart className="lg:text-2xl text-lg hover:text-blue-500" />
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center rounded-full">
                                    {totalItems}
                                </span>
                            )}
                        </NavLink>
                            <div className="relative" ref={userMenuRef}>
                            <button
                            className={`lg:text-2xl text-lg mt-[-3px] focus:outline-none transition-colors duration-300 p-1 lg:p-[6px] rounded-full ${
                                window.location.pathname === "/profile"
                                    ? "bg-red-500 text-white"
                                    : " hover:bg-red-500 hover:text-white"
                            }`}
                            onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                        >
                            <FiUser />
                        </button>
    {userDropdownOpen && (
        <ul
            className="absolute right-0 mt-2 w-48 text-white text-[13px] shadow-lg rounded-md"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        >
            <li>
                <NavLink
                    to="/profile"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-400"
                >
                    <FaUser />
                    Manage My Account
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/profile"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-400"
                >
                    <FaShoppingBag />
                    My Order
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/profile"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-400"
                >
                    <FaTimes />
                    My Cancellations
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/profile"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-400"
                >
                    <FaStar />
                    My Reviews
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/login"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-400"
                >
                    <FaSignOutAlt />
                    Logout
                </NavLink>
            </li>
        </ul>
    )}
</div>

                        </div>
                        <button
                            className="text-gray-700 text-2xl md:hidden"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </nav>
            <div className="mt-24"></div>
        </>
    );
};

export default Navbar;
