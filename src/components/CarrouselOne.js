import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarrouselAutomatico() {
  return (
    <Carousel interval={5000}>
      <Carousel.Item>
        <img className="d-block w-100" src="../assecs/carr1.webp" alt="Primeira imagem" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="../assecs/carr2.webp" alt="Segunda imagem" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <img className="d-block w-100" src="../assecs/carr3.webp" alt="Segunda imagem" />
        <Carousel.Caption>
          
        </Carousel.Caption>
    </Carousel>
    
  );
}

export default CarrouselAutomatico;
