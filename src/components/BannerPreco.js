import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerPreco = () => {
  const products = [
    {
      image: "./assecs/ObraAgent.webp",
      phrase: "Segurança",
      price: "R$320.00",
    },
    {
      image: "./assecs/ObraCalef.webp",
      phrase: "Calefador",
      price: "R$230.00",
    },
    {
      image: "./assecs/ObraAlmoxa.webp",
      phrase: "Almoxarife",
      price: "R$525.00",
    },
    {
        image: "./assecs/ObraEnge.webp",
        phrase: "Engenheiro",
        price: "R$630.00",
      },
      {
        image: "./assecs/ObraLimpeza.webp",
        phrase: "Limpeza",
        price: "R$150.00",
      },
      {
        image: "./assecs/ObraMeio.webp",
        phrase: "Meio Ofic",
        price: "R$230.00",
      },
      {
        image: "./assecs/ObraMoto.webp",
        phrase: "Motoserra",
        price: "R$275.00",
      },
      {
        image: "./assecs/ObraOperador.webp",
        phrase: "Operador",
        price: "R$350.00",
      },
      {
        image: "./assecs/ObraPlat.webp",
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

export default BannerPreco;
