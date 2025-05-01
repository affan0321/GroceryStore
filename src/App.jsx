import React from "react";
import { Routes, Route } from "react-router-dom";
// import Signup from "./components/Signup";
import Signup from "./Components/Signup";
// import Login from "./components/Login";
import Login from "./Components/Login";
// import Admin from "./components/Admin"; // Replace with your Admin component
import Admin from "./Components/Admin";
import HomePage from "./Components/HomePage";
import Fruits from "./Components/Fruits";


export default function App() {
    return (
        <div>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/fruits" element={<Fruits />} />
        </Routes>
        </div>
    );
}
