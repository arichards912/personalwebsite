import React, { useState, useEffect } from 'react';
import { useSmoothProgress } from '../../hooks/SmoothProgress/SmoothProgress';
import { useSmoothColorTransition } from '../../hooks/SmoothColor/SmoothColor';
import {Circle} from 'rc-progress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './ContactPage.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [percentComplete, setPercentComplete] = useState(0);
  const animatedPercent = useSmoothProgress(percentComplete);
  const lowPercentColor = '#ff0000';
  const highPercentColor = '#228B22';


  useEffect(() => {
    // Calculate percent whenever formData or formErrors change
    let numValid = 0;
    for (const [key, value] of Object.entries(formErrors)) {
      if (value === false && formData[key] !== '') {
        numValid++;
      }
    }
    const percent = (numValid / Object.keys(formData).length) * 100;
    setPercentComplete(percent);
  }, [formData, formErrors, percentComplete]);


  // Use the custom hook to get the smoothly transitioning color
  const animatedColor = useSmoothColorTransition(lowPercentColor, highPercentColor, percentComplete/100);



  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    
    // Only check error on email if there's already an error - don't want to show error mid-typing
    if (id === 'email' && formErrors.email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setFormErrors({ ...formErrors, email: !emailPattern.test(value) });
    } else {
      setFormErrors({ ...formErrors, [id]: !value });
    }
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;
    if (!value) {
      setFormErrors({ ...formErrors, [id]: true });
    }

    if (id === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setFormErrors({ ...formErrors, email: !emailPattern.test(value) });
    } else {
      setFormErrors({ ...formErrors, [id]: !value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {
      name: formData.name === '',
      email: !formData.email || formErrors.email,
      subject: formData.subject === '',
      message: formData.message === '',
    };

    setFormErrors(errors);

    if (!Object.values(errors).some((error) => error)) {
      // Submit the form
    }
  };

  const inputClassName = (id) => `form-control${formErrors[id] ? ' error' : ''}`;
  const labelClassName = (id) => `form-label${formErrors[id] ? ' error' : ''}`;


  return (
    <section className="contact-section">
      <h2 className="section-title">Contact</h2>
      <div className = "contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className={labelClassName('subject')} htmlFor="subject">Subject</label>
          <input
            type="text"
            className={inputClassName('subject')}
            id="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <label className={labelClassName('name')} htmlFor="name">Name</label>
          <input
            type="text"
            className={inputClassName('name')}
            id="name"
            placeholder="Jane Doe"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <label className={labelClassName('email')} htmlFor="email">Email</label>
          <input
            type="email"
            className={inputClassName('email')}
            id="email"
            placeholder="jane_doe12@snailmail.com"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <label className={labelClassName('message')} htmlFor="message">Message</label>
          <textarea
            className={inputClassName('message')}
            id="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <button type="submit" className="submit-button" id="contact-submit-button">Send Message</button>
        </form>

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

  
      <div className="map-section">
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93286.80405388973!2d-88.03764080719772!3d43.057995419050556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880502d7578b47e7%3A0x445f1922b5417b84!2sMilwaukee%2C%20WI!5e0!3m2!1sen!2sus!4v1680775592952!5m2!1sen!2sus"
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default ContactPage;
