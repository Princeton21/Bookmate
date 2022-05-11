import React,{useState} from 'react';
import './CSS/Navbar.css';
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {AiOutlineShoppingCart} from 'react-icons/ai'



import { auth } from './Firebase/Utilities';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = ({user}) => {
  
  // const history = useHistory();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut().then(() => {
        // history.push('/login');
        navigate('/login1');
    })
}
  
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
            {!user && <div className='rightside'>
                {/* <span><Link to="signup" className='navlink'>SIGN UP</Link></span> */}
                {/* <span><Link to="login" className='navlink'>LOGIN</Link></span> */}
                <Link className="nav-link" to="/login1">Login</Link>
            </div>}


              

            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
            
            <Link className="nav-link" to="/cart">Cart</Link>
            
            </li>
            <li>
            {user && <div className='rightside'>
                <span><Link to="/" className='navlink'>{user}</Link></span>
                <span><button className='logout-btn' onClick={handleLogout}>Logout</button></span>
            </div>}
            </li>
          </ul>
        </div>
      </nav>
    </div>
      </>
      
  )
}

export default Navbar