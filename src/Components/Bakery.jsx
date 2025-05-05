// import { useState, useEffect } from "react";
// import { fetchProducts } from "../lib/Api";

// export default function Bakery() {
//     const [bakery, setBakery] = useState([]);

//     useEffect(() => {
//         const loadProducts = async () => {
//             const data = await fetchProducts();
//             console.log("Fetched Products:", data);
//             // setFruits(data.filter(product => product.category === "Fresh Produce"));
//             setBakery(data.filter(product => product.category.trim().toLowerCase() === "bakery & snacks"));
//         };

//         loadProducts();
//     }, []);

//     return (
//         <div>
//             <h2>Bakery</h2>
//             <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//                 {bakery.map((product) => (
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
    const [bakery, setBakery] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const data = await fetchProducts();
            setBakery(data.filter(product => product.category.trim().toLowerCase() === "bakery & snacks"));
        };

        loadProducts();
    }, []);

    return (
        <div>
            <h2>Bakery</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {bakery.map((product) => (
                    <div key={product.ProductId} style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "15px", width: "200px", textAlign: "center" }}>
                        <img src={product.imageURL} alt={product.name} style={{ width: "100%", height: "150px", borderRadius: "10px" }} />
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                        <button 
                            onClick={() => addToCart(product)} // ✅ Fix: Call addToCart correctly
                            style={{ marginTop: "10px", backgroundColor: "green", color: "white" }}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
