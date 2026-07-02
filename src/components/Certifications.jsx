import React from 'react';
import { motion } from 'framer-motion';
import { FaAws } from 'react-icons/fa';
import { SiPython, SiCoursera, SiGooglecloud, SiCodeblocks, SiReact, SiHackerrank } from 'react-icons/si';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import '../styles/Certifications.css';

const certificationsList = [
  {
    title: 'AWS Academy Graduate - Cloud Foundations',
    issuer: 'Amazon Web Services (AWS) Academy',
    date: '07-07-2025',
    credentialId: 'ffd43780-9d4e-416c-a8ad-9c8328ce039a', // If available
    verifyUrl: 'https://www.credly.com/badges/ffd43780-9d4e-416c-a8ad-9c8328ce039a',   // If available
    icon: <FaAws className="cert-icon aws" />,
    colorClass: 'aws'
  },
  {
    title: 'Python Certification',
    issuer: 'Hackerrank',
    date: '2026',
    credentialId: '49970B065BE0',
    verifyUrl: 'https://www.hackerrank.com/certificates/49970b065be0',
    icon: <SiPython className="cert-icon python" />,
    colorClass: 'python'
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'Stanford Online | Coursera',
    date: '2026',
    credentialId: 'COURSERA-ML-8812',
    verifyUrl: 'https://coursera.org',
    icon: <SiCoursera className="cert-icon coursera" />,
    colorClass: 'coursera'
  },
  {
    title: 'Problem Solving (Intermediate)',
    issuer: 'Hackerrank',
    date: '2026',
    credentialId: 'BE972E8221FB',
    verifyUrl: 'https://www.hackerrank.com/certificates/be972e8221fb',
    icon: <SiHackerrank className="cert-icon gcp" />,
    colorClass: 'gcp'
  },
  {
    title: 'React Certification',
    issuer: 'Hackerrank',
    date: '2026',
    credentialId: '66D425C8997A',
    verifyUrl: 'https://www.hackerrank.com/certificates/66d425c8997a',
    icon: <SiReact className="cert-icon coursera" />,
    colorClass: 'coursera'
  }
];

const Certifications = () => {
  return (
    <section className="certifications-section">
      <div className="glow-orb glow-cyan" style={{ top: '20%', left: '5%' }} />
      <div className="glow-orb glow-purple" style={{ bottom: '20%', right: '5%' }} />

      <div className="container">
        {/* Header */}
        <div className="certs-header">
          <span className="section-tag">Credentials</span>
          <h2 className="section-title">Certifications.</h2>
          <p className="certs-subtitle">
            Formal verifications of my knowledge across cloud architecture, artificial intelligence,
            data science, and core languages.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certs-grid">
          {certificationsList.map((cert, index) => (
            <motion.div 
              key={cert.title}
              className={`cert-card glass-card ${cert.colorClass}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
            >
              <div className="cert-card-top">
                <div className="cert-icon-frame">
                  {cert.icon}
                </div>
                <span className="cert-date">{cert.date}</span>
              </div>

              <div className="cert-card-body">
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <div className="cert-id-tag">
                  <FiAward /> ID: {cert.credentialId}
                </div>
              </div>

              <div className="cert-card-bottom">
                <a 
                  href={cert.verifyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cert-verify-btn"
                >
                  Verify Credential <FiExternalLink />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
