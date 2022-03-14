import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from './assets/images/12.jpg';
import image2 from './assets/images/13.jpg';
import image3 from './assets/images/14.jpg';

const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Books are awesome!</h3>
          <p>Donate them right away and ignite the world</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>We know books</h3>
          <p>Books are all that we do</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Real bookshop</h3>
          <p>where needy gets the books at 0 cost price!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;