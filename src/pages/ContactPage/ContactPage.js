import React, { useState } from 'react';
import { useSmoothProgress } from '../../hooks/SmoothProgress/SmoothProgress';
import { useSmoothColorTransition } from '../../hooks/SmoothColor/SmoothColor';
import ContactContainer from '../../components/ContactContainer/ContactContainer';
import {Circle} from 'rc-progress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './ContactPage.css';

function ContactPage() {
  const [progress, setProgress] = useState(0);

  const handleProgressChange = (percentage) => {
    setProgress(percentage);
  };

  const animatedPercent = useSmoothProgress(progress);
  const lowPercentColor = '#ff0000';
  const highPercentColor = '#228B22';

  // Use the custom hook to get the smoothly transitioning color
  const animatedColor = useSmoothColorTransition(lowPercentColor, highPercentColor, progress/100);


  return (
    <section className="contact-section">
      <div className = "contact-content">
        <ContactContainer onProgressChange={handleProgressChange} />

        <div className="progress-circle">
          <Circle percent={animatedPercent} strokeWidth={8} strokeColor={animatedColor} strokeLinecap='round' />
          <p className='progress-percent'>%</p>
        </div>

      </div>

      <div className="contact-footer">
        <div className="map-section">
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93286.80405388973!2d-88.03764080719772!3d43.057995419050556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880502d7578b47e7%3A0x445f1922b5417b84!2sMilwaukee%2C%20WI!5e0!3m2!1sen!2sus!4v1680775592952!5m2!1sen!2sus"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="social-media-section">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
    </section>
  );
}

export default ContactPage;
