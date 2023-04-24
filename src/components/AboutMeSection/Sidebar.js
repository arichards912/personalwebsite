import React from 'react';
import { Link } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faTasks,
  faMapMarkerAlt,
  faQuestion,
  faCogs,
} from '@fortawesome/free-solid-svg-icons';

import './Sidebar.css'

const Sidebar = () => {
  const sections = [
    { name: 'Who', icon: faUser },
    { name: 'What', icon: faTasks },
    { name: 'Where', icon: faMapMarkerAlt },
    { name: 'Why', icon: faQuestion },
    { name: 'How', icon: faCogs },
  ];
  
  

  return (
    <nav className="sidebar">
      {sections.map((section, index) => (
        <div key={index} className="sidebar-item">
          <Link
            activeClass="active"
            to={section.name}
            spy={true}
            smooth={true}
            duration={500}
          >
            <FontAwesomeIcon icon={section.icon} />
            {/* Uncomment the following line to show the text along with the icon */}
            {/* <span>{section.name}</span> */}
          </Link>
          {index !== sections.length - 1}
        </div>
      ))}
    </nav>
  );
};

export default Sidebar;
