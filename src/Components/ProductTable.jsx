
// import ProductRow from "./ProductRow";
// import './ProductTable.css';

// export default function ProductTable({ products, onDelete, onEdit }) {
//     return (
//         <table>
//             <thead>
//                 <tr>
//                     <th>Product Name</th>
//                     <th>Unit</th>
//                     <th>Price</th>
//                     <th>Action</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {products.map((product) => (
//                     <ProductRow key={product.ProductId} product={product}  onDelete={onDelete} onEdit={onEdit} />
//                 ))}
//             </tbody>
//         </table>
//     );
// }



// import React from "react";

// export default function ProductTable({ products, onDelete, onEdit }) {
//     return (
//         <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//             {products.map((product) => (
//                 <div key={product.ProductId} style={{ 
//                     border: "1px solid #ddd", 
//                     borderRadius: "10px", 
//                     padding: "15px", 
//                     width: "200px", 
//                     textAlign: "center" 
//                 }}>
//                     <img 
//                         src={product.imageURL} 
//                         alt={product.name} 
//                         style={{ width: "100%", height: "150px", borderRadius: "10px" }} 
//                     />
//                     <h3>{product.name}</h3>
//                     <p>Price: ${product.price}</p>
//                     <button onClick={() => onEdit(product)}>Edit</button>
//                     <button onClick={() => onDelete(product.ProductId)} style={{ marginLeft: "10px", color: "red" }}>Delete</button>
//                     <button style={{ marginTop: "10px", backgroundColor: "green", color: "white" }}>Add to Cart</button>
//                 </div>
//             ))}
//         </div>
//     );
// }

import "./ProductTable.css"; // Ensure this is correctly imported
import ProductRow from "./ProductRow";

export default function ProductTable({ products, onDelete, onEdit }) {
    return (
        <table className="styled-table">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Unit</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <ProductRow key={product.ProductId} product={product} onDelete={onDelete} onEdit={onEdit} />
                ))}
            </tbody>
        </table>
    );
}
