import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiAward, FiUsers, FiHeart } from 'react-icons/fi';
import '../styles/Experience.css';

const experiences = [
  {
    role: 'Software Developer Intern',
    company: 'Tech Solutions Corp',
    duration: 'June 2025 - August 2025',
    type: 'internship',
    icon: <FiBriefcase />,
    description: 'Developed full stack web application features using React, Spring Boot, and PostgreSQL. Automated model deployment APIs utilizing AWS SageMaker and Firebase Authentication modules, decreasing query latency by 18%.',
  },
  {
    role: 'Hackathon Lead & Developer',
    company: 'Smart City Hackathon',
    duration: 'October 2025',
    type: 'hackathon',
    icon: <FiAward />,
    description: 'Led a 4-person team to build SplitGrow, a collaborative expense manager. Programmed real-time Firebase syncing, offline data handling, and visual charts, winning 1st Runner Up among 50+ competing teams.',
  },
  {
    role: 'Tech Lead / Student Coordinator',
    company: 'Computer Engineering Student Society',
    duration: '2024 - 2025',
    type: 'leadership',
    icon: <FiUsers />,
    description: 'Organized and mentored 150+ students in hands-on workshops covering web architecture, Git/GitHub, and cloud hosting. Coordinated programming bootcamps and competitive coding practice sessions.',
  },
  {
    role: 'Volunteer Web Developer',
    company: 'Community Tech Network',
    duration: 'January 2024 - Present',
    type: 'volunteer',
    icon: <FiHeart />,
    description: 'Designed and deployed responsive web portals for local non-profit organizations using React and modern CSS, facilitating better community engagement and improving site load times by 30%.',
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
