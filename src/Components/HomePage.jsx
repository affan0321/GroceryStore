import './HomePage.css'
import SimpleSlider from './Slick';
import BrandsCarousel from './BrandsCarousel';
import { fetchProducts } from '../lib/Api';
import { useState, useEffect } from "react";
import Customers from './Customers';
import Odometer from './Odometer';
import { Link } from 'react-router-dom';

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
                    <h1 style={{ textAlign: "center", fontSize: "38px", marginTop: "40px" }}>Top Brands</h1>
                    <BrandsCarousel />
                </div>
            </div>

            <div className='div4'>
                <div>
                    <img className='img1' style={{width:"100%",height:"400px",borderRadius:"20px"}} src="https://c0.wallpaperflare.com/preview/1013/496/951/mockup-bakery-bread-pastry.jpg" alt="" />
                    <h1 className='h1'>Baked with Love</h1>
                    <button className='btn5'><Link style={{textDecoration:"none"}} to="/Bakery">Shop Now</Link></button>
                </div>
            </div>

            <div>
                <div>
                    <h1 style={{ textAlign: "center", marginTop: "40px", fontSize: "38px" }}>Customers Feedback</h1>
                    <Customers />
                </div>
            </div>
            <div style={{backgroundColor:"#e7f3e8",marginTop:"70px"}}>
                <div>
                <h1 style={{textAlign:'center',paddingTop:"70px",fontSize:"38px"}}>Our Potential</h1>
                </div>
            <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",gap:"100px",flexWrap:"wrap",width:"90%",margin:"0 auto"}}>
                <div>
                    <Odometer targetNumber={10} duration={2} />
                    <h1>Years Of Legacy</h1>
                </div>
                <div>
                    <Odometer targetNumber={10} duration={2} />
                    <h1>Stores</h1>
                </div>
                <div>
                    <Odometer targetNumber={100} duration={2} />
                    <h1>Showcasing Brands</h1>
                </div>
                <div>
                    <Odometer targetNumber={500} duration={2} />
                    <h1>Employees</h1>
                </div>
                <div>
                    <Odometer targetNumber={5} duration={2} />
                    <h1>Cities</h1>
                </div>
                <div>
                    <Odometer targetNumber={3000} duration={2} />
                    <h1>Loyal Customers</h1>
                </div>
            </div>
            </div>

        </div>

    );
}


