import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/acmw.png';
import '../css/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-logo-section">
        <img src={logo} alt="ACM-W PCCOE" className="footer-logo" />
        <div className="footer-about">
          <h3>About ACM-W</h3>
          <p>
            ACM-W supports, celebrates, and advocates for the full engagement of women in all aspects of the computing field. <br/>
            The ACM-W PCCOE chapter is dedicated to empowering women in technology at Pimpri Chinchwad College of Engineering, fostering growth, learning, and leadership.
          </p>
        </div>
      </div>
      <div className="footer-social-section">
        <h4>Connect with us</h4>
        <div className="footer-social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
          <a href="mailto:acmw@pccoepune.org" aria-label="Email"><FaEnvelope /></a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} ACM-W PCCOE Chapter. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
