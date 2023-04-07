import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './CallToActionButton.css';

function CallToActionButton({ text, link }) {
  return (
    <Link className="cta-button" to={link}>
      {text}
    </Link>
  );
}

CallToActionButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default CallToActionButton;