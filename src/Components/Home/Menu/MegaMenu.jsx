import React from 'react'
import { Link } from 'react-router-dom'
import './MegaMenu.css'
import img from './assets/images/12.jpg'
const MegaMenu = () => {
  return (
  <>
  <div className="menu-body"></div>
   <div class="main-menu">
      <ul class="menu-links">
        <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
        <li>
          <a href="#" class="desktop-item">Mega Menu</a>
          <label for="showMega" class="mobile-item">Mega Menu</label>
          <div class="mega-box">
            <div class="content">
              <div class="row">
                <img src={img} alt="book" />
              </div>
              <div class="row">
                <h2>Genres</h2>
                <ul class="mega-links">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Thriller</a></li>
                  <li><a href="#">Romance</a></li>
                  <li><a href="#">Sci fi</a></li>
                </ul>
              </div>
              <div class="row">
                <h2>Year</h2>
                <ul class="mega-links">
                  <li><a href="#">FE</a></li>
                  <li><a href="#">SE</a></li>
                  <li><a href="#">TE</a></li>
                  <li><a href="#">BE</a></li>
                </ul>
              </div>
              <div class="row">
                <h2>Subjects</h2>
                <ul class="mega-links">
                  <li><a href="#">Mathematics</a></li>
                  <li><a href="#">Data Structures</a></li>
                  <li><a href="#">Software Engg</a></li>
                  <li><a href="#">Digital Electronics</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li><Link to="/">Best Sellers</Link></li>
        <li><Link to="/">Trending</Link></li>
        <li><Link to="/">New Releases</Link></li>
      </ul>
      <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
    </div>
  </>
  )
}

export default MegaMenu