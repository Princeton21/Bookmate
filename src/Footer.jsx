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
  	 				<Link to="#"><i class="fab fa-facebook-f"></i></Link>
  	 				<Link to="#"><i class="fab fa-twitter"></i></Link>
  	 				<Link to="#"><i class="fab fa-instagram"></i></Link>
  	 				<Link to="#"><i class="fab fa-linkedin-in"></i></Link>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>

  
    );
}

export default Footer