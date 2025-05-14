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

//  const fetchOrders = async () => {
        //      try {
        //          const response = await fetch("http://127.0.0.1:5001/orders");
        //          const data = await response.json();
        //          setOrders(data);
        //      } catch (error) {
        //          console.error("Error fetching orders:", error);
        //      }
        //  };

// import ProductForm from "../Components/ProductForm";
// import { useState, useEffect } from "react";
// import { fetchProducts, addProduct, deleteProduct } from "../lib/Api";

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

//     const handleAddProduct = async (product) => {
//         await addProduct(product);
//         loadProducts();
//     };

//     const handleDelete = async (productId) => {
//         await deleteProduct(productId);
//         loadProducts();
//     };

//     const handleEdit = (product) => {
//                setSelectedProduct(product);
//          };

//          const [orders, setOrders] = useState([]);

        
     
         
//         const fetchOrders = async () => {
//             try {
//                 const response = await fetch("http://127.0.0.1:5001/orders");
                
//                 // ✅ Ensure response is valid JSON
//                 if (!response.ok) {
//                     throw new Error(`HTTP Error: ${response.status}`);
//                 }
                
//                 const data = await response.json();
//                 setOrders(data);
//             } catch (error) {
//                 console.error("Error fetching orders:", error);
//             }
//         };

//         useEffect(() => {
//             fetchOrders();
//         }, []);
       
        

//     return (
//         <div>
//             <h2>{selectedProduct ? "Edit Product" : "Add a Product"}</h2>
//             <ProductForm selectedProduct={selectedProduct} onProductAdded={handleAddProduct} />
            
//             <h3>Product List</h3>
//             <table border="1">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Category</th>
//                         <th>Price</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {products.map((product) => (
//                         <tr key={product.ProductId}>
//                             <td>{product.name}</td>
//                             <td>{product.category}</td>
//                             <td>${product.price}</td>
//                             <td>
//                                 <button onClick={() => handleDelete(product.ProductId)}>Delete</button>
//                                 <button onClick={() => handleEdit(product.ProductId)}>Edit</button>
//                             </td>
                            
                                
                            
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             <div>
//             <h2>Order List</h2>
//             <table border="1">
//                 <thead>
//                     <tr>
//                         <th>Order ID</th>
//                         <th>Customer Name</th>
//                         <th>Email</th>
//                         <th>Address</th>
//                         <th>Total</th>
//                         <th>Order Date</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {orders.map((order) => (
//                         <tr key={order.OrderId}>
//                             <td>{order.OrderId}</td>
//                             <td>{order.CustomerName}</td>
//                             <td>{order.Email}</td>
//                             <td>{order.Address}</td>
//                             <td>${order.Total}</td>
//                             <td>{order.OrderDate}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>       

//         </div>
//     );
// }



import ProductForm from "../Components/ProductForm";
import { useState, useEffect } from "react";
import { fetchProducts, addProduct, deleteProduct } from "../lib/Api";
import "./Admin.css"; // Import CSS

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
                setOrders(data);
            } catch (error) {
                console.error("Error fetching orders:", error);
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

    return (
        <div className="admin-container">
            <h2>{selectedProduct ? "Edit Product" : "Add a Product"}</h2>
            <div className="product-form">
                <ProductForm selectedProduct={selectedProduct} onProductAdded={handleAddProduct} />
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
