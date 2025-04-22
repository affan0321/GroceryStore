import './HomePage.css'
import { Link } from "react-router-dom";
import NavbarCart from './Cart';
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
                <div className='div4'>
                    <img src="https://thumbs.dreamstime.com/b/supermarket-vegetables-vegetable-store-food-grocery-background-59070028.jpg" alt="" />
                </div>
                <div className='div5'>
                    <h1>Fresh Groceries Delivered to <br /> Your Door</h1> <br />
                    <p>Discover quality products at affordable prices with our convenient online <br /> grocery shoping experience</p> <br />
                    <button className='btn1'>Shop Now</button>
                </div>
            </div>
            <div>
                <div class="blue-box">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXpnMQ-aQyxLGD68dIAg-r2rtfsPAfUwjl2Q&s" alt="Grocery Store" class="image"/>
                </div>
            

            </div>

        </div>

    );
}


