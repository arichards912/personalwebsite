import React, { useState } from 'react';
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setFormErrors({ ...formErrors, email: !emailPattern.test(value) });
    } else {
      setFormErrors({ ...formErrors, [name]: !value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {
      name: !formData.name,
      email: !formData.email || formErrors.email,
      subject: !formData.subject,
      message: !formData.message,
    };

    setFormErrors(errors);

    if (!Object.values(errors).some((error) => error)) {
      // Submit the form
    }
  };

  return (
    <section className="contact-section">
      <h2 className="section-title">Contact</h2>
      <div className = "contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-floating">
          <label htmlFor="subject">Subject</label>
            <input type="text" className="form-control" id="subject" placeholder="Subject" />
          </div>
          <div className="form-floating">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Name" /> 
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Email" />
          </div>
          <div className="form-floating">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" placeholder="Message" rows="5"></textarea>
          </div>
          <button type="submit" className="submit-button" id="contact-submit-button">Send Message</button>
        </form>

        <div className="contact-text">
            <p>
            Thank you for considering reaching out to me via the contact form on my software development personal portfolio page! 
            Filling out this form will allow us to connect and discuss potential collaborations or opportunities in the world of software development. 
            <br/><br/>
            By providing your information, we can begin a conversation about how my skills and expertise can benefit your projects or ideas. 
            I am excited to hear from you and learn more about your goals, so please don't hesitate to reach out. 
            <br/><br/>
            Let's work together to bring your vision to life!
            <br/><br/>
            Note: Probably want to change this to be an image instead, with a sentence or two below it.
            </p>
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
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default ContactPage;
