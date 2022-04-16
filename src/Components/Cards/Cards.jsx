// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Card } from 'react-bootstrap';
// import './Cards.css'
// import { cardInfo } from './Card_data';
// const Cards = () => {
//     const renderCard = (card, index) => {
//         return (
//             <div className="card-single">
//           <Card style={{ width: "18rem" }} key={index} >
//             <Card.Img variant="top"src={card.image} />
//             <Card.Body>
//               <Card.Title>{card.title}</Card.Title>
//               <Card.Text>{card.text}</Card.Text>
//             </Card.Body>
//           </Card>
//           </div>

//         );
//       };
//     return <div className="card-main-body">{cardInfo.map(renderCard)}</div>;
// }

// export default Cards
import React from 'react'
import { Link } from 'react-router-dom';
import './Cards.css'
import { cardInfo } from './Card_data';
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
                <div className="card-text">
                    <p>{card.text}</p>
                </div>
              </div>
              <div className="card-btn">
                <button>
                  <Link to='/' id='card-btn-link'>View more</Link>
                </button>
                </div>
            </div>
          </>
        );
      };
    return <div className="card-main-body">{cardInfo.map(renderCard)}</div>;
}

export default Cards