import React from 'react'
import { FaFacebook , FaInstagram , FaGithub , FaLinkedin , FaTwitterSquare} from "react-icons/fa";
// import './footercss.css'
import './CSS/Footer.css'


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
            <li><a href="#">about us</a></li>
            <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
          
          </ul>
        </div>
        <div class="footer-col">
          <h4>get help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">shipping</a></li>
            <li><a href="#">returns</a></li>
            <li><a href="#">order status</a></li>
            <li><a href="#">payment options</a></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h4>follow us</h4>
          <div class="social-links">
          {/* <FaFacebook size='40px' style={ {padding : '1%'}}
                  onClick={handleURL('https://www.facebook.com')}/> */}
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