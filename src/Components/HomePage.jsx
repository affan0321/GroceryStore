import './HomePage.css'
import { Link } from "react-router-dom";
import NavbarCart from './Cart';
import SimpleSlider from './Slick';
import BrandsCarousel from './BrandsCarousel';
export default function HomePage() {
    return (
        <div>
            <div className='div3'>
                <div className='div1'>
                    <div>
                        <h1>Green Store</h1>
                    </div>
                    <div>
                        <ul className='ul'>
                            <li>Home</li>
                            <li>Fruits</li>
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
        </div>

    );
}


