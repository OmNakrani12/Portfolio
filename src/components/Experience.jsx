import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiAward, FiUsers, FiHeart } from 'react-icons/fi';
import '../styles/Experience.css';

const experiences = [
  {
    role: 'Hackathon Tech Lead',
    company: 'DUHacks 5.0 Hackathon',
    duration: '2026',
    type: 'hackathon',
    icon: <FiAward />,
    description:
      'Served as Tech Lead for a 4-member team during DDU 5.0 Hackathon. Led the development of ResuNexa, an AI-powered resume analyzer that evaluates ATS compatibility, extracts resume information, identifies missing skills, and provides actionable feedback for job seekers.',
  },
  {
    role: 'Tech Lead & Full Stack Developer',
    company: 'QuickHire',
    duration: '2025 - 2026',
    type: 'leadership',
    icon: <FiUsers />,
    description:
      'Served as Tech Lead while contributing to full-stack development of QuickHire. Managed technical planning, implemented core features using modern web technologies, integrated APIs, and ensured timely delivery of project milestones.',
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="glow-orb glow-cyan" style={{ top: '40%', right: '15%' }} />
      <div className="glow-orb glow-purple" style={{ bottom: '20%', left: '10%' }} />

      <div className="container">
        {/* Header */}
        <div className="experience-header">
          <span className="section-tag">Career Journey</span>
          <h2 className="section-title">Experience &amp; Leadership.</h2>
          <p className="experience-subtitle">
            A track record of software engineering internships, competitive hackathons, 
            technical community leadership, and community volunteer work.
          </p>
        </div>

        {/* Experience Timeline Grid */}
        <div className="exp-timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.role + exp.company}
              className="exp-card-wrapper"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Left Column: Icon and Connection Node */}
              <div className="exp-node">
                <div className={`node-icon-circle ${exp.type}`}>
                  {exp.icon}
                </div>
                {index < experiences.length - 1 && <div className="node-connector-line" />}
              </div>

              {/* Right Column: Content Card */}
              <div className="exp-card glass-card">
                <div className="exp-card-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <h4 className="exp-company">{exp.company}</h4>
                  </div>
                  <span className="exp-duration">{exp.duration}</span>
                </div>
                <p className="exp-desc">{exp.description}</p>
                <div className="exp-badge-container">
                  <span className={`exp-type-tag ${exp.type}`}>{exp.type}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
