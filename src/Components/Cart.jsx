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


import React, { useState } from "react";
import { Drawer, IconButton, Typography, Box, List, ListItem, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function NavbarCart({ cartItems, setCartItems }) { // ✅ Fix: Accept cartItems as prop
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
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
  };





  return (
    <>
      {/* Navbar */}
      <Box>
        <IconButton color="inherit" onClick={toggleDrawer(true)}>
          <ShoppingCartIcon />
        </IconButton>
      </Box>

      {/* Cart Drawer */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        slotProps={{
          paper: {
            sx: { width: "25%", zIndex: 1200 },
          },
        }}
      >
        <Box sx={{ padding: "20px" }}>
          <Typography variant="h6">Shopping Cart</Typography>
          {cartItems.length === 0 ? (
            <Typography variant="body1" sx={{ marginTop: "10px" }}>
              Your cart is empty.
            </Typography>
          ) : (
            <List>
              {cartItems.map((item, index) => (
                <ListItem key={index} sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography>{item.name} - ${item.price}</Typography>
                  {/* <Button onClick={() => updateQuantity(item.ProductId, "increase")}>➕</Button>
                  <Button onClick={() => updateQuantity(item.ProductId, "decrease")}>➖</Button> */}
                  {/* <Button variant="contained" color="error">Remove</Button> */}
                  {/* <Button variant="contained" color="error" onClick={() => removeFromCart(item.ProductId)}>❌ Remove</Button> */}
                  <Button onClick={() => updateQuantity(item.ProductId, "increase")}>➕</Button>
                  <Button onClick={() => updateQuantity(item.ProductId, "decrease")}>➖</Button>
                  <Button variant="contained" color="error" onClick={() => removeFromCart(item.ProductId)}>❌ Remove</Button>
                </ListItem>
              ))}
              <Typography variant="h6">Total: ${calculateTotal()}</Typography>
            </List>
          )}
        </Box>
      </Drawer>
    </>
  );
}
