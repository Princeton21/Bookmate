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
import './Cards.css'
import { cardInfo } from './Card_data';
const Cards = () => {
    const renderCard = (card, index) => {
        return (
          <>
          <div className="container">
            <main className="grid">
                <article>
                    <img src={card.image} alt=""/>
                    <div className="text">
                        <h3>{card.title}</h3>
                        <p>{card.text}</p>
                        <button>Button 1</button>
                    </div>
              </article>
            </main>
          </div>
          </>
        );
      };
    return <div className="card-main-body">{cardInfo.map(renderCard)}</div>;
}

export default Cards