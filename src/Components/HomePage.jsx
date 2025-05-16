import './HomePage.css'
import SimpleSlider from './Slick';
import BrandsCarousel from './BrandsCarousel';
import { fetchProducts } from '../lib/Api';
import { useState, useEffect } from "react";
import Customers from './Customers';
import Odometer from './Odometer';
import { Link } from 'react-router-dom';
import TrendingProducts from './TrendingProducts';
import TopSelling from './TopSelling';
import Footer from './Footer';

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
                    <img className='img1' style={{ width: "100%", height: "400px", borderRadius: "20px" }} src="https://c0.wallpaperflare.com/preview/1013/496/951/mockup-bakery-bread-pastry.jpg" alt="" />
                    <h1 className='h1'>Baked with Love</h1>
                    <button className='btn5'><Link style={{ textDecoration: "none" }} to="/Bakery">Shop Now</Link></button>
                </div>
            </div>

            <div>
                <h1 style={{ textAlign: "center",marginTop:"30px",marginBottom:"30px" }}>Trending Products</h1><br />
                <TrendingProducts /> <br />
            </div>



            <div style={{marginTop:"100px",marginBottom:"100px"}} className='div5'>
                <div>
                    <img className='img1' style={{ width: "100%", height: "400px", borderRadius: "20px" }} src="https://png.pngtree.com/thumb_back/fh260/background/20240419/pngtree-supermarket-commercial-refrigerators-freezer-showing-frozen-foods-abstract-blur-background-image_15664722.jpg" alt="" />
                    <h1>Freshly Baked & Farm Fresh <br /> The Perfect Grocery Duo</h1>
                    <button className='btn6'><Link style={{ textDecoration: "none" }} to="/freshProducts">Shop Now</Link></button>
                </div>
            </div>

            <div style={{marginTop:"30px",marginBottom:"100px"}}>
                <h1 style={{ textAlign: "center",marginTop:"30px",marginBottom:"30px" }}>Top Selling</h1><br />
                <TopSelling /> <br />
            </div>

            <div style={{ width: "80%", margin: "0 auto", marginTop: "30px", marginBottom: "100px" }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "30px" }}>
                    <div className='div8' style={{ height: "240px", borderRadius: "20px" }}>
                        <h1 style={{ textAlign: "center" }}>💳</h1><br />
                        <h4 style={{ textAlign: "center" }}>Transparent Pricing & Fair Value</h4><br />
                        <p style={{ textAlign: "center" }}>We believe in honest pricing with no hidden costs—just great value for every item you buy.Our commitment is to provide affordable essentials while ensuring top-quality products for your everyday needs.</p>
                    </div>
                    <div className='div8' style={{ height: "240px", borderRadius: "20px" }}>
                        <h1 style={{ textAlign: "center" }}>🚀</h1><br />
                        <h4 style={{ textAlign: "center" }}>Fast & Reliable Delivery</h4> <br />
                        <p style={{ textAlign: "center" }}>Enjoy hassle-free shopping with quick delivery right to your doorstep. Whether it’s a last-minute meal ingredient or weekly groceries, we ensure on-time service so you never run out of essentials.</p>
                    </div>
                    <div className='div8' style={{ height: "240px", borderRadius: "20px" }}>
                        <h1 style={{ textAlign: "center" }}>🍎</h1><br />
                        <h4 style={{ textAlign: "center" }}>Fresh & Quality Produce</h4> <br />
                        <p style={{ textAlign: "center" }}>We source the freshest fruits and vegetables straight from trusted farms, ensuring top-notch quality with every purchase. Every item is handpicked for peak freshness and flavor to keep your meals delicious and nutritious.</p>
                    </div>
                </div>
            </div>


            <div>
                <div>
                    <h1 style={{ textAlign: "center", marginTop: "40px", fontSize: "38px" }}>Customers Feedback</h1>
                    <Customers />
                </div>
            </div>
            <div style={{ backgroundColor: "#e7f3e8", marginTop: "70px" }}>
                <div>
                    <h1 style={{ textAlign: 'center', paddingTop: "70px", fontSize: "38px" }}>Our Potential</h1>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", gap: "100px", flexWrap: "wrap", width: "90%", margin: "0 auto" }}>
                    <div>
                        <Odometer targetNumber={10} duration={2} />
                        <h1 style={{ textAlign: "center" }}>Years Of Legacy</h1>
                    </div>
                    <div>
                        <Odometer targetNumber={10} duration={2} />
                        <h1 style={{ textAlign: "center" }}>Stores</h1>
                    </div>
                    <div>
                        <Odometer targetNumber={100} duration={2} />
                        <h1 style={{ textAlign: "center" }}>Showcasing Brands</h1>
                    </div>
                    <div>
                        <Odometer targetNumber={500} duration={2} />
                        <h1 style={{ textAlign: "center" }}>Employees</h1>
                    </div>
                    <div>
                        <Odometer targetNumber={5} duration={2} />
                        <h1 style={{ textAlign: "center" }}>Cities</h1>
                    </div>
                    <div>
                        <Odometer targetNumber={3000} duration={2} />
                        <h1 style={{ textAlign: "center" }}>Loyal Customers</h1>
                    </div>
                </div>
            </div>
            <br />
            <br />

        </div>

    );
}


