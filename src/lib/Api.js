const API_URL = "http://127.0.0.1:5001";

export const signup = async (userData) => {
    try {
        console.log("🚀 Sending signup request with data:", userData); // ✅ Debugging log

        const res = await fetch("http://127.0.0.1:5001/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include", // ✅ Allow session cookies
            body: JSON.stringify(userData),
        });

        const data = await res.json();
        console.log("📩 Received response:", data); // ✅ Debugging log

        return data;
    } catch (error) {
        console.error("❌ Signup request failed:", error);
        return { error: "Signup request failed" };
    }
};


export const login = async (userData) => {
    try {
        const res = await fetch("http://127.0.0.1:5001/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include", // ✅ Important for sessions
            body: JSON.stringify(userData),
        });
        return await res.json();
    } catch (error) {
        console.error("Login failed:", error);
        return { error: "Login request failed" };
    }
};

// export const logout = async () => {
//     try {
//         await fetch("http://127.0.0.1:5001/logout", {
//             method: "POST",
//             credentials: "include",
//         });
//     } catch (error) {
//         console.error("Logout failed:", error);
//     }
// };

const handleLogout = async () => {
    try {
        const response = await fetch("http://127.0.0.1:5001/logout", {
            method: "POST",
            credentials: "include", // Ensures cookies (session) are sent
            headers: { "Content-Type": "application/json" }
        });

        if (response.ok) {
            localStorage.removeItem("userRole"); // Remove user role
            window.location.reload(); // Refresh page after logout
        }
    } catch (error) {
        console.error("Logout failed:", error);
    }
};


// export const checkAuth = async () => {
//     try {
//         const res = await fetch("http://127.0.0.1:5001/check-auth", {
//             method: "GET",
//             credentials: "include", // ✅ Keep session alive
//         });
//         return await res.json();
//     } catch (error) {
//         console.error("Auth check failed:", error);
//         return { logged_in: false };
//     }
// };

import { useEffect, useState } from "react";

const useAuth = () => {
    const [auth, setAuth] = useState({ logged_in: false, user: null });

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch("http://127.0.0.1:5001/check-auth", {
                    method: "GET",
                    credentials: "include", // Include session cookies
                });

                const data = await response.json();
                setAuth(data);
                if (data.logged_in) {
                    localStorage.setItem("userRole", data.user.role);
                }
            } catch (error) {
                console.error("Error checking auth:", error);
            }
        };

        checkAuth();
    }, []);

    return auth;
};


export async function fetchProducts() {
    const res = await fetch(`${API_URL}/products`);
    return res.json();
}

// export async function addProduct(product) {
//     const res = await fetch(`${API_URL}/add-product`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(product),
//     });
//     return res.json();
// }

export async function addProduct(product) {
    console.log("📢 Sending product data:", product); // Debugging log

    const res = await fetch(`${API_URL}/add-product`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
    });

    const data = await res.json();
    console.log("📩 Received response:", data); // Debugging log

    return data;
}


export async function updateProduct(productId, product) {
    const res = await fetch(`${API_URL}/edit-product/${productId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
    });
    return res.json();
}

export async function deleteProduct(productId) {
    const res = await fetch(`${API_URL}/delete-product/${productId}`, {
        method: "DELETE",
    });
    return res.json();
}
