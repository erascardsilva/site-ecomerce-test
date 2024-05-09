import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerEventos = () => {
  const products = [
    {
      image: "./assecs/eseguranca.webp",
      phrase: "Segurança",
      price: "R$520.00",
    },
    {
      image: "./assecs/egarcon.webp",
      phrase: "Garçon",
      price: "R$130.00",
    },
    {
      image: "./assecs/ecozinheiro.webp",
      phrase: "Cozinheiro",
      price: "R$520.00",
    },
    
      {
        image: "./assecs/LogiMotorista.webp",
        phrase: "Motorista",
        price: "R$850.00",
      },
      {
        image: "./assecs/LogiRecepcao.webp",
        phrase: "Recepção",
        price: "R$430.00",
      },
      {
        image: "./assecs/ecopeira.webp",
        phrase: "Copeira",
        price: "R$175.00",
      },
      {
        image: "./assecs/ebarman.webp",
        phrase: "Barman",
        price: "R$250.00",
      },
      {
        image: "./assecs/ebilheteiro.webp",
        phrase: "Bilheteiro",
        price: "R$105.00",
      },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      {products.map((product, index) => (
        <div key={index} style={{ textAlign: "center" , margin: "0 10px"}}>
          <img src={product.image} alt={product.phrase} style={{ maxWidth: "80%", height: "auto" ,borderRadius: "5%" }} />
          <h3>{product.phrase}</h3>
          <p style={{ color: "red", fontWeight: "bold"  }}>{product.price}</p>
          <button style={{ backgroundColor: "red", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", textAlign: "center" }}>Contratar</button>
        </div>
      ))}
    </Slider>
  );
};

export default BannerEventos;
