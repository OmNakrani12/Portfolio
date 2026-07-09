import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiDownload, FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-container">
      {/* Dynamic Background Orbs */}
      <div className="glow-orb glow-purple" style={{ top: '10%', left: '15%' }} />
      <div className="glow-orb glow-cyan" style={{ bottom: '20%', right: '10%' }} />

      <div className="hero-content container">
        {/* Left Side: Copy and Actions */}
        <motion.div 
          className="hero-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="badge-pulse" />
            Available for new opportunities
          </motion.div>

          <h1 className="hero-title">
            Building Full-Stack <br />
            <span className="gradient-text-cyan-purple">Web Applications</span> <br />
            with <span className="gradient-text-cyan-purple">AI</span>,{" "}
            <span className="gradient-text-cyan-purple">Cloud</span> & Modern Tech.
          </h1>

          <div className="hero-typed-container">
            <span className="typed-prefix">I am a </span>
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'React Native Developer',
                2000,
                'AI/ML Enthusiast',
                2000,
                'Cloud Enthusiast',
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="typed-text"
            />
          </div>

          <p className="hero-description">
            I craft immersive, high-performance web applications and mobile experiences.
            Specializing in React, Next.js, React Native, AWS, and AI integrations.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects <FiArrowRight />
            </a>
            <a 
              href="/projects/Resume.pdf"
              download="Om_Nakrani_Resume.pdf"
              className="btn btn-secondary"
            >
              Download Resume <FiDownload />
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/OmNakrani12" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FiGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/om-nakrani-343026285" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FiLinkedin size={20} />
            </a>
            <a href="mailto:omnakrani971@gmail.com" className="social-icon">
              <FiMail size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Glowing Profile Image */}
        <motion.div 
          className="hero-right"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="avatar-wrapper">
            <div className="glowing-ring ring-1" />
            <div className="glowing-ring ring-2" />
            <div className="glowing-ring ring-3" />
            <div className="avatar-frame">
              <img 
                src="/profile2.png" 
                alt="Om Nakrani Profile" 
                className="profile-img"
              />
            </div>
            
            {/* Overlay float elements for visual complexity */}
            <div className="floating-card float-react glass-card">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" />
              <span>React / Next.js</span>
            </div>
            <div className="floating-card float-ai glass-card">
              <span>🤖 AI / ML</span>
            </div>
            <div className="floating-card float-aws glass-card">
              <span>☁️ AWS</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mouse Scroll Indicator */}
      <div className="scroll-indicator-container">
        <a href="#about" className="scroll-indicator">
          <span className="scroll-wheel" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
