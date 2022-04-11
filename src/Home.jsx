import React from 'react'
import "./CSS/Home.css";
import MegaMenu from './Components/Home/Menu/MegaMenu';
import Cards from './Components/Cards/Cards';
import Slider from './Components/Slider/Slider';
const Home = () => {
  return (
    <>
    <div className="home-container">
      <div className="home-menu">
        <MegaMenu/>
      </div>
      <div className="menu-slider">
        <Slider/>
      </div>
      <div className="home-content">
        <h1>Welcome to our Website</h1>
      </div>
      <div className="home-cards">
        <Cards/>
      </div>

    </div>
    </>
  )
}
export default Home