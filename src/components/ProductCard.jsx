/* eslint-disable react/prop-types */
import { FaRegHeart, FaRegEye } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";
import { useWishlist } from "../context/WishlistContext";

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const { addToWishlist } = useWishlist();
    const navigate = useNavigate();
    return (
        <div className="bg-white overflow-hidden">
            <div className="relative rounded-lg bg-gray-100 group">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                {product.sale && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        -{product.sale}%
                    </span>
                )}
                {product.isNew && (
                    <span className="absolute top-2 left-2 bg-green-400 text-white text-xs px-2 py-1 rounded">
                        New
                    </span>
                )}
                <button className="absolute top-2 right-2 text-black bg-white hover:bg-red-200 p-2 rounded-full shadow-md transition"
                onClick={() =>{
                    addToWishlist(product); 
                    toast.success("Product added to Wishlist");}}>
                    <FaRegHeart />
                </button>
                <button className="cursor-pointer absolute top-14 right-2 text-black bg-white p-2 rounded-full shadow-md hover:bg-blue-200 transition"
                onClick={() => {navigate("/productDetails") , window.scrollTo(0, 0);}}
                >
                    <FaRegEye />
                </button>
                <button className="absolute bottom-0 rounded-b-lg left-1/2 transform -translate-x-1/2 bg-black text-white py-2 px-4 w-full font-semibold transition-opacity opacity-0 group-hover:opacity-100"
                onClick={() =>{
                    addToCart(product); 
                    toast.success("Product added to cart");}}>
                    Add to Cart
                </button>
            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                <div className="py-2 flex space-x-3">
                    <p className="text-lg font-medium text-red-500">${product.price.toFixed(2)}</p>
                    <p className="text-lg font-medium text-gray-500 line-through">${product.oldPrice.toFixed(2)}</p>
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
                    <p className="text-gray-500 mx-3 font-medium">({product.rate})</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;