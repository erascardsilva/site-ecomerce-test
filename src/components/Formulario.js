import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Formulario = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">Nome</label>
              <input type="text" className="form-control" id="nome" placeholder="Insira um valor para este campo." required />
            </div>
            <div className="mb-3">
              <label htmlFor="sobrenome" className="form-label">Sobrenome</label>
              <input type="text" className="form-control" id="sobrenome" placeholder="Insira um valor para este campo." required />
            </div>
            <div className="mb-3">
              <label htmlFor="cnpj" className="form-label">CNPJ</label>
              <input type="text" className="form-control" id="cnpj" placeholder="XX.XXX.XXX/XXXX-XX" required />
            </div>
            <div className="mb-3">
              <label htmlFor="telefone" className="form-label">Telefone</label>
              <input type="tel" className="form-control" id="telefone" placeholder="00 0000-0000" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">E-mail</label>
              <input type="email" className="form-control" id="email" placeholder="Seu e-mail" required />
            </div>
            <div className="mb-3">
              <label htmlFor="mensagem" className="form-label">Mensagem</label>
              <textarea className="form-control" id="mensagem" rows="3" placeholder="EX: Preciso de quatro profissionais de..." required></textarea>
            </div>
            <button type="submit" className="btn btn-danger">ENVIAR</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
