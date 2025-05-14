// import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
// // import Signup from "./components/Signup";
// import Signup from "./Components/Signup";
// // import Login from "./components/Login";
// import Login from "./Components/Login";
// // import Admin from "./components/Admin"; // Replace with your Admin component
// import Admin from "./Components/Admin";
// import HomePage from "./Components/HomePage";
// import FreshProduce from "./Components/Fresh&Produce";
// import { useState, useEffect } from "react";
// import NavbarCart from "./Components/Cart";
// import { fetchProducts } from "./lib/Api";
// import Dairy from "./Components/Dairy";
// import Pantry from "./Components/Pantry";
// import Bakery from "./Components/Bakery";



// export default function App() {

//     // const [fruits, setFruits] = useState([]);
//     // const [vegetables, setVegetables] = useState([]);

//     // useEffect(() => {
//     //     const loadProducts = async () => {
//     //         const fruitData = await fetchProducts("Fruits");
//     //         const vegetableData = await fetchProducts("Vegetables");
//     //         setFruits(fruitData);
//     //         setVegetables(vegetableData);
//     //     };

//     //     loadProducts();
//     // }, []);

//     const [cartItems, setCartItems] = useState([]);

//     // const addToCart = (product) => {
//     //     setCartItems([...cartItems, product]);
//     // };

//     const addToCart = (product) => {
//         setCartItems((prevCart) => [...prevCart, product]);  // Ensure cart updates correctly
//     };
    


//     return (
//         <div>
            
//             <div className='div3'>
//                 <div className='div1'>
//                     <div>
//                         <h1>Green Store</h1>
//                     </div>
//                     <div>
//                         <ul className='ul'>
//                             <li><Link to="/">Home</Link></li>
//                             <li><Link to="/freshProducts">Fresh & Produce</Link></li>
//                             <li><Link to="/Dairy">Dairy & Frozen</Link></li>
//                             <li><Link to="/Pantry">Pantry Essentials</Link></li>
//                             <li><Link to="/Bakers">Bakery & Snacks</Link></li>
//                         </ul>
//                     </div>
//                     <div className='div2'>
//                         <Link className='link' to="/signup">Signup</Link>
//                         <Link className='link' to="/login">Login</Link>
//                         {/* <NavbarCart /> */}
//                         <NavbarCart cartItems={cartItems} />
//                     </div>
//                 </div>
//             </div>



//             <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/signup" element={<Signup />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/admin" element={<Admin />} />
//                 {/* <Route path="/freshProduce" element={<FreshProduce />} /> */}
//                 {/* <Route path="/freshProducts" element={<FreshProduce />} /> */}
//                 <Route path="/freshProducts" element={<FreshProduce addToCart={addToCart} />} />
//                 <Route path="/Dairy" element={<Dairy />} />
//                 <Route path="/Pantry" element={<Pantry />} />
//                 <Route path="/Bakers" element={<Bakery />} />

//             </Routes>
//         </div>
//     );
// }


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

export default function App() {
    const [cartItems, setCartItems] = useState([]);

    // ✅ Fix: Ensure cart updates correctly
    // const addToCart = (product) => {
    //     setCartItems((prevCart) => [...prevCart, product]);
    // };

    const addToCart = (product) => {
        setCartItems((prevCart) => {
            // Check if the item is already in the cart
            const existingItem = prevCart.find((item) => item.ProductId === product.ProductId);
    
            if (existingItem) {
                // If item exists, increase quantity
                return prevCart.map((item) =>
                    item.ProductId === product.ProductId ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // If item is new, add it with quantity = 1
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };
    

    return (
        <div>
             {/* <ToastContainer autoClose={3000} position="top-right" /> */}
            <div className="div3">
                <div className="div1">
                    <h1>Green Store</h1>
                    <ul className="ul">
                        <li><Link className="l1" style={{textDecoration:"none"}} to="/">Home</Link></li>
                        <li><Link className="l1" style={{textDecoration:"none"}} to="/freshProducts">Fresh & Produce</Link></li>
                        <li><Link className="l1" style={{textDecoration:"none"}} to="/Dairy">Dairy & Frozen</Link></li>
                        <li><Link className="l1" style={{textDecoration:"none"}} to="/Pantry">Pantry Essentials</Link></li>
                        <li><Link className="l1" style={{textDecoration:"none"}} to="/Bakery">Bakery & Snacks</Link></li>
                    </ul>
                    <div className="div2">
                        <Link className="link" to="/signup">Signup</Link>
                        <Link className="link" to="/login">Login</Link>
                        {/* <NavbarCart cartItems={cartItems} /> ✅ Fix: Pass cartItems */}
                        <NavbarCart cartItems={cartItems} setCartItems={setCartItems} />
                    </div>
                </div>
            </div>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/freshProducts" element={<FreshProduce addToCart={addToCart} />} /> {/* ✅ Fix: Pass addToCart */}
                <Route path="/Dairy" element={<Dairy addToCart={addToCart}/>} />
                <Route path="/Pantry" element={<Pantry addToCart={addToCart}/>} />
                <Route path="/Bakery" element={<Bakery addToCart={addToCart}/>} />
            </Routes>
        </div>
    );
}
