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



// import ProductForm from "../Components/ProductForm";
// import ProductTable from "../Components/ProductTable";
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
//     );
// }

import ProductForm from "../Components/ProductForm";
import { useState, useEffect } from "react";
import { fetchProducts, addProduct, deleteProduct } from "../lib/Api";

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

    const handleAddProduct = async (product) => {
        await addProduct(product);
        loadProducts();
    };

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
            <ProductForm selectedProduct={selectedProduct} onProductAdded={handleAddProduct} />
            
            <h3>Product List</h3>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.ProductId}>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>${product.price}</td>
                            <td>
                                <button onClick={() => handleDelete(product.ProductId)}>Delete</button>
                                <button onClick={() => handleEdit(product.ProductId)}>Edit</button>
                            </td>
                            
                                
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
