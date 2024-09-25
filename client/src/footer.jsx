import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-sections">
                <div className="footer-column">
                    <h3>Explore</h3>
                    <ul>
                        <li>Home</li>
                        <li>Questions</li>
                        <li>Articles</li>
                        <li>Tutorials</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Support</h3>
                    <ul>
                        <li>FAQs</li>
                        <li>Help</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Stay connected</h3>
                    <div className="social-icons">
                        <FaFacebookF className="icon" />
                        <FaTwitter className="icon" />
                        <FaInstagram className="icon" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
            <div class="footer-email">
            <p>dev@deakin</p>
            </div>
            <div class="footer-legal-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms</a>
                <a href="#">Code of Conduct</a>
            </div>
            </div>
        </footer>
    );
};

export default Footer;
