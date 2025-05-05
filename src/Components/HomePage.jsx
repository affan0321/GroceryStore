import './HomePage.css'
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
            <div>
                <div>
                    <SimpleSlider />
                </div>
            </div>

            <div style={{ marginTop: "40px" }}>
                <div>
                    <BrandsCarousel />
                </div>
            </div>

        </div>

    );
}


