import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerEscritorio = () => {
  const products = [
    {
      image: "./assecs/EscritAuxiliar.webp",
      phrase: "Auxiliar ",
      price: "R$320.00",
    },
    
    {
      image: "./assecs/EscritoPleno.webp",
      phrase: "Pleno",
      price: "R$525.00",
    },
    
      {
        image: "./assecs/EscritoProducao.webp",
        phrase: "Produção",
        price: "R$250.00",
      },
      {
        image: "./assecs/LogiRecepcao.webp",
        phrase: "Recepção",
        price: "R$430.00",
      },
      {
        image: "./assecs/EscritoRecep.webp",
        phrase: "Recepcionista",
        price: "R$275.00",
      },
      {
        image: "./assecs/EscritoSecretaria.webp",
        phrase: "Secretaria",
        price: "R$450.00",
      }
      
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

export default BannerEscritorio;
