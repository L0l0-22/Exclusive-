import { RiDeleteBinLine } from "react-icons/ri";
import { AiFillStar, AiOutlineStar, AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext"; 
import toast from "react-hot-toast";
import SectionHeader from "../components/SectionHeader";
import LCD from "../assets/images/LCD-Photoroom.png"
import laptop from "../assets/images/laptop-Photoroom.png"
import play from "../assets/images/playHome-Photoroom.png";
import keyboard from "../assets/images/keyboard-Photoroom.png"

function Wishlist() {
    const { addToCart } = useCart();
    const { wishlist, removeFromWishlist } = useWishlist(); 
    const products = [
        {
            id: 11,
            name: "ASUS FHD Gaming Laptop",
            price: 370,
            oldPrice: 400,
            rating: 4,
            rate: 88,
            image: laptop,
            sale:20,
        },
        {
            id: 3,
            name: "IPS LCD Gaming Monitor",
            price: 370,
            oldPrice: 400,
            rating: 4,
            rate: 88,
            image: LCD,
        },
        {
            id: 1,
            name: "HAVIT HV-G92 Gamepad",
            price: 129.99,
            oldPrice: 159.99,
            rating: 4,
            rate: 88,
            image: play,
            isNew:true
        },
        {
            id: 2,
            name: "AK-900 Wired Keyboard",
            price: 960,
            oldPrice: 1160,
            rating: 4,
            rate: 88,
            image: keyboard,
        }
    ];
return (
<div className="mx-auto w-[90%]">
    <div className="my-10">
        <div className="flex justify-between text-center mb-5 mx-auto w-[94%]">
            <h3 className="md:text-xl pt-3 md:pt-5">Wishlist ({wishlist.length})</h3>
            <button className="border border-gray-500 rounded-md p-2 md:p-4">
                Move All To Bag
            </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {wishlist.length > 0 ? (
                wishlist.map((product) => (
            <div key={product.id} className="bg-white overflow-hidden">
            <div className="relative rounded-lg bg-gray-100 group">
                <img src={product.image}alt={product.name}className="w-full h-64 object-cover"/>
                {product.sale && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        -{product.sale}%
                    </span>
                )}
                <button
                    className="absolute top-2 right-2 text-black hover:text-white bg-white hover:bg-black p-2 rounded-full shadow-md transition"
                    onClick={() => removeFromWishlist(product.id)}
                >
                    <RiDeleteBinLine />
                </button>
                <button
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black text-white py-3 px-5 w-full font-semibold flex items-center justify-center gap-2 
                    transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-gray-800"
                    onClick={() => {
                        addToCart(product);
                        toast.success("Product added to cart");
                    }}
                >
                    <AiOutlineShoppingCart className="text-lg" />
                    Add to Cart
                </button>
            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    {product.name}
                </h2>
                <div className="py-2 flex space-x-3">
                    <p className="text-lg font-medium text-red-500">
                        ${product.price.toFixed(2)}
                    </p>
                    <p className="text-lg font-medium text-gray-500 line-through">
                        ${product.oldPrice.toFixed(2)}
                    </p>
                </div>
                <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, index) => (
                        <span key={index}>
                            {index < product.rating ? (
                                <AiFillStar className="text-yellow-400 text-xl" />
                            ) : (
                                <AiOutlineStar className="text-gray-300 text-xl" />
                            )}
                        </span>
                    ))}
                    <p className="text-gray-500 mx-3 font-medium">
                        ({product.rate})
                    </p>
                </div>
            </div>
        </div>
                ))
            ) : (
                <p className="text-center text-gray-500">Your wishlist is empty.</p>
            )}
        </div>
    </div>
    <div>
        <div className="flex items-center justify-between w-[94%] mx-auto my-5">
            <SectionHeader title="JUST FOR YOU" />
            <button className="w-1/2 md:w-1/6 border border-gray-500 p-2 md:p-3 rounded-md mt-4 hover:bg-red-600 transition">
                SEE All 
            </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-10">
        {products.map((product) => (
        <div key={product.id} className="bg-white overflow-hidden">
            <div className="relative rounded-lg bg-gray-100 group">
                <img src={product.image}alt={product.name}className="w-full h-64 object-cover"/>
                {product.sale && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        -{product.sale}%
                    </span>
                )}
                {product.isNew && (
                    <>
                        <span className="absolute top-2 left-2 bg-green-400 text-white text-xs px-2 py-1 rounded">
                            New
                        </span>
                        {console.log(`Product: ${product.name}, isNew: ${product.isNew}`)}
                    </>
                )}
                <button className="absolute top-2 right-2 text-black hover:text-white bg-white hover:bg-black p-2 rounded-full shadow-md transition">
                    <RiDeleteBinLine />
                </button>
                <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black text-white py-3 px-5 w-full font-semibold flex items-center justify-center gap-2 
                    transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-gray-800">
                    <AiOutlineShoppingCart className="text-lg" />
                    Add to Cart
                </button>
            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                    {product.name}
                </h2>
                <div className="py-2 flex space-x-3">
                    <p className="text-lg font-medium text-red-500">
                        ${product.price.toFixed(2)}
                    </p>
                    <p className="text-lg font-medium text-gray-500 line-through">
                        ${product.oldPrice.toFixed(2)}
                    </p>
                </div>
                <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, index) => (
                        <span key={index}>
                            {index < product.rating ? (
                                <AiFillStar className="text-yellow-400 text-xl" />
                            ) : (
                                <AiOutlineStar className="text-gray-300 text-xl" />
                            )}
                        </span>
                    ))}
                    <p className="text-gray-500 mx-3 font-medium">
                        ({product.rate})
                    </p>
                </div>
            </div>
        </div>
            ))
            }
        </div>
    </div>
</div>
    );
}

export default Wishlist;
