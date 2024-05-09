import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


    const CarrouselSmall = () => {
        const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        };
      
        return (
          <div style={{ maxWidth: '100%' }}>
            <Slider {...settings}>
              <div>
                <img src="./assecs/banner1.webp" alt="Imagem 1"  style={{ width: '100%' }}/>
              </div>
              <div>
                <img src="./assecs/banner2.webp" alt="Imagem 2" style={{ width: '100%' }} />
              </div>
              <div>
                <img src="./assecs/banner3.webp" alt="Imagem 3" style={{ width: '100%' }} />
              </div>
              {/* Adicione mais imagens conforme necessário */}
            </Slider>
          </div>
        );
      };
      
    

export default CarrouselSmall;