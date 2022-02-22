import React from 'react';
import './CSS/Navbar.css';

const Navbar = () => {
  return (
      <>
        <div className="nav-list">
          <ul>
            <li><a href="/" className="home">Home</a></li>
            <li><a href="/buy" className="buy">Buy</a></li>
            <li><a href="donate" className="donate">Donate</a></li>
            <li><a href="contact" className="contact">Contact</a></li>
          </ul>
        </div>
      </>
      
  )
}

export default Navbar