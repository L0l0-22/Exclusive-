import { XCircle } from "lucide-react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
    const { cart, updateQuantity, removeFromCart } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        toast.success("Checkout successful");
        navigate("/checkout");
    };

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="w-[90%] mx-auto">
            <div className="py-10 pl-10">
                <p className="font-normal text-gray-500">
                    Home / <span className="text-black">Cart</span>
                </p>
            </div>
            <div className="w-[90%] mx-auto mb-10">
                <div className="flex mb-5 shadow-sm py-5 my-5 px-6 -mx-8">
                    <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/3">Product Details</h3>
                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/3">Price</h3>
                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/3">Quantity</h3>
                    <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/3">Total</h3>
                </div>
                {cart.map((product, index) => (
                    <div key={index} className="flex items-center shadow-sm -mx-8 px-6 py-3 my-5 relative">
                        <div className="flex w-1/3">
                            <div className="relative w-20 group">
                                <img className="h-20" src={product.img} alt={product.name} />
                                <button
                                    className="absolute top-0 left-0 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                    onClick={() => removeFromCart(product.name)}
                                >
                                    <XCircle size={16} />
                                </button>
                            </div>
                            <div className="flex flex-col justify-center ml-4 flex-grow">
                                <span className="font-medium text-sm">{product.name}</span>
                            </div>
                        </div>
                        <span className="text-center w-1/3 font-medium text-sm">${product.price.toFixed(2)}</span>
                        <div className="flex justify-center w-1/3">
                            <button className="text-gray-600 px-2" onClick={() => updateQuantity(index, -1)}>-</button>
                            <input className="mx-2 border text-center w-8" type="text" value={product.quantity} readOnly />
                            <button className="text-gray-600 px-2" onClick={() => updateQuantity(index, 1)}>+</button>
                        </div>
                        <span className="text-center w-1/3 font-medium text-sm">${(product.price * product.quantity).toFixed(2)}</span>
                    </div>
                ))}
                <div className="flex flex-col md:flex-row justify-between items-center mt-9 space-y-4 md:space-y-0">
                    <button
                        type="submit"
                        className="md:w-1/4 w-1/2 lg:w-1/5 text-black hover:text-white border-2 border-gray-400 py-3 rounded-md hover:bg-red-600 transition"
                        onClick={() => navigate("/")}
                    >
                        Return To Shop
                    </button>
                    <button
                        type="submit"
                        className="md:w-1/4 w-1/2 lg:w-1/5 text-black hover:text-white border-2 border-gray-400 py-3 rounded-md hover:bg-red-600 transition"
                        onClick={() => toast.success("Cart updated successfully!")}
                    >
                        Update Cart
                    </button>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row my-10 md:ml-12">
                <div className="space-x-2 flex lg:w-[50%] h-1/3 mb-4 ml-0 lg:mb-0 md:ml-20">
                    <input type="text" placeholder="Coupon Code" className="w-1/2 text-black border border-gray-600 p-3 rounded-sm" />
                    <button
                        type="submit"
                        className="w-1/2 md:w-1/3 text-white p-3 rounded-sm bg-[#db4444] hover:bg-red-600 transition"
                        onClick={() => toast.success("Coupon applied successfully!")}
                    >
                        Apply Coupon
                    </button>
                </div>
                <div className="space-x-2 flex lg:w-[50%]">
                    <div className="border p-6 w-full md:w-3/4 border-gray-700 mx-auto rounded-sm">
                        <h2 className="text-xl font-semibold mb-4">Cart Total</h2>
                        <div className="flex justify-between border-b pb-3">
                            <span className="text-gray-600">Subtotal:</span>
                            <span className="font-medium">${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between border-b py-3">
                            <span className="text-gray-600">Shipping:</span>
                            <span className="font-medium">Free</span>
                        </div>
                        <div className="flex justify-between text-lg font-semibold py-3">
                            <span>Total:</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <button
                            className="bg-[#db4444] text-white w-full py-3 rounded-md mt-4 hover:bg-red-600 transition"
                            onClick={handleCheckout}
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;