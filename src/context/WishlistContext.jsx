/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem("wishlist");
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });
    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);
    const addToWishlist = (product) => {
        setWishlist((prevWishlist) => {
            const existingProduct = prevWishlist.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevWishlist;
            }
            return [...prevWishlist, { ...product, img: product.image }];
        });
    };
    const updateQuantity = (index, amount) => {
        setWishlist((prevWishlist) => {
            const updatedWishlist = [...prevWishlist];
            const newQuantity = updatedWishlist[index].quantity + amount;
            if (newQuantity < 1) {
                return updatedWishlist;
            }
            updatedWishlist[index] = { ...updatedWishlist[index], quantity: newQuantity };
            return updatedWishlist;
        });
    };
    const removeFromWishlist = (productId) => {
        setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== productId));
    };
    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist,updateQuantity, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};
export const useWishlist = () => useContext(WishlistContext);
