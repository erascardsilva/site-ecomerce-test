import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerIndustria = () => {
  const products = [
    {
        image: "./assecs/carga.webp",
        phrase: "Carga",
        price: "R$720.00",
      },
      {
        image: "./assecs/Bannerdutos.webp",
        phrase: "AnalistaDutos",
        price: "R$230.00",
      },
      {
        image: "./assecs/BannerInspetor.webp",
        phrase: "Inspetor",
        price: "R$225.00",
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
          image: "./assecs/LogiUtilita.webp",
          phrase: "Motorista",
          price: "R$275.00",
        },
        {
          image: "./assecs/LogiEmpilha.webp",
          phrase: "Empilhadeira",
          price: "R$650.00",
        },
        {
          image: "./assecs/LogiLanterna.webp",
          phrase: "Plataforma",
          price: "R$505.00",
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

export default BannerIndustria;
