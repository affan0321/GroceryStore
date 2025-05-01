import './HomePage.css'
import { Link } from "react-router-dom";
import NavbarCart from './Cart';
import SimpleSlider from './Slick';
import BrandsCarousel from './BrandsCarousel';
import { fetchProducts } from '../lib/Api';
import { useState, useEffect } from "react";
export default function HomePage() {
    const [fruits, setFruits] = useState([]);
    const [vegetables, setVegetables] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const fruitData = await fetchProducts("Fruits");
            const vegetableData = await fetchProducts("Vegetables");
            setFruits(fruitData);
            setVegetables(vegetableData);
        };

        loadProducts();
    }, []);
    return (
        <div>
            <div className='div3'>
                <div className='div1'>
                    <div>
                        <h1>Green Store</h1>
                    </div>
                    <div>
                        <ul className='ul'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/fruits">Fruits</Link></li>
                            <li>Vegetables</li>
                            <li>Tea</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className='div2'>
                        <Link className='link' to="/signup">Signup</Link>
                        <Link className='link' to="/login">Login</Link>
                        <NavbarCart />
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <SimpleSlider />
                </div>
            </div>

            <div style={{marginTop:"40px"}}>
                <div>
                    <BrandsCarousel />
                </div>
            </div>

            <h2>Fruits</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {fruits.map((product) => (
                    <div key={product.ProductId} style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "15px", width: "200px", textAlign: "center" }}>
                        <img src={product.imageURL} alt={product.name} style={{ width: "100%", height: "150px", borderRadius: "10px" }} />
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                        <button style={{ marginTop: "10px", backgroundColor: "green", color: "white" }}>Add to Cart</button>
                    </div>
                ))}
            </div>

            <h2>Vegetables</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {vegetables.map((product) => (
                    <div key={product.ProductId} style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "15px", width: "200px", textAlign: "center" }}>
                        <img src={product.imageURL} alt={product.name} style={{ width: "100%", height: "150px", borderRadius: "10px" }} />
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                        <button style={{ marginTop: "10px", backgroundColor: "green", color: "white" }}>Add to Cart</button>
                    </div>
                ))}
            </div>

        </div>

    );
}


