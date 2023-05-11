import React, { useState, useEffect, useRef } from 'react';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import './NavBar.css';

import ARLogo from '../../media/favicon.ico';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <NavLink to="/" className="nav-logo" activeclassname="active-link" exact="true">
        <img src={ARLogo} alt="Logo" />
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
