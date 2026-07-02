import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import '../styles/Navbar.css';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('Home');

  // Track scroll for styling and progress bar
  useEffect(() => {
    const handleScroll = () => {
      // Background shift on scroll
      setIsScrolled(window.scrollY > 20);

      // Scroll progress indicator
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Active section calculation
      const sections = navLinks.map(link => {
        const id = link.href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport view focus
          return {
            name: link.name,
            top: rect.top + window.scrollY - 120, // Offset for navbar
            bottom: rect.bottom + window.scrollY - 120,
          };
        }
        return null;
      }).filter(Boolean);

      const scrollPos = window.scrollY;
      const current = sections.find(
        section => scrollPos >= section.top && scrollPos < section.bottom
      );

      if (current) {
        setActiveSection(current.name);
      } else if (scrollPos < 100) {
        setActiveSection('Home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (href) => {
    setIsMobileMenuOpen(false);
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      // Let Lenis or native smooth scroll handle it
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav 
        className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Scroll Progress Bar */}
        <div 
          className="scroll-progress" 
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="navbar-container container">
          {/* Logo */}
          <a href="#home" className="nav-logo" onClick={() => handleLinkClick('#home')}>
            Om Nakrani<span className="logo-dot">.</span>
          </a>

          {/* Desktop Nav Menu */}
          <div className="nav-menu-desktop">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link ${activeSection === link.name ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
              >
                {link.name}
                {activeSection === link.name && (
                  <motion.span
                    layoutId="activeUnderline"
                    className="active-underline"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Right Action Callouts */}
          <div className="nav-actions-desktop">
            <a href="https://github.com/OmNakrani12" target="_blank" rel="noopener noreferrer" className="nav-social-icon">
              <FiGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/om-nakrani-343026285" target="_blank" rel="noopener noreferrer" className="nav-social-icon">
              <FiLinkedin size={18} />
            </a>
            <a href="#contact" className="nav-cta" onClick={() => handleLinkClick('#contact')}>
              Let's Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-drawer"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-drawer-header">
              <span className="nav-logo">Om<span className="logo-dot">.</span></span>
              <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                <FiX size={24} />
              </button>
            </div>

            <div className="mobile-drawer-body">
              <div className="mobile-links-container">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className={`mobile-nav-link ${activeSection === link.name ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.08, ease: 'easeOut' }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <div className="mobile-drawer-footer">
                <p>Find me at</p>
                <div className="mobile-socials">
                  <a href="https://github.com/OmNakrani12" target="_blank" rel="noopener noreferrer">
                    <FiGithub size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/om-nakrani-343026285" target="_blank" rel="noopener noreferrer">
                    <FiLinkedin size={20} />
                  </a>
                  <a href="mailto:omnakrani971@gmail.com">
                    <FiMail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
