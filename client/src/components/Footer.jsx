import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer-container">

              
                <div class="footer-col">
                    <h3>CarHub</h3>
                    <p>Your trusted platform to buy new and used cars at the best prices.</p>
                </div>

                
                <div class="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Cars</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                
                <div class="footer-col">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#">Buy Car</a></li>
                        <li><a href="#">Sell Car</a></li>
                        <li><a href="#">Car Finance</a></li>
                        <li><a href="#">Insurance</a></li>
                    </ul>
                </div>

               
                <div class="footer-col">
                    <h4>Contact</h4>
                    <p>Email: support@carhub.com</p>
                    <p>Phone: +91 98765 43210</p>
                </div>

            </div>

            <div class="footer-bottom">
                © 2025 CarHub. All rights reserved.
            </div>
        </footer>

    )
}

export default Footer