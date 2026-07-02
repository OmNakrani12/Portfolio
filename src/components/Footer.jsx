import React from 'react';
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import '../styles/Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    // Scroll window smoothly using default window behavior or Lenis
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="container footer-content">
        
        {/* Brand details */}
        <div className="footer-left">
          <a href="#home" className="footer-logo">
            Om  Anilbhai  Nakrani<span className="logo-dot">.</span>
          </a>
          <p>Building high-performance software with cloud scale and machine intelligence.</p>
        </div>

        {/* Social interactions */}
        <div className="footer-right">
          <div className="footer-socials">
            <a href="https://github.com/OmNakrani12" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/om-nakrani-343026285" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="mailto:omnakrani971@gmail.com" aria-label="Email">
              <FiMail />
            </a>
          </div>

          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to Top">
            Back to Top <FiArrowUp />
          </button>
        </div>

      </div>

      <div className="container footer-bottom">
        <p>&copy; {currentYear} Om Nakrani. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
