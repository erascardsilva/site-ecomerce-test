import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../Menu.css";


const DivIcones = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    
    <Slider {...settings}>
      <div>
      <img src="./assecs/eneva.webp" alt="Imagem 1" />  
      </div>
      <div>
      <img src="./assecs/heineken.webp" alt="Imagem 2" />  
      </div>
      <div>
      <img src="./assecs/hilton.webp" alt="Imagem 3" />  
      </div>
      <div>
      <img src="./assecs/loggi.webp" alt="Imagem 4" />  
      </div>
      <div>
      <img src="./assecs/nbc.webp" alt="Imagem 5" />  
      </div>
      <div>
      <img src="./assecs/sodexo.webp" alt="Imagem 6" />  
      </div>
      <div>
      <img src="./assecs/vli.webp" alt="Imagem 7" />  
      </div>
      <div>
      <img src="./assecs/warnerbros.webp" alt="Imagem 8" />  
      </div>
      <div>
      <img src="./assecs/xp.webp" alt="Imagem 9" />  
      </div>
    </Slider>
  );
};

export default DivIcones;
