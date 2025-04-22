import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="container">
            <h1>Grocery Store</h1>
            <nav>
                <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link>
            </nav>
        </div>
    );
}




