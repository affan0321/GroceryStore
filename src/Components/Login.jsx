// import { useState } from "react";

// const Login = () => {
//     const [loginEmail, setLoginEmail] = useState("");
//     const [loginPassword, setLoginPassword] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault(); 
    
//         try {
//             const response = await fetch("http://127.0.0.1:5001/login", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email: loginEmail, password: loginPassword }),
//                 credentials: "include", 
//             });
    
//             if (!response.ok) throw new Error("Login failed! Check credentials.");
    
//             const data = await response.json();
//             console.log("API Response:", data);
    
            
//             if (data?.role) {
//                 localStorage.setItem("userRole", data.role);
//                 alert(`Login successful! Role: ${data.role}`);
    

//                 window.location.reload();
//             } else {
//                 throw new Error("Role not found in response");
//             }
//         } catch (error) {
//             console.error("Login Error:", error);
//             alert(error.message);
//         }
//     };
    

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={loginEmail}
//                 onChange={(e) => setLoginEmail(e.target.value)}
//                 required
//             />
//             <input
//                 type="password"
//                 placeholder="Password"
//                 value={loginPassword}
//                 onChange={(e) => setLoginPassword(e.target.value)}
//                 required
//             />
//             <button type="submit">Login</button>
//         </form>
//     );
// };

// export default Login;

// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// const Login = () => {
//     const [loginEmail, setLoginEmail] = useState("");
//     const [loginPassword, setLoginPassword] = useState("");
//     const router = useRouter();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch("http://127.0.0.1:5001/login", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email: loginEmail, password: loginPassword }),
//                 credentials: "include",
//             });

//             if (!response.ok) throw new Error("Login failed! Check credentials.");

//             const data = await response.json();
//             console.log("API Response:", data);

//             if (data?.role) {
//                 localStorage.setItem("userRole", data.role);

//                 // Redirect based on role
//                 if (data.role === "admin") {
//                     router.push("/admin");
//                 } else {
//                     router.push("/home");
//                 }
//             } else {
//                 throw new Error("Role not found in response");
//             }
//         } catch (error) {
//             console.error("Login Error:", error);
//             alert(error.message);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={loginEmail}
//                 onChange={(e) => setLoginEmail(e.target.value)}
//                 required
//             />
//             <input
//                 type="password"
//                 placeholder="Password"
//                 value={loginPassword}
//                 onChange={(e) => setLoginPassword(e.target.value)}
//                 required
//             />
//             <button type="submit">Login</button>
//         </form>
//     );
// };

// export default Login;


// import { useState } from "react";


// const Login = () => {
//     const [loginEmail, setLoginEmail] = useState("");
//     const [loginPassword, setLoginPassword] = useState("");
//     const router = useRouter(); // Initialize router

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch("http://127.0.0.1:5001/login", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email: loginEmail, password: loginPassword }),
//                 credentials: "include",
//             });

//             if (!response.ok) throw new Error("Login failed! Check credentials.");

//             const data = await response.json();

//             if (data?.role) {
//                 localStorage.setItem("userRole", data.role);

//                 // Redirect based on role
//                 if (data.role === "admin") {
//                     router.push("/admin");
//                 } else {
//                     router.push("/home");
//                 }
//             } else {
//                 throw new Error("Role not found in response");
//             }
//         } catch (error) {
//             console.error("Login Error:", error);
//             alert(error.message);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={loginEmail}
//                 onChange={(e) => setLoginEmail(e.target.value)}
//                 required
//             />
//             <input
//                 type="password"
//                 placeholder="Password"
//                 value={loginPassword}
//                 onChange={(e) => setLoginPassword(e.target.value)}
//                 required
//             />
//             <button type="submit">Login</button>
//         </form>
//     );
// };

// export default Login;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// const Login = () => {
//     const [loginEmail, setLoginEmail] = useState("");
//     const [loginPassword, setLoginPassword] = useState("");
//     const navigate = useNavigate(); // Initialize navigate

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch("http://127.0.0.1:5001/login", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ email: loginEmail, password: loginPassword }),
//                 credentials: "include",
//             });

//             if (!response.ok) throw new Error("Login failed! Check credentials.");

//             const data = await response.json();

//             if (data?.role) {
//                 localStorage.setItem("userRole", data.role);

//                 // Redirect based on role
//                 if (data.role === "admin") {
//                     navigate("/admin"); // Navigate to Admin
//                 } else {
//                     navigate("/HomePage"); // Navigate to Home
//                 }
//             } else {
//                 throw new Error("Role not found in response");
//             }
//         } catch (error) {
//             console.error("Login Error:", error);
//             alert(error.message);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={loginEmail}
//                 onChange={(e) => setLoginEmail(e.target.value)}
//                 required
//             />
//             <input
//                 type="password"
//                 placeholder="Password"
//                 value={loginPassword}
//                 onChange={(e) => setLoginPassword(e.target.value)}
//                 required
//             />
//             <button type="submit">Login</button>
//         </form>
//     );
// };

// export default Login;


import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const navigate = useNavigate(); // Initialize navigate

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:5001/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: loginEmail, password: loginPassword }),
                credentials: "include",
            });

            if (!response.ok) throw new Error("Login failed! Check credentials.");

            const data = await response.json();

            if (data?.role) {
                localStorage.setItem("userRole", data.role);

                // Redirect to HomePage for all roles except admin
                if (data.role === "admin") {
                    navigate("/admin");
                } else {
                    navigate("/");
                }
            } else {
                throw new Error("Role not found in response");
            }
        } catch (error) {
            console.error("Login Error:", error);
            alert(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
