import React from 'react'
import { Link } from 'react-router-dom';
import './Cart.css'
import { cardInfo } from './Cart_data';

const Cards = () => {
    const renderCard = (card, index) => {
        return (
          <>
            <div className='card-container'>
              <div className="card-image">
              <img src={card.image} alt="This is  book image"/>
              </div>
              <div className="card-body">
                <div className="card-title">
                <h3>{card.title}</h3>
                </div>
                <div className="card-price">
                    <p>{card.price}</p>
                </div>
                
                <div className="card-text">
                    <p>{card.text}</p>
                </div>
    
              </div>
            </div>
          </>
        );
      };
    return <div className="card-main-body">{cardInfo.map(renderCard)}</div>;
}

export default Cards