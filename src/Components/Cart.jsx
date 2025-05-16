// // import React, { useState } from "react";
// // import { Drawer, IconButton, Typography, Box } from "@mui/material";
// // import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// // export default function NavbarCart() {
// //   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

// //   const toggleDrawer = (open) => () => {
// //     setIsDrawerOpen(open);
// //   };

// //   return (
// //     <>
// //       {/* Navbar */}
// //       <Box

// //       >

// //         <IconButton color="inherit" onClick={toggleDrawer(true)}>
// //         <ShoppingCartIcon style={{ visibility: "visible" }} />
// //         </IconButton>
// //       </Box>

// //       {/* Cart Drawer */}
// //         <Drawer
// //         anchor="right"
// //         open={isDrawerOpen}
// //         onClose={toggleDrawer(false)}
// //         slotProps={{
// //             paper: {
// //             sx: { width: "25%", zIndex: 1200 }, // Keep Drawer below the navbar
// //             },
// //         }}
// //         >

// //         <Box sx={{ padding: "20px", display: "flex", flexDirection: "column" }}>
// //           <Typography variant="h6">Shopping Cart</Typography>
// //           <Typography variant="body1" sx={{ marginTop: "10px" }}>
// //             Your cart items will be displayed here.
// //           </Typography>
// //         </Box>
// //       </Drawer>
// //     </>
// //   );
// // }


// import React, { useState } from "react";
// import { Drawer, IconButton, Typography, Box, List, ListItem, Button } from "@mui/material";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// export default function NavbarCart() {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [cartItems, setCartItems] = useState([]); // Store cart products

//   const toggleDrawer = (open) => () => {
//     setIsDrawerOpen(open);
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <Box>
//         <IconButton color="inherit" onClick={toggleDrawer(true)}>
//           <ShoppingCartIcon style={{ visibility: "visible" }} />
//         </IconButton>
//       </Box>

//       {/* Cart Drawer */}
//       <Drawer
//         anchor="right"
//         open={isDrawerOpen}
//         onClose={toggleDrawer(false)}
//         slotProps={{
//           paper: {
//             sx: { width: "25%", zIndex: 1200 },
//           },
//         }}
//       >
//         <Box sx={{ padding: "20px", display: "flex", flexDirection: "column" }}>
//           <Typography variant="h6">Shopping Cart</Typography>
//           {cartItems.length === 0 ? (
//             <Typography variant="body1" sx={{ marginTop: "10px" }}>
//               Your cart is empty.
//             </Typography>
//           ) : (
//             <List>
//               {cartItems.map((item, index) => (
//                 <ListItem key={index} sx={{ display: "flex", justifyContent: "space-between" }}>
//                   <Typography>{item.name} - ${item.price}</Typography>
//                   <Button variant="contained" color="error" onClick={() => removeFromCart(index)}>
//                     Remove
//                   </Button>
//                 </ListItem>
//               ))}
//             </List>
//           )}
//         </Box>
//       </Drawer>
//     </>
//   );
// }


