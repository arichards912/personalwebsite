import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-logo" activeclassname="active-link" exact="true">
            AR
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" activeclassname="active-link">
            RESUME
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" activeclassname="active-link">
            PORTFOLIO
          </NavLink>
        </li>
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
    </nav>
  );
}

export default NavBar;
