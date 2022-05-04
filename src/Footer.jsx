import React from 'react'
import { Link } from 'react-router-dom';
import './CSS/Footer.css'
const Footer = () => {
  return  (
    <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>Abous us</h4>
  	 			<p>
             Bookmate is a platform where we are aimed to provide books to the needy.
             You can also sell and buy the second hand books.
           </p>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Quick Links</h4>
  	 			<ul>
            <li><Link to="#">Home</Link></li>
  	 				<li><Link to="#">Sell</Link></li>
  	 				<li><Link to="#">Login</Link></li>
  	 				<li><Link to="#">Carts</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>My Account</h4>
  	 			<ul>
  	 				<li><Link to="#">Shopping Cart</Link></li>
  	 				<li><Link to="#">Order History</Link></li>
  	 				<li><Link to="#">Wish List</Link></li>
  	 				<li><Link to="#">Settings</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="https://www.facebook.com"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="https://twitter.com"><i class="fab fa-twitter"></i></a>
  	 				<a href="https://www.instagram.com"><i class="fab fa-instagram"></i></a>
  	 				<a href="https://www.linkedin.com"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>

  
    );
}

export default Footer