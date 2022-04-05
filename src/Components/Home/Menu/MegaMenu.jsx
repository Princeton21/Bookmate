import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './MegaMenu.css'
import img from './assets/images/12.jpg'
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
                <img src={img} alt="book" />
              </div>
              <div className="row">
                <h2>Genres</h2>
                <ul className="mega-links">
                  <li><Link to="/action">Action</Link></li>
                  <li><Link to="/thriller">Thriller</Link></li>
                  <li><Link to="/romance">Romance</Link></li>
                  <li><Link to="/sci-fi">Sci fi</Link></li>
                </ul>
              </div>
              <div className="row">
                <h2>Year</h2>
                <ul className="mega-links">
                  <li><Link to="/">FE</Link></li>
                  <li><Link to="/">SE</Link></li>
                  <li><Link to="/">TE</Link></li>
                  <li><Link to="/">BE</Link></li>
                </ul>
              </div>
              <div className="row">
                <h2>Subjects</h2>
                <ul className="mega-links">
                  <li><Link to="/mathematics">Mathematics</Link></li>
                  <li><Link to="/datastructures">Data Structures</Link></li>
                  <li><Link to="/software_eng">Software Engg</Link></li>
                  <li><Link to="/digital_elec">Digital Electronics</Link></li>
                </ul>
              </div>
            </div>
            </div>
          </div>
        </li>
        <li><Link to="/bestsellers">Best Sellers</Link></li>
        <li><Link to="/trending">Trending</Link></li>
        <li><Link to="/newreleases">New Releases</Link></li>
      </ul>
    </div>
  </>
  )
}

export default MegaMenu