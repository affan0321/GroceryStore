// import { useState } from "react";
// import { useRouter } from "next/navigation"; 
// import { signup } from "../lib/Api";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Signup() {
//     const router = useRouter(); 
//     const [formData, setFormData] = useState({
//         fullname: "",
//         email: "",
//         password: "",
//         role: "user"
//     });

//     const HandleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const HandleSubmit = async (e) => {
//         e.preventDefault();

//         if (!formData.fullname || !formData.email || !formData.password) {
//             toast.error("All fields are required!");
//             return;
//         }

//         if (formData.password.length < 6) {
//             toast.error("Password must be at least 6 characters long!");
//             return;
//         }

//         try {
//             const response = await signup(formData);

//             if (response.error) {
//                 toast.error(response.error);
//             } else {
//                 toast.success("Signup successful!");

//                 localStorage.setItem("userRole", response.role);

//                 window.location.reload();
//             }
//         } catch (error) {
//             toast.error("Signup failed, please try again.");
//         }
//     };


//     return (
//         <div>
//             <h2>Signup</h2>
//             <form onSubmit={HandleSubmit}>
//                 <input type="text" name="fullname" placeholder="Full Name" value={formData.fullname} onChange={HandleChange} required />
//                 <input type="email" name="email" placeholder="Email" value={formData.email} onChange={HandleChange} required />
//                 <input type="password" name="password" placeholder="Password" value={formData.password} onChange={HandleChange} required />
//                 <select name="role" value={formData.role} onChange={HandleChange}>
//                     <option value="user">User</option>
//                     <option value="admin">Admin</option>
//                 </select>
//                 <button type="submit">Signup</button>
//             </form>
//         </div>
//     );
// }


// import { useState } from "react"; 
// import { signup } from "../lib/Api";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Signup() {
//     const router = useRouter(); 
//     const [formData, setFormData] = useState({
//         fullname: "",
//         email: "",
//         password: "",
//         role: "user"
//     });

//     const HandleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const HandleSubmit = async (e) => {
//         e.preventDefault();

//         if (!formData.fullname || !formData.email || !formData.password) {
//             toast.error("All fields are required!");
//             return;
//         }

//         if (formData.password.length < 6) {
//             toast.error("Password must be at least 6 characters long!");
//             return;
//         }

//         try {
//             const response = await signup(formData);

//             if (response.error) {
//                 toast.error(response.error);
//             } else {
//                 toast.success("Signup successful!");

//                 localStorage.setItem("userRole", response.role);

//                 // Redirect based on role
//                 if (response.role === "admin") {
//                     router.push("/admin");
//                 } else {
//                     router.push("/home");
//                 }
//             }
//         } catch (error) {
//             toast.error("Signup failed, please try again.");
//         }
//     };

//     return (
//         <div>
//             <h2>Signup</h2>
//             <form onSubmit={HandleSubmit}>
//                 <input type="text" name="fullname" placeholder="Full Name" value={formData.fullname} onChange={HandleChange} required />
//                 <input type="email" name="email" placeholder="Email" value={formData.email} onChange={HandleChange} required />
//                 <input type="password" name="password" placeholder="Password" value={formData.password} onChange={HandleChange} required />
//                 <select name="role" value={formData.role} onChange={HandleChange}>
//                     <option value="user">User</option>
//                     <option value="admin">Admin</option>
//                 </select>
//                 <button type="submit">Signup</button>
//             </form>
//         </div>
//     );
// }


// import { useState } from "react";
// import { signup } from "../lib/Api";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import "react-toastify/dist/ReactToastify.css";

// export default function Signup() {
//     const navigate = useNavigate(); // Initialize navigate
//     const [formData, setFormData] = useState({
//         fullname: "",
//         email: "",
//         password: "",
//         role: "user"
//     });

//     const HandleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const HandleSubmit = async (e) => {
//         e.preventDefault();

//         if (!formData.fullname || !formData.email || !formData.password) {
//             toast.error("All fields are required!");
//             return;
//         }

//         if (formData.password.length < 6) {
//             toast.error("Password must be at least 6 characters long!");
//             return;
//         }

//         try {
//             const response = await signup(formData);

//             if (response.error) {
//                 toast.error(response.error);
//             } else {
//                 toast.success("Signup successful!");

//                 localStorage.setItem("userRole", response.role);

//                 // Redirect based on role
//                 if (response.role === "admin") {
//                     navigate("/admin"); // Navigate to Admin
//                 } else {
//                     navigate("/HomePage"); // Navigate to Home
//                 }
//             }
//         } catch (error) {
//             toast.error("Signup failed, please try again.");
//         }
//     };

