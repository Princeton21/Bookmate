import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import './Cards.css'
import img1 from '../Home/Menu/assets/images/12.jpg'
import img2 from '../Home/Menu/assets/images/13.jpg'
import img3 from '../Home/Menu/assets/images/14.jpg'
const Cards = () => {
    const cardInfo = [
        {image:img1,title:"Book number 1",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, sapiente?" },
        {image:img2,title:"Book number 2",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, sapiente?"},
        {image:img3,title:"Book number 3",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, sapiente?"},
        {image:img1,title:"Book number 4",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, sapiente?"},
    ];


    const renderCard = (card, index) => {
        return (
            <div className="card-single">
          <Card style={{ width: "18rem" }} key={index} >
            <Card.Img variant="top"src={card.image} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
            </Card.Body>
          </Card>
          </div>

        );
      };
    return <div className="card-main-body">{cardInfo.map(renderCard)}</div>;
}

export default Cards