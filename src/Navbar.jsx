import React,{useState} from 'react';
import './CSS/Navbar.css';
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

const Navbar = () => {
  
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setDropdown(!dropdown);
  
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

            <div classNameName="menu-body"></div>
   <div className="main-menu">
      <ul className="menu-links">
        <li>
          <Link to="/" className="desktop-item" onClick={handleClick}>Categories</Link>

          <div className={dropdown ? "mega-bx-active":"mega-bx-inactive"}>
          <div className="mega-box">
            <div className="content">
              <div className="row">
                <h2>Department</h2>
                <ul className="mega-links">
                  <li><Link to="/ENTC">ENTC</Link></li>
                  <li><Link to="/Computer">Computer</Link></li>
                  <li><Link to="/Mechanical">Mechanical</Link></li>
                  <li><Link to="/Civil">Civil</Link></li>
                  <li><Link to="/Civil">AI</Link></li>
                  <li><Link to="/Civil">IT</Link></li>
                </ul>
              </div>
            </div> 
            </div>
          </div>
        </li>
        </ul>
    </div>
            
          </ul>
        </div>
      </nav>
    </div>
      </>
      
  )
}

export default Navbar