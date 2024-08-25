import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div>
      <footer class="footer">
    <div class="footer-container">
        <div class="footer-section about">
            <h2>Biryani-More</h2>
            <p>Your go-to place for the most delicious and authentic Biryani.</p>
        </div>
        <div class="footer-section links">
            <h2>Quick Links</h2>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </div>
        <div class="footer-section contact">
            <h2>Contact Us</h2>
            <p>Email: contact@biryani-more.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Flavor Street, Spice City, Country</p>
        </div>
        <div class="footer-section social">
            <h2>Follow Us</h2>
            <div class="social-icons">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        &copy; 2024 Biryani-More | Designed by YourName
    </div>
</footer>

    </div>
  )
}

export default Footer
