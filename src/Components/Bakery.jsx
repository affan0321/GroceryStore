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


// import { useState, useEffect } from "react";
// import { fetchProducts } from "../lib/Api";

// export default function FreshProduce({ addToCart }) { // ✅ Fix: Accept addToCart function
//     const [bakery, setBakery] = useState([]);

//     useEffect(() => {
//         const loadProducts = async () => {
//             const data = await fetchProducts();
//             setBakery(data.filter(product => product.category.trim().toLowerCase() === "bakery & snacks"));
//         };

//         loadProducts();
//     }, []);

//     return (
//         <div>
//             <h2>Bakery</h2>
//             <div style={{ display: "flex", flexWrap: "wrap", gap: "20px",width:"90%",margin:"0 auto" }}>
//                 {bakery.map((product) => (
//                     <div className="card" key={product.ProductId}>
//                     <span className="badge">Fresh</span>
//                     <img src={product.imageURL} alt={product.name} />
//                     <div className="card-body">
//                       <h3 className="card-title">{product.name}</h3>
//                       <p className="card-price">${product.price}</p>
//                       <button className="card-button" onClick={() => addToCart(product)}>
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//             </div>
//         </div>
//     );
// }



import { useState, useEffect } from "react";
import { fetchProducts } from "../lib/Api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./FreshProduce.css";
import SearchBar from "./SearchBar";

export default function FreshProduce({ addToCart }) {
    const [bakery,setBakery] = useState([]);
    const [filteredBakery, setFilteredBakery] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const data = await fetchProducts();
            const filteredData = data.filter(product => product.category.trim().toLowerCase() === "bakery & snacks");
            setBakery(filteredData);
            setFilteredBakery(filteredData); // ✅ Set filtered data initially
        };

        loadProducts();
    }, []);

    const handleSearch = (query) => {
        if (query) {
            const results = bakery.filter(product =>
                product.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredBakery(results);
        } else {
            setFilteredBakery(fruits); // ✅ Reset to all products when search is cleared
        }
    };

    const handleAddToCart = (product) => {
        addToCart(product);
        toast.success("Item has been added to the cart successfully!");
    };

    return (
        <div>
            <h2>Bakery</h2>

            {/* ✅ Add the SearchBar component */}
            {/* <SearchBar onSearch={handleSearch} /> */}
            <div style={{marginBottom:"30px"}}>
                        <SearchBar  onSearch={handleSearch} />
                        </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "70px", width: "90%", margin: "0 auto" }}>
                {filteredBakery.map((product) => (
                    <div className="card" key={product.ProductId}>
                        <span className="badge">Fresh</span>
                        <img src={product.imageURL} alt={product.name} />
                        <div className="card-body">
                            <h3 className="card-title">{product.name}</h3>
                            <p className="card-price">${product.price}</p>
                            <button className="card-button" onClick={() => handleAddToCart(product)}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