// import React, { useState } from "react";
// import { Drawer, IconButton, Typography, Box, List, ListItem, Button } from "@mui/material";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// export default function NavbarCart({ cartItems, setCartItems }) { // ✅ Fix: Accept cartItems as prop
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const toggleDrawer = (open) => () => {
//     setIsDrawerOpen(open);
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
//   };

//   const updateQuantity = (ProductId, type) => {
//     setCartItems((prevCart) =>
//       prevCart.map((item) =>
//         item.ProductId === ProductId
//           ? { ...item, quantity: type === "increase" ? item.quantity + 1 : Math.max(item.quantity - 1, 1) }
//           : item
//       )
//     );
//   };

//   const removeFromCart = (ProductId) => {
//     setCartItems((prevCart) => prevCart.filter((item) => item.ProductId !== ProductId));
//   };





//   return (
//     <>
//       {/* Navbar */}
//       <Box>
//         <IconButton color="inherit" onClick={toggleDrawer(true)}>
//           <ShoppingCartIcon />
//         </IconButton>
//       </Box>

//       {/* Cart Drawer */}
//       <Drawer
//         anchor="right"
//         open={isDrawerOpen}
//         onClose={toggleDrawer(false)}
//         slotProps={{
//           paper: {
//             sx: { width: "25%", zIndex: 1200 },
//           },
//         }}
//       >
//         <Box sx={{ padding: "20px" }}>
//           <Typography variant="h6">Shopping Cart</Typography>
//           {cartItems.length === 0 ? (
//             <Typography variant="body1" sx={{ marginTop: "10px" }}>
//               Your cart is empty.
//             </Typography>
//           ) : (
//             <List>
//               {cartItems.map((item, index) => (
//                 <ListItem key={index} sx={{ display: "flex", justifyContent: "space-between" }}>
//                   <Typography>{item.name} - ${item.price}</Typography>
//                   {/* <Button onClick={() => updateQuantity(item.ProductId, "increase")}>➕</Button>
//                   <Button onClick={() => updateQuantity(item.ProductId, "decrease")}>➖</Button> */}
//                   {/* <Button variant="contained" color="error">Remove</Button> */}
//                   {/* <Button variant="contained" color="error" onClick={() => removeFromCart(item.ProductId)}>❌ Remove</Button> */}
//                   <Button onClick={() => updateQuantity(item.ProductId, "increase")}>➕</Button>
//                   <Button onClick={() => updateQuantity(item.ProductId, "decrease")}>➖</Button>
//                   <Button variant="contained" color="error" onClick={() => removeFromCart(item.ProductId)}>❌ Remove</Button>
//                 </ListItem>
//               ))}
//               <Typography variant="h6">Total: ${calculateTotal()}</Typography>
//             </List>
//           )}
//         </Box>
//       </Drawer>
//     </>
//   );
// }



// import React, { useState } from "react";
// import { Drawer, IconButton, Typography, Box, List, ListItem, Button, TextField } from "@mui/material";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// export default function NavbarCart({ cartItems, setCartItems }) {
//     const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
//     const [isCheckoutDrawerOpen, setIsCheckoutDrawerOpen] = useState(false);
//     const [userDetails, setUserDetails] = useState({ name: "", email: "", address: "" });

//     const toggleCartDrawer = (open) => () => {
//         setIsCartDrawerOpen(open);
//     };

//     const toggleCheckoutDrawer = (open) => () => {
//         setIsCheckoutDrawerOpen(open);
//     };

//     const updateQuantity = (ProductId, type) => {
//         setCartItems((prevCart) =>
//             prevCart.map((item) =>
//                 item.ProductId === ProductId
//                     ? { ...item, quantity: type === "increase" ? item.quantity + 1 : Math.max(item.quantity - 1, 1) }
//                     : item
//             )
//         );
//     };

//     const removeFromCart = (ProductId) => {
//         setCartItems((prevCart) => prevCart.filter((item) => item.ProductId !== ProductId));
//     };

//     const calculateTotal = () => {
//         return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
//     };

//   const handlePlaceOrder = async () => {
//     if (!userDetails.name.trim() || !userDetails.email.trim() || !userDetails.address.trim()) {
//         alert("Please fill in all the required fields before placing your order.");
//         return;
//     }

//     const orderData = {
//         name: userDetails.name,
//         email: userDetails.email,
//         address: userDetails.address,
//         cartItems: cartItems,
//     };

//     try {
//         const response = await fetch("http://127.0.0.1:5001/place-order", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(orderData),
//         });

//         const data = await response.json();

//         if (response.status === 201) {
//             alert(`Order Placed Successfully!\nOrder ID: ${data.orderId}`);
//             setCartItems([]); // Clear cart after order
//             setIsCheckoutDrawerOpen(false);
//         } else {
//             alert("Error placing order: " + data.error);
//         }
//     } catch (error) {
//         console.error("Order placement failed:", error);
//     }
// };

  

//     return (
//         <>
//             {/* Cart Icon */}
//             <Box>
//                 <IconButton color="inherit" onClick={toggleCartDrawer(true)}>
//                     <ShoppingCartIcon />
//                 </IconButton>
//             </Box>

//             {/* Cart Drawer */}
//             <Drawer
//                 anchor="right"
//                 open={isCartDrawerOpen}
//                 onClose={toggleCartDrawer(false)}
//                 slotProps={{ paper: { sx: { width: "30%", zIndex: 1200 } } }}
//             >
//                 <Box sx={{ padding: "20px" }}>
//                     <Typography variant="h6">Shopping Cart</Typography>

//                     {cartItems.length === 0 ? (
//                         <Typography variant="body1" sx={{ marginTop: "10px" }}>
//                             Your cart is empty.
//                         </Typography>
//                     ) : (
//                         <>
//                             {/* Cart Items List */}
//                             <List>
//                                 {cartItems.map((item, index) => (
//                                     <ListItem key={index} sx={{ display: "flex", justifyContent: "space-between" }}>
//                                         <Typography>
//                                             {item.name} - ${item.price} x {item.quantity}
//                                         </Typography>
//                                         <Button onClick={() => updateQuantity(item.ProductId, "increase")}>➕</Button>
//                                         <Button onClick={() => updateQuantity(item.ProductId, "decrease")}>➖</Button>
//                                         <Button variant="contained" color="error" onClick={() => removeFromCart(item.ProductId)}>
//                                             ❌ Remove
//                                         </Button>
//                                     </ListItem>
//                                 ))}
//                             </List>

//                             {/* Total Price */}
//                             <Typography variant="h6">Total: ${calculateTotal()}</Typography>

//                             {/* Checkout Button (Opens Separate Drawer) */}
//                             <Button
//                                 variant="contained"
//                                 color="primary"
//                                 sx={{ marginTop: "10px" }}
//                                 onClick={toggleCheckoutDrawer(true)}
//                             >
//                                 Checkout
//                             </Button>
//                         </>
//                     )}
//                 </Box>
//             </Drawer>

//             {/* Checkout Drawer */}
//             <Drawer
//                 anchor="right"
//                 open={isCheckoutDrawerOpen}
//                 onClose={toggleCheckoutDrawer(false)}
//                 slotProps={{ paper: { sx: { width: "30%", zIndex: 1200 } } }}
//             >
//                 <Box sx={{ padding: "20px" }}>
//                     <Typography variant="h6">Checkout</Typography>
//                     <Typography variant="body1">Enter your details to place an order.</Typography>

//                     {/* Checkout Form */}
//                     <TextField
//                         fullWidth
//                         label="Full Name"
//                         variant="outlined"
//                         margin="normal"
//                         value={userDetails.name}
//                         onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
//                     />
//                     <TextField
//                         fullWidth
//                         label="Email"
//                         variant="outlined"
//                         margin="normal"
//                         value={userDetails.email}
//                         onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
//                     />
//                     <TextField
//                         fullWidth
//                         label="Address"
//                         variant="outlined"
//                         margin="normal"
//                         value={userDetails.address}
//                         onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
//                     />

//                     {/* Place Order Button */}
//                     <Button
//                         variant="contained"
//                         color="success"
//                         sx={{ marginTop: "10px" }}
//                         onClick={handlePlaceOrder}
//                     >
//                         Place Order
//                     </Button>
//                 </Box>
//             </Drawer>
//         </>
//     );
// }

    // const handlePlaceOrder = () => {
    //     alert(`Order Placed!\nName: ${userDetails.name}\nEmail: ${userDetails.email}\nAddress: ${userDetails.address}`);
    //     setCartItems([]); // Clear cart after order
    //     setIsCheckoutDrawerOpen(false);
    // };

  //   const handlePlaceOrder = () => {
  //     // Check if fields are empty
  //     if (!userDetails.name.trim() || !userDetails.email.trim() || !userDetails.address.trim()) {
  //         alert("Please fill in all the required fields before placing your order.");
  //         return;
  //     }
  
  //     alert(`Order Placed!\nName: ${userDetails.name}\nEmail: ${userDetails.email}\nAddress: ${userDetails.address}`);
      
  //     setCartItems([]); // Clear cart after order
  //     setIsCheckoutDrawerOpen(false);
  // };





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

    console.log("🔹 Sending Order Data:", orderData); // ✅ Debugging

    try {
        const response = await fetch("http://127.0.0.1:5001/place-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(orderData),
        });

        const data = await response.json();
        console.log("🔹 Server Response:", data); // ✅ Debugging

        if (response.ok) {
            alert(`Order Placed Successfully!\nOrder ID: ${data.orderId}`);
            setCartItems([]); // ✅ Clear cart after order
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
            {/* ✅ Toast Container for Notifications */}
            <ToastContainer autoClose={3000} position="top-right" />

            {/* 🛒 Cart Icon */}
            <Box>
                <IconButton color="inherit" onClick={toggleCartDrawer(true)}>
                    <ShoppingCartIcon />
                </IconButton>
            </Box>

            {/* ✅ Cart Drawer */}
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
                            {/* ✅ Cart Items List */}
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

                            {/* ✅ Total Price */}
                            <Typography variant="h6">Total: ${calculateTotal()}</Typography>

                            {/* ✅ Checkout Button */}
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

            {/* ✅ Checkout Drawer */}
            <Drawer
                anchor="right"
                open={isCheckoutDrawerOpen}
                onClose={toggleCheckoutDrawer(false)}
                slotProps={{ paper: { sx: { width: "30%", zIndex: 1200 } } }}
            >
                <Box sx={{ padding: "20px" }}>
                    <Typography variant="h6">Checkout</Typography>
                    <Typography variant="body1">Enter your details to place an order.</Typography>

                    {/* ✅ Checkout Form */}
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

                    {/* ✅ Place Order Button */}
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
