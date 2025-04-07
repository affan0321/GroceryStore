// "use client";
// import Signup from "./Components/Signup";
// import Login from "./Components/Login";
// import Admin from "./Components/Admin";
// import HomePage from "./Components/HomePage";
// export default function Home() {
//     return (
//         <div className="container">
//             <h1>Grocery Store Products</h1>
//             <HomePage />
//             <Admin />
//             <Signup />
//             <Login />
//         </div>
//     );
// }


// "use client";
// import { useEffect, useState } from "react";
// import Signup from "./Components/Signup";
// import Login from "./Components/Login";
// import Admin from "./Components/Admin";
// import HomePage from "./Components/HomePage";

// export default function Home() {
//     const [userRole, setUserRole] = useState(null);

//     useEffect(() => {
//         // Get role from localStorage when component mounts
//         const role = localStorage.getItem("userRole");
//         setUserRole(role);

//         // Listen for changes in localStorage
//         const handleStorageChange = () => {
//             const updatedRole = localStorage.getItem("userRole");
//             setUserRole(updatedRole);
//         };

//         window.addEventListener("storage", handleStorageChange);

//         return () => {
//             window.removeEventListener("storage", handleStorageChange);
//         };
//     }, []);

//     return (
//         <div className="container">
//             <h1>Grocery Store Products</h1>
//             {/* Conditionally render Admin or HomePage based on user role */}
//             {userRole === "admin" ? <Admin /> : <HomePage />}
//             <Signup setUserRole={setUserRole} />
//             <Login setUserRole={setUserRole} />
//         </div>
//     );
// }


// "use client";
// import { useEffect, useState } from "react";
// import Signup from "./Components/Signup";
// import Login from "./Components/Login";
// import Admin from "./Components/Admin";
// import HomePage from "./Components/HomePage";

// export default function Home() {
//     const [userRole, setUserRole] = useState(null);

//     useEffect(() => {
//         const role = localStorage.getItem("userRole");
//         setUserRole(role);
//     }, []);

//     return (
//         <div className="container">
//             <h1>Grocery Store Products</h1>
//             {userRole === "admin" ? <Admin /> : <HomePage />}
//             <Signup />
//             <Login />
//         </div>
//     );
// }


// import Signup from "./Components/Signup";
// import Login from "./Components/Login";
// export default function Home() {
//     return (
//         <div className="container">
//             <h1>Grocery Store</h1>
//             <Signup />
//             <Login />
//         </div>
//     );
// }

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




// "use client";
// import { useEffect, useState } from "react";
// import Signup from "./Components/Signup";
// import Login from "./Components/Login";
// import Admin from "./Components/Admin";
// import HomePage from "./Components/HomePage";

// export default function Home() {
//     const [userRole, setUserRole] = useState(null);

//     useEffect(() => {
//         const role = localStorage.getItem("userRole");
//         setUserRole(role);
//     }, []);

//     return (
//         <div className="container">
//             <h1>Grocery Store Products</h1>

//             {/* Show Login & Signup if user is NOT logged in */}
//             {!userRole ? (
//                 <>
//                     <Signup />
//                     <Login />
//                 </>
//             ) : (
//                 // Show HomePage or Admin panel after login
//                 userRole === "admin" ? <Admin /> : <HomePage />
//             )}
//         </div>
//     );
// }


