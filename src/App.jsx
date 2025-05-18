import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Admin from "./Components/Admin";
import HomePage from "./Components/HomePage";
import FreshProduce from "./Components/Fresh&Produce";
import NavbarCart from "./Components/Cart";
import Dairy from "./Components/Dairy";
import Pantry from "./Components/Pantry";
import Bakery from "./Components/Bakery";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer";

export default function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevCart) => {
            const existingItem = prevCart.find((item) => item.ProductId === product.ProductId);

            if (existingItem) {
                return prevCart.map((item) =>
                    item.ProductId === product.ProductId ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };


    return (
        <div>
            <div className="div3">
                <div className="div1">
                    <h1 style={{fontFamily:"cursive"}}>Green Store</h1>
                    <ul className="ul">
                        <li><Link className="l1" style={{ textDecoration: "none" }} to="/">Home</Link></li>
                        <li><Link className="l1" style={{ textDecoration: "none" }} to="/freshProducts">Fresh & Produce</Link></li>
                        <li><Link className="l1" style={{ textDecoration: "none" }} to="/Dairy">Dairy & Frozen</Link></li>
                        <li><Link className="l1" style={{ textDecoration: "none" }} to="/Pantry">Pantry Essentials</Link></li>
                        <li><Link className="l1" style={{ textDecoration: "none" }} to="/Bakery">Bakery & Snacks</Link></li>
                    </ul>
                    <div className="div2">
                        <Link className="link" to="/signup">Signup</Link>
                        <Link className="link" to="/login">Login</Link>
                        <NavbarCart cartItems={cartItems} setCartItems={setCartItems} />
                    </div>
                </div>
            </div>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/freshProducts" element={<FreshProduce addToCart={addToCart} />} /> 
                <Route path="/Dairy" element={<Dairy addToCart={addToCart} />} />
                <Route path="/Pantry" element={<Pantry addToCart={addToCart} />} />
                <Route path="/Bakery" element={<Bakery addToCart={addToCart} />} />
            </Routes>
            <Footer />
        </div>
    );
}
