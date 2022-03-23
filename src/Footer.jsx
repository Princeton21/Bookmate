import React from 'react'
import { FaFacebook , FaInstagram , FaGithub , FaLinkedin , FaTwitterSquare} from "react-icons/fa";
// import './footercss.css'
import './CSS/Footer.css'
import { Link } from 'react-router-dom';


const handleURL = (url) => {
    return () => window.open(url , "_blank")
}

const Contact = () => {
  return  (
      
      
    <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="footer-col">
          <h4>company</h4>
          <ul>
            <li><Link to="about">about us</Link></li>
            <li><Link to="our services">our services</Link></li>
            <li><Link to="privacy policy">privacy policy</Link></li>
          
          </ul>
        </div>
        <div class="footer-col">
          <h4>get help</h4>
          <ul>
            <li><Link to="FAQ">FAQ</Link></li>
            <li><Link to="shipping">shipping</Link></li>
            <li><Link to="returns">returns</Link></li>
            <li><Link to="order status">order status</Link></li>
            <li><Link to="payment options">payment options</Link></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <div className="Follow"><h4>follow us</h4></div>
          <div class="social-links">
            <FaGithub size='40px' style={ {padding : '1%'}}
                  onClick={handleURL('https://www.github.com')}/>
            <FaInstagram size='40px' style={ {padding : '1%'}}
                  onClick={handleURL('https://www.instagram.com')}/>
            <FaLinkedin size='40px' style={ {padding : '1%'}}
                  onClick={handleURL('https://www.linkedin.com')}/>
          </div>
        </div>
      </div>
    </div>
 </footer>

  
    );
}

export default Contact