import React, { useState, useEffect } from "react";
import { TextField, Button, Select, MenuItem, Box } from "@mui/material";

export default function ProductForm({ selectedProduct, onProductAdded, onProductEdited }) {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        category: "Fresh Produce",
        imageURL: ""  
    });


    useEffect(() => {
        if (selectedProduct) {
            setFormData(selectedProduct);
        }
    }, [selectedProduct]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedProduct && onProductEdited) {
        onProductEdited(formData); 
    } else if (onProductAdded) {
        onProductAdded(formData);
    } else {
        console.error("❌ Error: Missing function for handling product submission");
    }
};

    return (
        <Box sx={{ width: "100%", maxWidth: "400px", margin: "0 auto", padding: "20px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", borderRadius: "10px", background: "#fff" }}>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Product Name"
                    name="name"
                    variant="outlined"
                    margin="normal"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <TextField
                    fullWidth
                    label="Price"
                    name="price"
                    type="number"
                    variant="outlined"
                    margin="normal"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
                <Select
                    fullWidth
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    sx={{ marginBottom: "20px" }}
                >
                    <MenuItem value="Fresh Produce">Fresh Produce</MenuItem>
                    <MenuItem value="Dairy & Frozen">Dairy & Frozen</MenuItem>
                    <MenuItem value="Pantry Essentials">Pantry Essentials</MenuItem>
                    <MenuItem value="Bakery & Snacks">Bakery & Snacks</MenuItem>
                </Select>
                <TextField
                    fullWidth
                    label="Image URL"
                    name="imageURL"
                    variant="outlined"
                    margin="normal"
                    value={formData.imageURL}
                    onChange={handleChange}
                    required
                />
                <Button fullWidth variant="contained" color="primary" type="submit">
                    {selectedProduct ? "Update Product" : "Add Product"}
                </Button>
            </form>
        </Box>
    );
}
