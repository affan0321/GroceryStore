// import ProductForm from "./ProductForm"
// import ProductTable from "./ProductTable"
// import { useState, useEffect } from "react";
// import { fetchProducts, deleteProduct } from "../lib/Api";


// export default function Admin() {
//     const [products, setProducts] = useState([]);
//     const [selectedProduct, setSelectedProduct] = useState(null);

//     const loadProducts = async () => {
//         const data = await fetchProducts();
//         setProducts(data);
//     };

//     useEffect(() => {
//         loadProducts();
//     }, []);

//     const handleDelete = async (productId) => {
//         await deleteProduct(productId);
//         loadProducts();
//     };

//     const handleEdit = (product) => {
//         setSelectedProduct(product);
//     };
//     return (
//         <div>
//             <h2>{selectedProduct ? "Edit Product" : "Add a Product"}</h2>
//             <ProductForm selectedProduct={selectedProduct} onProductAdded={loadProducts} />
//             <ProductTable products={products} onDelete={handleDelete} onEdit={handleEdit} />
//         </div>
//     )
// }


"use client";
import ProductForm from "../Components/ProductForm";
import ProductTable from "../Components/ProductTable";
import { useState, useEffect } from "react";
import { fetchProducts, deleteProduct } from "../lib/Api";

export default function Admin() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const loadProducts = async () => {
        const data = await fetchProducts();
        setProducts(data);
    };

    useEffect(() => {
        loadProducts();
    }, []);

    const handleDelete = async (productId) => {
        await deleteProduct(productId);
        loadProducts();
    };

    const handleEdit = (product) => {
        setSelectedProduct(product);
    };

    return (
        <div>
            <h2>{selectedProduct ? "Edit Product" : "Add a Product"}</h2>
            <ProductForm selectedProduct={selectedProduct} onProductAdded={loadProducts} />
            <ProductTable products={products} onDelete={handleDelete} onEdit={handleEdit} />
        </div>
    );
}


