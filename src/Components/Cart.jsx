import React, { useState } from "react";
import { Drawer, IconButton, Typography, Box, List, ListItem, Button, TextField } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NavbarCart({ cartItems, setCartItems }) {
    const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
    const [isCheckoutDrawerOpen, setIsCheckoutDrawerOpen] = useState(false);
    const [userDetails, setUserDetails] = useState({ name: "", email: "", address: "" });

    const toggleCartDrawer = (open) => () => {
        setIsCartDrawerOpen(open);
    };

    const toggleCheckoutDrawer = (open) => () => {
        setIsCheckoutDrawerOpen(open);
    };

    const updateQuantity = (ProductId, type) => {
        setCartItems((prevCart) =>
            prevCart.map((item) =>
                item.ProductId === ProductId
                    ? { ...item, quantity: type === "increase" ? item.quantity + 1 : Math.max(item.quantity - 1, 1) }
                    : item
            )
        );
    };

    const removeFromCart = (ProductId) => {
        setCartItems((prevCart) => prevCart.filter((item) => item.ProductId !== ProductId));
        toast.info("Item removed from cart");
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

const handlePlaceOrder = async () => {
    if (!userDetails.name.trim() || !userDetails.email.trim() || !userDetails.address.trim()) {
        alert("Please fill in all required fields before placing your order.");
        return;
    }

    const orderData = {
        name: userDetails.name,
        email: userDetails.email,
        address: userDetails.address,
        cartItems: cartItems,
    };

    console.log("🔹 Sending Order Data:", orderData); 

    try {
        const response = await fetch("http://127.0.0.1:5001/place-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(orderData),
        });

        const data = await response.json();
        console.log("🔹 Server Response:", data);

        if (response.ok) {
            alert(`Order Placed Successfully!\nOrder ID: ${data.orderId}`);
            setCartItems([]); 
            setIsCheckoutDrawerOpen(false);
        } else {
            alert("❌ Error placing order: " + data.error);
        }
    } catch (error) {
        console.error("❌ Order placement failed:", error);
    }
};

    return (
        <>
            
            <ToastContainer autoClose={3000} position="top-right" />

            <Box>
                <IconButton color="inherit" onClick={toggleCartDrawer(true)}>
                    <ShoppingCartIcon />
                </IconButton>
            </Box>

            
            <Drawer
                anchor="right"
                open={isCartDrawerOpen}
                onClose={toggleCartDrawer(false)}
                slotProps={{ paper: { sx: { width: "30%", zIndex: 1200 } } }}
            >
                <Box sx={{ padding: "20px" }}>
                    <Typography variant="h6">Shopping Cart</Typography>

                    {cartItems.length === 0 ? (
                        <Typography variant="body1" sx={{ marginTop: "10px" }}>
                            Your cart is empty.
                        </Typography>
                    ) : (
                        <>
                            
                            <List>
                                {cartItems.map((item, index) => (
                                    <ListItem key={index} sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography>
                                            {item.name} - ${item.price} x {item.quantity}
                                        </Typography>
                                        <Button onClick={() => updateQuantity(item.ProductId, "increase")}>➕</Button>
                                        <Button onClick={() => updateQuantity(item.ProductId, "decrease")}>➖</Button>
                                        <Button variant="contained" color="error" onClick={() => removeFromCart(item.ProductId)}>
                                            ❌ Remove
                                        </Button>
                                    </ListItem>
                                ))}
                            </List>

                            
                            <Typography variant="h6">Total: ${calculateTotal()}</Typography>

                            
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ marginTop: "10px" }}
                                onClick={toggleCheckoutDrawer(true)}
                            >
                                Checkout
                            </Button>
                        </>
                    )}
                </Box>
            </Drawer>

        
            <Drawer
                anchor="right"
                open={isCheckoutDrawerOpen}
                onClose={toggleCheckoutDrawer(false)}
                slotProps={{ paper: { sx: { width: "30%", zIndex: 1200 } } }}
            >
                <Box sx={{ padding: "20px" }}>
                    <Typography variant="h6">Checkout</Typography>
                    <Typography variant="body1">Enter your details to place an order.</Typography>

                
                    <TextField
                        fullWidth
                        label="Full Name"
                        variant="outlined"
                        margin="normal"
                        value={userDetails.name}
                        onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        value={userDetails.email}
                        onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        label="Address"
                        variant="outlined"
                        margin="normal"
                        value={userDetails.address}
                        onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
                    />

            
                    <Button
                        variant="contained"
                        color="success"
                        sx={{ marginTop: "10px" }}
                        onClick={handlePlaceOrder}
                    >
                        Place Order
                    </Button>
                </Box>
            </Drawer>
        </>
    );
}
