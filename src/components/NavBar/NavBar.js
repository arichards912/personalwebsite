import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import './NavBar.css';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo" activeclassname="active-link" exact="true">
        AR
      </NavLink>
      <ul className={isMenuOpen ? "nav-links open" : "nav-links"}>
        <li>
          <NavLink to="/resume" activeclassname="active-link">
            RESUME
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/portfolio" activeclassname="active-link">
            PORTFOLIO
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/about" activeclassname="active-link">
            ABOUT ME
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeclassname="active-link">
            CONTACT
          </NavLink>
        </li>
      </ul>
      <Hamburger isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </nav>
  );
}

function Hamburger({ isOpen, toggleMenu }) {
  return (
    <div className="hamburger" onClick={toggleMenu}>
      <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
    </div>
  );
}

export default NavBar;
