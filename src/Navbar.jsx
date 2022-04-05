import React from 'react';
import './CSS/Navbar.css';
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

const Navbar = () => {
  return (
      <>
        <div className='header'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">  BOOKMATE</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" ><FaBars size={25} color='white'/></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/sell">Sell<span className="sr-only"></span></Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">cart</Link>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
      </>
      
  )
}

export default Navbar