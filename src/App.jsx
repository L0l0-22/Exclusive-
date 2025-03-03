import { Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

function App() {
  return (
    <>
    <CartProvider>
    <WishlistProvider>
    <Toaster position="top-center" reverseOrder={false} />
      <TopNavbar/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/productDetails" element={<ProductDetails/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
      </WishlistProvider>
      </CartProvider>
    </>
  );
}

export default App;
