import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import './ContactPage.css';


function ContactPage() {

  return (
    <section className="contact-section">
      <h2 className="section-title">Contact</h2>

      <form className="contact-form">
        <div className="form-floating">
          <input type="text" className="form-control" id="name" placeholder="Name" />
          <label htmlFor="name">Name</label>
        </div>
        <div className="form-floating">
          <input type="email" className="form-control" id="email" placeholder="Email" />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-floating">
          <input type="text" className="form-control" id="subject" placeholder="Subject" />
          <label htmlFor="subject">Subject</label>
        </div>
        <div className="form-floating">
          <textarea className="form-control" id="message" placeholder="Message" rows="5"></textarea>
          <label htmlFor="message">Message</label>
        </div>
        <button type="submit" className="submit-button" id="contact-submit-button">Send Message</button>
      </form>

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
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default ContactPage;
