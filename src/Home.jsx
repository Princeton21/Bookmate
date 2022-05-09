import React from 'react'
import "./CSS/Home.css";
import MegaMenu from './Components/Home/Menu/MegaMenu';
import Cards from './Components/Cards/Cards';
import Slider from './Components/Slider/Slider';
import Footer from './Footer';
import CardsMain from './Components/Cards/CardsMain';
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
        
      </div>
      <div className="home-cards">
        <Cards/>
      </div>
    <CardsMain/>
    </div>
    <Footer/>
    </>
  )
}
export default Home