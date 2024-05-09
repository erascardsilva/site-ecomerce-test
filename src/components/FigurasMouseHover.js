import React, { useState } from 'react';
import "../Menu.css";

const FigurasMouseHover = () => {
  // Cria um estado para cada imagem
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  // Funções para lidar com o hover
  const handleMouseEnter1 = () => setIsHovered1(true);
  const handleMouseLeave1 = () => setIsHovered1(false);
  const handleMouseEnter2 = () => setIsHovered2(true);
  const handleMouseLeave2 = () => setIsHovered2(false);
  const handleMouseEnter3 = () => setIsHovered3(true);
  const handleMouseLeave3 = () => setIsHovered3(false);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ maxWidth: "80%", display: "flex", justifyContent: "center" }}>
        <div style={{ display: "grid", gridTemplateColumns: "auto 50%", gridGap: "10px", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <img src="./assecs/FiguraOver1.webp" alt="Foto 1" className="img-hover" style={{ width: "100%", height: "auto", transform: isHovered1? "scale(1.1)" : "none" }} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <img src="./assecs/FiguraOver2.webp" alt="Foto 2" className="img-hover" style={{ maxWidth: "100%", height: "auto", transform: isHovered2? "scale(1.1)" : "none", marginBottom: "10px", transition: "transform 0.3s" }} onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} />
            <img src="./assecs/FiguraOver3.webp" alt="Foto 3" className="img-hover" style={{ maxWidth: "100%", height: "auto", transform: isHovered3? "scale(1.1)" : "none", transition: "transform 0.3s" }} onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FigurasMouseHover;

