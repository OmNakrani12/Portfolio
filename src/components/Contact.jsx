import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiSend, FiCheck, FiDownload } from 'react-icons/fi';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);

    // Simulate server request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success status after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="glow-orb glow-purple" style={{ top: '20%', left: '10%' }} />
      <div className="glow-orb glow-cyan" style={{ bottom: '15%', right: '5%' }} />

      <div className="container">
        {/* Header */}
        <div className="contact-header">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">Let's Connect.</h2>
          <p className="contact-subtitle">
            Have a project in mind, want to discuss software engineering, or just want to say hi? 
            Reach out through the form or my social handles!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Side: Contact Information */}
          <motion.div 
            className="contact-info-panel"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="info-intro">
              <h3>Let's talk about everything!</h3>
              <p>Don't like forms? You can send an email directly or drop a message on my socials.</p>
            </div>

            <div className="contact-methods">
              <a href="mailto:omnakrani971@gmail.com" className="contact-method-card glass-card">
                <div className="method-icon"><FiMail /></div>
                <div>
                  <span className="method-label">Email</span>
                  <span className="method-value">omnakrani971@gmail.com</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/om-nakrani-343026285" target="_blank" rel="noopener noreferrer" className="contact-method-card glass-card">
                <div className="method-icon"><FiLinkedin /></div>
                <div>
                  <span className="method-label">LinkedIn</span>
                  <span className="method-value">om-nakrani-343026285</span>
                </div>
              </a>

              <a href="https://github.com/OmNakrani12" target="_blank" rel="noopener noreferrer" className="contact-method-card glass-card">
                <div className="method-icon"><FiGithub /></div>
                <div>
                  <span className="method-label">GitHub</span>
                  <span className="method-value">OmNakrani12</span>
                </div>
              </a>

              <div className="contact-method-card glass-card">
                <div className="method-icon"><FiMapPin /></div>
                <div>
                  <span className="method-label">Location</span>
                  <span className="method-value">Gujarat, India</span>
                </div>
              </div>
            </div>

            <a 
              href="/projects/Resume.pdf"
              download="Om_Nakrani_Resume.pdf" 
              className="btn btn-outline cv-download-btn"
            >
              Get Copy of Resume <FiDownload />
            </a>
          </motion.div>

          {/* Right Side: Message Form */}
          <motion.div 
            className="contact-form-panel glass-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form 
                  key="form"
                  onSubmit={handleFormSubmit}
                  className="contact-form"
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe" 
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com" 
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Collaboration" 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..." 
                      required 
                    />
                  </div>

                  <button 
                    type="submit" 
                    className={`btn btn-primary form-submit-btn ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Sending Message...</>
                    ) : (
                      <>Send Message <FiSend /></>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  className="form-success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <div className="success-icon-wrap">
                    <FiCheck />
                  </div>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out, Om will get back to you shortly.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
