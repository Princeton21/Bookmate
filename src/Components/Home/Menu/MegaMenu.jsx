import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './MegaMenu.css'
import img from '../assets/images/12.jpg'
const MegaMenu = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setDropdown(!dropdown);

  return (
  <>
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
  </>
  )
}

export default MegaMenu