//     return (
//         <div>
//             <h2>Signup</h2>
//             <form onSubmit={HandleSubmit}>
//                 <input
//                     type="text"
//                     name="fullname"
//                     placeholder="Full Name"
//                     value={formData.fullname}
//                     onChange={HandleChange}
//                     required
//                 />
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={HandleChange}
//                     required
//                 />
//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     value={formData.password}
//                     onChange={HandleChange}
//                     required
//                 />
//                 <select name="role" value={formData.role} onChange={HandleChange}>
//                     <option value="user">User</option>
//                     <option value="admin">Admin</option>
//                 </select>
//                 <button type="submit">Signup</button>
//             </form>
//         </div>
//     );
// }


// import { useState } from "react";
// import { signup } from "../lib/Api";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
// import { Link } from "react-router-dom";

// export default function Signup() {
//     const navigate = useNavigate(); // Initialize navigate
//     const [formData, setFormData] = useState({
//         fullname: "",
//         email: "",
//         password: "",
//         role: "user"
//     });

//     const HandleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const HandleSubmit = async (e) => {
//         e.preventDefault();

//         if (!formData.fullname || !formData.email || !formData.password) {
//             toast.error("All fields are required!");
//             return;
//         }

//         if (formData.password.length < 6) {
//             toast.error("Password must be at least 6 characters long!");
//             return;
//         }

//         try {
//             const response = await signup(formData);

//             if (response.error) {
//                 toast.error(response.error);
//             } else {
//                 toast.success("Signup successful!");

//                 localStorage.setItem("userRole", response.role);

//                 // Redirect to HomePage for all roles except admin
//                 if (response.role === "admin") {
//                     navigate("/admin");
//                 } else {
//                     navigate("/");
//                 }
//             }
//         } catch (error) {
//             toast.error("Signup failed, please try again.");
//         }
//     };

//     return (
//         <div>
//             <h2>Signup</h2>
//             <form onSubmit={HandleSubmit}>
//                 <input
//                     type="text"
//                     name="fullname"
//                     placeholder="Full Name"
//                     value={formData.fullname}
//                     onChange={HandleChange}
//                     required
//                 />
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={HandleChange}
//                     required
//                 />
//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     value={formData.password}
//                     onChange={HandleChange}
//                     required
//                 />
//                 <select name="role" value={formData.role} onChange={HandleChange}>
//                     <option value="user">User</option>
//                     <option value="admin">Admin</option>
//                 </select>
//                 <button type="submit">Signup</button>
//                 <p>If already signup go to <Link to="/login">Login</Link></p>
//             </form>
//         </div>
//     );
// }


import { useState } from "react";
import { signup } from "../lib/Api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { TextField, Button, Box, Typography } from "@mui/material";

export default function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: "",
        role: "user"
    });

    const HandleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const HandleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.fullname || !formData.email || !formData.password) {
            toast.error("All fields are required!");
            return;
        }

        if (formData.password.length < 6) {
            toast.error("Password must be at least 6 characters long!");
            return;
        }

        try {
            const response = await signup(formData);

            if (response.error) {
                toast.error(response.error);
            } else {
                toast.success("Signup successful!");

                localStorage.setItem("userRole", response.role);

                if (response.role === "admin") {
                    navigate("/admin");
                } else {
                    navigate("/");
                }
            }
        } catch (error) {
            toast.error("Signup failed, please try again.");
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
                Signup
            </Typography>
            <form onSubmit={HandleSubmit} style={{ width: "100%", maxWidth: "400px" }}>
                <TextField
                    fullWidth
                    label="Full Name"
                    variant="outlined"
                    margin="normal"
                    name="fullname"
                    value={formData.fullname}
                    onChange={HandleChange}
                    required
                />
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    name="email"
                    value={formData.email}
                    onChange={HandleChange}
                    required
                />
                <TextField
                    fullWidth
                    label="Password"
                    variant="outlined"
                    margin="normal"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={HandleChange}
                    required
                />
                <TextField
                    fullWidth
                    select
                    label="Role"
                    variant="outlined"
                    margin="normal"
                    name="role"
                    value={formData.role}
                    onChange={HandleChange}
                    SelectProps={{
                        native: true,
                    }}
                >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </TextField>
                <Button
                    fullWidth
                    variant="contained"
                    color="success"
                    type="submit"
                    sx={{ marginTop: "10px" }}
                >
                    Signup
                </Button>
                <Typography variant="body2" sx={{ marginTop: "10px" }}>
                    Already signed up? Go to <Link to="/login">Login</Link>
                </Typography>
            </form>
        </Box>
    );
}
