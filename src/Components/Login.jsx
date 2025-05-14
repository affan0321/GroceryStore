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


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

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

//                 // Redirect to HomePage for all roles except admin
//                 if (data.role === "admin") {
//                     navigate("/admin");
//                 } else {
//                     navigate("/");
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
import { TextField, Button, Box, Typography } from "@mui/material";

const Login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const navigate = useNavigate();

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
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
        >
            <Typography variant="h4" gutterBottom>
                Login
            </Typography>
            <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "400px" }}>
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                />
                <TextField
                    fullWidth
                    label="Password"
                    variant="outlined"
                    margin="normal"
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                />
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{ marginTop: "10px" }}
                >
                    Login
                </Button>
                <Typography variant="body2" sx={{ marginTop: "10px" }}>
                    Don't have an account? <a href="/signup">Signup</a>
                </Typography>
            </form>
        </Box>
    );
};

export default Login;
