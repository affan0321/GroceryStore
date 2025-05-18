import { useState, useEffect } from "react";
import { fetchProducts } from "../lib/Api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./FreshProduce.css";
import SearchBar from "./SearchBar";

export default function FreshProduce({ addToCart }) {
    const [fruits, setFruits] = useState([]);
    const [filteredFruits, setFilteredFruits] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const data = await fetchProducts();
            const filteredData = data.filter(product => product.category.trim().toLowerCase() === "fresh & produce");
            setFruits(filteredData);
            setFilteredFruits(filteredData); 
        };

        loadProducts();
    }, []);

    const handleSearch = (query) => {
        if (query) {
            const results = fruits.filter(product =>
                product.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredFruits(results);
        } else {
            setFilteredFruits(fruits); 
        }
    };

    const handleAddToCart = (product) => {
        addToCart(product);
        toast.success("Item has been added to the cart successfully!");
    };

    return (
        <div>
            <h2>Fresh & Produce</h2>

            <div style={{marginBottom:"30px"}}>
            <SearchBar  onSearch={handleSearch} />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "70px", width: "90%", margin: "0 auto" }}>
                {filteredFruits.map((product) => (
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
