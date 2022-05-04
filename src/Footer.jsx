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
                Platform to connect seniors with juniors. Where old books of seniors can be sell to the juniors at huge discount price.
           </p>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Quick Links</h4>
  	 			<ul>
            <li><Link to="#">Home</Link></li>
  	 				<li><Link to="/sell">Sell</Link></li>
  	 				<li><Link to="/login">Login</Link></li>
  	 				<li><Link to="/cart">Carts</Link></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Year</h4>
  	 			<ul>
  	 				<li><Link to="/cart">FE</Link></li>
  	 				<li><Link to="/cart">SE</Link></li>
  	 				<li><Link to="/cart">TE</Link></li>
  	 				<li><Link to="/cart">BE</Link></li>
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