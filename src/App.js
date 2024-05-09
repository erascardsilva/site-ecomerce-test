import React from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./scrollHandler";
import Menu from "./components/Menu";
import CarrosselFullScreen from "./components/CarrouselOne";
import DivIcones from "./components/DivIcones";
import CarrosselSmall from "./components/CarrouselSmall";
import BannerPreco from "./components/BannerPreco";
import FigurasMouseHover from "./components/FigurasMouseHover";
import BotoesNomeHover from "./components/BotoesNomeHover";
import PhotEstatica from "./components/FotosEstatica";
import BannerLogistica from "./components/BannerLogistica";
import BannerLimpeza from "./components/BannerLimpeza";
import BannerEscritorio from "./components/BannerEscritorio";
import BotoesTemporarios from "./components/BotoesTemporario";
import BannerIndustria from "./components/BannerIndustria";
import BannerVendas from "./components/BannerVendas";
import BannerEventos from "./components/BannerEventos";
import Formulario from "./components/Formulario";
import Rodape from "./components/Rodape";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <CarrosselFullScreen />
        <div style={{ marginTop: "5%", textAlign: "center" }}>
          {/* Alt para imagem */}
          <img src="./assecs/frase.png" alt="Frase" />
        </div>

        <div style={{ marginTop: "3%" }}>
          <DivIcones />
        </div>

        <div style={{ marginTop: "5%" }}>
          <CarrosselSmall />
        </div>

        <div style={{ marginTop: "3%", textAlign: "left" }}>
          {/* Alt para imagem */}
          <img src="./assecs/frase2.png" alt="Frase 2" />
        </div>

        <BannerPreco />

        <div style={{ marginTop: "3%", textAlign: "left" }}>
          <FigurasMouseHover />
        </div>

        <div style={{ textAlign: "left" }}>
          {/* Alt para imagem */}
          <img src="./assecs/frase3.png" alt="Frase 3" />
        </div>

        <BotoesNomeHover />
        <div style={{ marginTop: "3%" }}>
          <PhotEstatica />
        </div>
        <div style={{ textAlign: "left" }}>
          {/* Alt para imagem */}
          <img src="./assecs/frase4.png" alt="Frase 4" />
        </div>

        <BannerLogistica />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3%",
            width: "100%",
            height: "500px",
          }}
        >
          {/* Alt para imagem */}
          <img
            src="./assecs/imagemlimpeza.png"
            alt="imagem 4"
            style={{
              marginLeft: "3%",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </div>

        <BannerLimpeza />

        <div style={{ textAlign: "left", marginTop: "3%" }}>
          {/* Alt para imagem */}
          <img src="./assecs/frase5.png" alt="Frase 4" />
        </div>
        <BannerEscritorio />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3%",
            width: "100%",
            height: "500px",
          }}
        >
          {/* Alt para imagem */}
          <img
            src="./assecs/imagemtemporario.png"
            alt="imagem 4"
            style={{
              marginLeft: "3%",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </div>

        <BotoesTemporarios />

        <div style={{ textAlign: "left", marginTop: "3%" }}>
          {/* Alt para imagem */}
          <img src="./assecs/frase6.png" alt="Frase 4" />
        </div>

        <BannerIndustria /> 

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3%",
            width: "100%",
            height: "500px",
          }}
        >
          {/* Alt para imagem */}
          <img
            src="./assecs/imagemvendas.png"
            alt="imagem 4"
            style={{
              marginLeft: "3%",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </div>

        <BannerVendas />

        <div style={{ textAlign: "left", marginTop: "3%" }}>
          {/* Alt para imagem */}
          <img src="./assecs/frase7.png" alt="Frase 4" />
        </div>

        <BannerEventos />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3%",
            width: "100%",
            height: "700px",
          }}
        >
          {/* Alt para imagem */}
          <img
            src="./assecs/imagemcontrata.png"
            alt="imagem 4"
            style={{
              marginLeft: "3%",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
           
            width: "100%",
            height: "400px",
          }}
        >
          {/* Alt para imagem */}
          <img
            src="./assecs/imagemmens.png"
            alt="imagem 4"
            style={{
              marginLeft: "3%",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </div>

        <Formulario />
        <div style={{ textAlign: "center", marginTop: "3%" }}>
        <Rodape />
        </div>


      </div>
    </BrowserRouter>
  );
}

export default App;
