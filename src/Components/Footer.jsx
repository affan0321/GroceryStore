import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                
                <div className="footer-section">
                    <h4>More Value, More Joy</h4>
                    <p>📍 ABC Karachi</p>
                    <p>📞 Call us: +92 335-1777-464</p>
                    <p>✉️ Email: <a href="mailto:support@greenstore.com.pk">support@greenstore.com.pk</a></p>
                </div>

                
                <div className="footer-section">
                    <h4>About Green Store</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Store Locator</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>

                
                <div className="footer-section">
                    <h4>Customer Service</h4>
                    <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Return & Exchange</a></li>
                        <li><a href="#">Shipping Policy</a></li>
                    </ul>
                </div>

                
                <div className="footer-section">
                    <h4>Information</h4>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>
            </div>

            
            <div className="footer-bottom">
                <p>© 2025 Green Store. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
