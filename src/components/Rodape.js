import React from 'react';


const Rodape = () => {
  return (
    <footer className="rodape bg-light text-dark py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Erasmo Cardoso da Silva</h3>
            <p>Telefone / Whatsapp: (11) 94922 4355</p>
            <p>Email: erascardsilva@gmail.com</p>
            <p>Portifólio: <a href="https://erasmocs.netlify.app/" className="text-dark">https://erasmocs.netlify.app/</a></p>
            <p>Rua: Manuel Nunes figueira 125 – São Paulo - SP</p>
          </div>
          <div className="col-md-6 text-md-right mt-3 mt-md-0">
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark">LinkedIn</a></li>
              <li><a href="#" className="text-dark">GitHub</a></li>
              <li><a href="#" className="text-dark">Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
