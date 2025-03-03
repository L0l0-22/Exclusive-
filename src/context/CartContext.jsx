/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.name === product.name);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1, img: product.image }];
        });
    };
    const updateQuantity = (index, amount) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart];
            const newQuantity = updatedCart[index].quantity + amount;
            if (newQuantity < 1) {
                return updatedCart;
            }
            updatedCart[index] = { ...updatedCart[index], quantity: newQuantity };
            return updatedCart;
        });
    };
    const removeFromCart = (productName) => {
        setCart((prevCart) => prevCart.filter((item) => item.name !== productName));
    };
    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
export const useCart = () => useContext(CartContext);