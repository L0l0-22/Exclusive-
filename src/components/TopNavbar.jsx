function TopNavbar() {
    return (
        <div className="bg-black text-white py-2 flex justify-center md:justify-between items-center text-center px-4 
                        text-xs sm:text-xs md:text-sm lg:text-sm">
            <p className="text-center w-full">
                Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!{" "}
                <span className="font-bold cursor-pointer underline">Shop Now</span>
            </p>
            <div className="hidden md:block pr-24">
                <select className="bg-black text-white border-none outline-none cursor-pointer">
                    <option>English</option>
                    <option>العربية</option>
                </select>
            </div>
        </div>
    );
}

export default TopNavbar;
