import React from 'react';
import './Contact.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="contact">
        <h3>Let's get in touch! ☕</h3>
        <p>Feel free to reach out to me on any of these platforms. I will do my best to respond within 24 hours.</p>
        <div className="logo-div">
            <a href="https://www.linkedin.com/in/brenleung" target="_blank" rel="noreferrer" className="logo"><FontAwesomeIcon icon={faLinkedin} size="3x"/></a>
            <a href="https://github.com/brenleung" target="_blank" rel="noreferrer" className="logo"><FontAwesomeIcon icon={faGithub} size="3x" /></a>
            <a href="https://www.instagram.com/brenleung/" target="_blank" rel="noreferrer" className="logo"><FontAwesomeIcon icon={faInstagram} size="3x" /></a>
            <a href="mailto:brendansleung@gmail.com" target="_blank" rel="noreferrer" className="logo"><FontAwesomeIcon icon={faEnvelope} size="3x" /></a>
        </div>
    </div>
  );
}

export default Contact;
