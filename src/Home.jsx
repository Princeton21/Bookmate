import React from 'react'
import "./CSS/Home.css";
import MegaMenu from './Components/Home/Menu/MegaMenu';
import Slider from './Components/Slider/Slider';
import Footer from './Footer';
import CardsMain from './Components/Cards/CardsMain';
import HomeCards from './Components/Cards/HomeCards';
import Navbar from './Navbar';
const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="home-container">
      {/* <div className="home-menu">
        <MegaMenu/>
      </div> */}
      <div className="menu-slider">
        <Slider/>
      </div>
      <div className="home-content">
        
      </div>
      <div className="home-cards">
        <HomeCards/>
      </div>
    <CardsMain/>
    </div>
    <Footer/>
    </>
  )
}
export default Home