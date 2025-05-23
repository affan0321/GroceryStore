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

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { signup } from "../lib/Api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
    const router = useRouter(); 
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

                // Redirect based on role
                if (response.role === "admin") {
                    router.push("/admin");
                } else {
                    router.push("/home");
                }
            }
        } catch (error) {
            toast.error("Signup failed, please try again.");
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={HandleSubmit}>
                <input type="text" name="fullname" placeholder="Full Name" value={formData.fullname} onChange={HandleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={HandleChange} required />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={HandleChange} required />
                <select name="role" value={formData.role} onChange={HandleChange}>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}
