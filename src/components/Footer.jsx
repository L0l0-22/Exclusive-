import { 
    RiFacebookLine, RiInstagramLine, RiTwitterLine, RiLinkedinLine 
} from "react-icons/ri";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import qr from "../assets/images/qr code.png";
import play from "../assets/images/google play.png";
import app from "../assets/images/app.png";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10 font-poppins">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 text-start">
                        <div>
                        <h2 className="lg:text-xl font-semibold mb-4">Exclusive</h2>
                        <h3 className="lg:text-lg mb-4">Subscribe</h3>
                        <p className="mb-4">Get 10% off your first order</p>
                        <div className="relative w-full">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-black text-white border border-gray-600 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-400"
                            />
                            <HiOutlinePaperAirplane className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-2xl cursor-pointer rotate-90" />
                        </div>
                    </div>
                    <div>
                        <h2 className="lg:text-lg font-semibold mb-4">Support</h2>
                        <ul className="space-y-5 text-white text-base font-normal leading-6 tracking-normal">
                            {[
                                "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.",
                                "exclusive@gmail.com",
                                "88015-88888-9999"
                            ].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-gray-400">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="lg:text-lg font-semibold mb-4">Account</h3>
                        <ul className="space-y-2 text-white text-base font-normal leading-6 tracking-normal">
                            {["My Account", "Login / Register", "Cart", "Wishlist", "Shop"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-gray-400">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="lg:text-lg font-semibold mb-4">Quick Link</h3>
                        <ul className="space-y-5 text-white text-base font-normal leading-6 tracking-normal">
                            {["Privacy Policy", "Terms Of Use", "FAQ", "Contact"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-gray-400">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="lg:text-lg font-semibold mb-4">Download App</h3>
                        <p className="text-gray-400 text-sm mb-4">Save $3 with App New User Only</p>
                        <div className="flex gap-3 md:justify-center lg:justify-start">
                            <img src={qr} alt="QR Code" className="w-[90px] h-[100px] pt-2"/>
                            <div className="flex flex-col space-y-2">
                                <img src={play} alt="Google Play" className="w-32"/>
                                <img src={app} alt="App Store" className="w-32"/>
                            </div>
                        </div>
                        <div className="flex md:justify-center lg:justify-start space-x-8 my-5">
                            <a href="#" aria-label="Facebook" className="hover:text-gray-400">
                                <RiFacebookLine className="text-2xl" />
                            </a>
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
                <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
                    <p>© 2025 Exclusive. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
