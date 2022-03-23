import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './MegaMenu.css'
import img from './assets/images/12.jpg'
const MegaMenu = () => {
  const [click, setClick] = useState(false);
  const handleClick  = () => setClick(!click);


  return (
  <>
  <div className="menu-body"></div>
   <div class="main-menu">
      <ul class="menu-links">
        <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
        <li>
          <Link to="/" class="desktop-item" onClick={handleClick}>Categories</Link>
          <label for="showMega" class="mobile-item">Mega Menu</label>
          <div class="mega-box">
            <div class="content">
              <div class="row">
                <img src={img} alt="book" />
              </div>
              <div class="row">
                <h2>Genres</h2>
                <ul class="mega-links">
                  <li><Link to="/action">Action</Link></li>
                  <li><Link to="/thriller">Thriller</Link></li>
                  <li><Link to="/romance">Romance</Link></li>
                  <li><Link to="/sci-fi">Sci fi</Link></li>
                </ul>
              </div>
              <div class="row">
                <h2>Year</h2>
                <ul class="mega-links">
                  <li><Link to="/">FE</Link></li>
                  <li><Link to="/">SE</Link></li>
                  <li><Link to="/">TE</Link></li>
                  <li><Link to="/">BE</Link></li>
                </ul>
              </div>
              <div class="row">
                <h2>Subjects</h2>
                <ul class="mega-links">
                  <li><Link to="/mathematics">Mathematics</Link></li>
                  <li><Link to="/datastructures">Data Structures</Link></li>
                  <li><Link to="/software_eng">Software Engg</Link></li>
                  <li><Link to="/digital_elec">Digital Electronics</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li><Link to="/bestsellers">Best Sellers</Link></li>
        <li><Link to="/trending">Trending</Link></li>
        <li><Link to="/newreleases">New Releases</Link></li>
      </ul>
      <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
    </div>
  </>
  )
}

export default MegaMenu