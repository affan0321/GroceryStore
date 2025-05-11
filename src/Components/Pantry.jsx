// import { useState, useEffect } from "react";
// import { fetchProducts } from "../lib/Api";

// export default function Pantry() {
//     const [pantry, setPantry] = useState([]);

//     useEffect(() => {
//         const loadProducts = async () => {
//             const data = await fetchProducts();
//             console.log("Fetched Products:", data);
//             // setFruits(data.filter(product => product.category === "Fresh Produce"));
//             setPantry(data.filter(product => product.category.trim().toLowerCase() === "pantry essentials"));
//         };

//         loadProducts();
//     }, []);

//     return (
//         <div>
//             <h2>Pantry</h2>
//             <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//                 {pantry.map((product) => (
//                     <div key={product.ProductId} style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "15px", width: "200px", textAlign: "center" }}>
//                         <img src={product.imageURL} alt={product.name} style={{ width: "100%", height: "150px", borderRadius: "10px" }} />
//                         <h3>{product.name}</h3>
//                         <p>Price: ${product.price}</p>
//                         <button style={{ marginTop: "10px", backgroundColor: "green", color: "white" }}>Add to Cart</button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }


import { useState, useEffect } from "react";
import { fetchProducts } from "../lib/Api";

export default function FreshProduce({ addToCart }) { // ✅ Fix: Accept addToCart function
    const [pantry, setPantry] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const data = await fetchProducts();
            setPantry(data.filter(product => product.category.trim().toLowerCase() === "pantry essentials"));
        };

        loadProducts();
    }, []);

    return (
        <div>
            <h2>Pantry</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px",width:"90%",margin:"0 auto" }}>
                {pantry.map((product) => (
                     <div className="card" key={product.ProductId}>
                     <span className="badge">Fresh</span>
                     <img src={product.imageURL} alt={product.name} />
                     <div className="card-body">
                       <h3 className="card-title">{product.name}</h3>
                       <p className="card-price">${product.price}</p>
                       <button className="card-button" onClick={() => addToCart(product)}>
                         Add to Cart
                       </button>
                     </div>
                   </div>
                ))}
            </div>
        </div>
    );
}
