import React, { useState } from "react";
import { Drawer, IconButton, Typography, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function NavbarCart() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <>
      {/* Navbar */}
      <Box
        
      >
    
        <IconButton color="inherit" onClick={toggleDrawer(true)}>
        <ShoppingCartIcon style={{ visibility: "visible" }} />
        </IconButton>
      </Box>

      {/* Cart Drawer */}
        <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        slotProps={{
            paper: {
            sx: { width: "25%", zIndex: 1200 }, // Keep Drawer below the navbar
            },
        }}
        >

        <Box sx={{ padding: "20px", display: "flex", flexDirection: "column" }}>
          <Typography variant="h6">Shopping Cart</Typography>
          <Typography variant="body1" sx={{ marginTop: "10px" }}>
            Your cart items will be displayed here.
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
