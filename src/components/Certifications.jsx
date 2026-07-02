import React from 'react';
import { motion } from 'framer-motion';
import { FaAws } from 'react-icons/fa';
import { SiPython, SiCoursera, SiGooglecloud } from 'react-icons/si';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import '../styles/Certifications.css';

const certificationsList = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    date: '2026',
    credentialId: 'AWS-CCP-87192',
    verifyUrl: 'https://aws.amazon.com/verification',
    icon: <FaAws className="cert-icon aws" />,
    colorClass: 'aws'
  },
  {
    title: 'Python Essentials Certification',
    issuer: 'Python Institute',
    date: '2024',
    credentialId: 'PY-ESS-65123',
    verifyUrl: 'https://pythoninstitute.org',
    icon: <SiPython className="cert-icon python" />,
    colorClass: 'python'
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'Stanford Online | Coursera',
    date: '2025',
    credentialId: 'COURSERA-ML-8812',
    verifyUrl: 'https://coursera.org',
    icon: <SiCoursera className="cert-icon coursera" />,
    colorClass: 'coursera'
  },
  {
    title: 'Google Cloud Career Launch',
    issuer: 'Google Cloud',
    date: '2025',
    credentialId: 'GCP-CL-99214',
    verifyUrl: 'https://cloud.google.com',
    icon: <SiGooglecloud className="cert-icon gcp" />,
    colorClass: 'gcp'
  },
  {
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI | Coursera',
    date: '2026',
    credentialId: 'COURSERA-DL-7731',
    verifyUrl: 'https://coursera.org',
    icon: <SiCoursera className="cert-icon coursera" />,
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
