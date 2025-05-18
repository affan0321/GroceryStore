import ProductForm from "../Components/ProductForm";
import { useState, useEffect } from "react";
import { fetchProducts, addProduct, deleteProduct } from "../lib/Api";
import "./Admin.css";

export default function Admin() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };


        const fetchOrders = async () => {
    try {
        const response = await fetch("http://127.0.0.1:5001/orders");
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        
        const data = await response.json();
        console.log("🔹 Orders Fetched:", data);
        setOrders(data);
    } catch (error) {
        console.error("❌ Error fetching orders:", error);
    }
};

        loadProducts();
        fetchOrders();
    }, []);

    const handleAddProduct = async (product) => {
        await addProduct(product);
        setProducts(await fetchProducts());
    };

    const handleDelete = async (productId) => {
        await deleteProduct(productId);
        setProducts(await fetchProducts());
    };

    const handleEditProduct = async (updatedProduct) => {
    try {
        const response = await fetch(`http://127.0.0.1:5001/edit-product/${updatedProduct.ProductId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedProduct),
        });

        if (!response.ok) throw new Error("Failed to update product");

        setProducts(await fetchProducts());
        setSelectedProduct(null);  
    } catch (error) {
        console.error("❌ Error updating product:", error);
    }
};


    return (
        <div className="admin-container">
            <h2>{selectedProduct ? "Edit Product" : "Add a Product"}</h2>
            <div className="product-form">
                <ProductForm selectedProduct={selectedProduct} onProductAdded={handleAddProduct} onProductEdited={handleEditProduct}  />
            </div>

            <h3 style={{marginTop:"40px"}}>Product List</h3>
            <table>
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
                                <button className="delete-button" onClick={() => handleDelete(product.ProductId)}>Delete</button>
                                <button className="edit-button" onClick={() => setSelectedProduct(product)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2 style={{marginTop:"40px"}}>Order List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Total</th>
                        <th>Order Date</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.OrderId}>
                            <td>{order.OrderId}</td>
                            <td>{order.CustomerName}</td>
                            <td>{order.Email}</td>
                            <td>{order.Address}</td>
                            <td>${order.Total}</td>
                            <td>{order.OrderDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
