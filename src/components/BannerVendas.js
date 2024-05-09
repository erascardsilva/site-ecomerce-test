import React from "react";
import "../Banner.css";

const BannerVendas = () => {
  return (
    <div className="banners">
      <div className="banner">
        <img
          src="./assecs/vendacopeiro.webp"
          alt="Meia Copeiro"
          className="banner-image"
        />
        <div className="banner-content">
          <h2>Copeiro</h2>
          <p>R$ 167 </p>
          <p> no PIX</p>
          <p>Agendamento de Segunda a Sexta</p>
          <button className="contratar-button">Contratar</button>
        </div>
      </div>
      <div className="banner">
        <img
          src="./assecs/vendapromotor.webp"
          alt="promotor"
          className="banner-image"
        />
        <div className="banner-content">
          <h2>PROMOTOR</h2>
          <p>R$ 740 </p>
          <p> no PIX</p>
          <p>Agendamento de Segunda a Sexta</p>
          <button className="contratar-button">Contratar</button>
        </div>
      </div>
      <div className="banner">
        <img
          src="./assecs/vendarecepcionista.webp"
          alt="recepcao"
          className="banner-image"
        />
        <div className="banner-content">
          <h2>Recepcionista</h2>
          <p>R$ 598 </p>
          <p> no PIX</p>
          <p>Agendamento de Segunda a Sexta</p>
          <button className="contratar-button">Contratar</button>
        </div>
      </div>
      <div className="banner">
        <img
          src="./assecs/vendarepositor.webp"
          alt="Repositor"
          className="banner-image"
        />
        <div className="banner-content">
          <h2>Repositor</h2>

          <p>R$ 190 </p>
          <p> no PIX</p>
          <p>Agendamento de Segunda a Sexta</p>
          <button className="contratar-button">Contratar</button>
        </div>
      </div>
    </div>
  );
};

export default BannerVendas;
