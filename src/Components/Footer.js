import React from "react";
import './Footer.css';
import { BsFacebook } from 'react-icons/bs';
import { RxTwitterLogo } from 'react-icons/rx';
import { RiYoutubeLine } from 'react-icons/ri';
import { BsInstagram } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { MdCardGiftcard } from 'react-icons/md';
import { RiAdvertisementLine } from 'react-icons/ri';
import { FiHelpCircle } from 'react-icons/fi';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-section">
                <div className="sub-sections">
                    <div className="about-section">
                        <h1>About</h1>
                        <a href="/contact"><p>Contact Us</p></a>
                        <a href="/about"><p>About Us</p></a>
                        <a href="/career"><p>Careers</p></a>
                    </div>
                    <div className="help-section">
                        <h1>Help</h1>
                        <a href="/payment"><p>Payments</p></a>
                        <a href="/shipping"><p>Shipping</p></a>
                        <a href="/cancellation"><p>Cancellation & Returns</p></a>
                        <a href="/faq"><p>Frequently Asked Questions</p></a>
                    </div>
                    <div className="social-section">
                        <h1>Social Links</h1>
                        <a href="https://www.facebook.com/flipkart"><p><BsFacebook /> FaceBook</p></a>
                        <a href="https://twitter.com/flipkart"><p><RxTwitterLogo /> Twitter</p></a>
                        <a href="https://www.youtube.com/flipkart"><p><RiYoutubeLine /> YouTube</p></a>
                        <a href="https://www.instagram.com/flipkart/?hl=en"><p><BsInstagram /> Instagram</p></a>
                    </div>
                    <div className="address-section">
                        <h1>Address</h1>
                        <a href="/address"><p>ALTUS, Laxman Nagar, Baner, Pune, Maharashtra</p></a>
                        <a href="/email"><p><MdOutlineEmail/> shraddha.bidwe@gmail.com</p></a> 
                    </div>
                </div>
                <div className="sub-footer">
                    <a href="/gift"><p><MdCardGiftcard /> Gift Cards</p></a>
                    <a href="/advertise"><p><RiAdvertisementLine /> Advertise</p></a>
                    <a href="/help"><p><FiHelpCircle /> Help Center</p></a>
                    <p>Copyright © 2023 Flipkart.com. All rights reserved.</p>
                   

                </div>
                
            </div>
            
        </div>

        
    )
        
    
}

export default Footer;