import '../assets/css/navbar.css';

import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" id="navbar">
      <div className="container">
        <Link className="navbar-brand" id="navbar-brand" to={'/'}>
          <span id="brand-pony">PONY</span>
          <span id="brand-vet" className="me-1">
            VET
          </span>
          <FontAwesomeIcon icon={faPaw} color={'#FFE6F7'} />{' '}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to={'/'}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/about'}>
                Acerca de
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/contact'}>
                Contactanos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
