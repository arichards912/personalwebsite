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
      <div className="contact-header-container">
        <div className="contact-header">
          <h1 className="contact-title">Get In Touch</h1>
          <h2 className="contact-subtitle">Contact Me</h2>
        </div>
      </div>
      <div className = "contact-content">
        <ContactContainer onProgressChange={handleProgressChange} />

        <div className="progress-circle">
          <Circle percent={animatedPercent} strokeWidth={8} strokeColor={animatedColor} strokeLinecap='round' />
          <p className='progress-percent'>%</p>
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
