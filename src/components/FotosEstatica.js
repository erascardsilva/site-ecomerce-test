import React from 'react';
import '../PhotoEstatica.css';

const PhotEstatica = () => {
  return (
  
    <div class="angry-grid">
  <div id="item-0">
    <img src="./assecs/photo3.webp" alt="Foto 1" className="photo" style={{width: '100%', height: '100%'}} />
    

    </div>
  <div id="item-1">
  <img src="./assecs/photo4.webp" alt="Foto 2" className="photo-full" style={{width: '100%', height: '100%'}} />
  </div>
  <div id="item-2">
 
  <img src="./assecs/photo1.webp" alt="Foto 4" className="photo" style={{width: '50%', height: '100%'}} />
  <img src="./assecs/photo2.webp" alt="Foto 3" className="photo"  style={{width: '50%', height: '100%'}}/>

  </div>
</div>
  );
};

export default PhotEstatica;
