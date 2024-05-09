import React from 'react';
import '../Banner.css';

const BannerLimpeza = () => {
  return (
    <div className="banners">
      <div className="banner">
        <img src="./assecs/meiadiaria.webp" alt="Meia Diária" className="banner-image" />
        <div className="banner-content">
          <h2>MEIA DIÁRIA</h2>
          <p>1 FAXINEIRA POR 4 HORAS</p>
          <p>R$ 167 </p>
          <p>R$ 99 À vista no PIX</p>
          <p>ou 12x de R$ 13.92</p>
          <p>Direito a 1 meia diária (4h)</p>
          <p>Serviços de limpeza completo</p>
          <p>Agendamento de Segunda a Sexta</p>
          <button className="contratar-button">Contratar</button>
        </div>
      </div>
      <div className="banner">
        <img src="./assecs/diaria.webp" alt="Diária" className="banner-image" />
        <div className="banner-content">
          <h2>DIÁRIA</h2>
          <p>1 FAXINEIRA POR 8 HORAS</p>
          <p>R$ 347 </p>
          <p>R$ 199 À vista no PIX</p>
          <p>ou 12x de R$ 28.92</p>
          <p>Direito a 1 diária (8h)</p>
          <p>Serviços de limpeza completo</p>
          <p>Agendamento de Segunda a Sexta</p>
          <button className="contratar-button">Contratar</button>
        </div>
      </div>
      <div className="banner">
        <img src="./assecs/quinzenal.webp" alt="Quinzenal" className="banner-image" />
        <div className="banner-content">
          <h2>QUINZENAL</h2>
          <p>1 FAXINEIRA A CADA 15 DIAS</p>
          <p>R$ 398 </p>
          <p>R$ 378 À vista no PIX</p>
          <p>ou 12x de R$ 33.17</p>
          <p>Uma faxina a cada 15 dias, 8 horas por dia. (2 diárias no mês)</p>
          <p>Serviços de limpeza completo</p>
          <p>Agendamento de Segunda a Sexta</p>
          <button className="contratar-button">Contratar</button>
        </div>
      </div>
      <div className="banner">
        <img src="./assecs/semanal.webp" alt="Semanal" className="banner-image" />
        <div className="banner-content">
          <h2>SEMANAL</h2>
          <p>1 FAXINEIRA POR SEMANA</p>
          <p>R$ 796 </p>
          <p>R$ 756 À vista no PIX</p>
          <p>ou 12x de R$ 66.33</p>
          <p>Uma faxina por semana, 8 horas por dia. (4 diárias no mês)</p>
          <p>Serviços de limpeza completo</p>
          <p>Agendamento de Segunda a Sexta</p>
          <button className="contratar-button">Contratar</button>
        </div>
      </div>
    </div>
  );
};

export default BannerLimpeza;
