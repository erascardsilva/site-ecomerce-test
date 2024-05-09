import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../Menu.css";

function Menu() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset || document.documentElement.scrollTop;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrollPosition > 50 ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="d-flex align-items-center">
          <Link className="navbar-brand text-white" to="/">Erasmo Cardoso DEV</Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/services">SERVIÇOS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/how-it-works">COMO FUNCIONA</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">CONTATO</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/job">VAGAS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/franchise">FRANQUIAS</Link>
            </li>
            
            <li className="nav-item">
              <div className="input-group">
                <input type="text" className="form-control transparent-bg" placeholder="Pesquisar..." />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
              <i class="fa-solid fa-circle-user"></i> Login
              </Link>
            </li>
            <li className='nav-item'>
            <Link className="nav-link">
            <i class="fa-solid fa-cart-shopping"></i>
             </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
