
// import { useState } from "react";
// import { addProduct, updateProduct } from "../lib/Api";
// import './ProductForm.css'

// export default function ProductForm({ selectedProduct, onProductAdded }) {
//     const [product, setProduct] = useState({
//         name: selectedProduct?.name || "",
//         unit: selectedProduct?.unit || "",
//         price: selectedProduct?.price || "",
//     });

//     const handleChange = (e) => {
//         setProduct({ ...product, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!product.name || !product.unit || !product.price) {
//             alert("Please fill all fields.");
//             return;
//         }

//         if (selectedProduct) {
//             await updateProduct(selectedProduct.ProductId, product);
//         } else {
//             await addProduct(product);
//         }

//         setProduct({ name: "", unit: "", price: "" });
//         onProductAdded();
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" name="name" placeholder="Enter product name" value={product.name} onChange={handleChange} required />
//             <input type="number" name="unit" placeholder="Enter unit" value={product.unit} onChange={handleChange} required />
//             <input type="number" name="price" placeholder="Enter price" value={product.price} onChange={handleChange} required />
//             <button type="submit">{selectedProduct ? "Update Product" : "Add Product"}</button>
//         </form>
//     );
// }


import React, { useState } from "react";

export default function ProductForm({ selectedProduct, onProductAdded }) {
    const [formData, setFormData] = useState({
        name: selectedProduct?.name || "",
        price: selectedProduct?.price || "",
        category: selectedProduct?.category || "Fruits",
        imageURL: selectedProduct?.imageURL || ""  // New image field
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onProductAdded(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required />
            <input type="text" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
            <select name="category" value={formData.category} onChange={handleChange}>
                <option value="Fruits">Fruits</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Dairy">Dairy</option>
            </select>
            <input type="text" name="imageURL" placeholder="Image URL" value={formData.imageURL} onChange={handleChange} required />
            <button type="submit">{selectedProduct ? "Update Product" : "Add Product"}</button>
        </form>
    );
}
