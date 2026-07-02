import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiCpu, FiCloud, FiBookOpen } from 'react-icons/fi';
import '../styles/About.css';

const timelineData = [
  {
    year: '2024',
    title: 'Started Programming',
    description: 'Began journey with C, C++, and Python. Focused on core data structures, algorithms, and logical problem-solving foundations.',
    icon: <FiCode />,
  },
  {
    year: '2025',
    title: 'Started Full Stack Development',
    description: 'Learned HTML, CSS, JavaScript, React, and Java. Created dynamic web systems and designed APIs with Spring Boot and SQL databases.',
    icon: <FiLayers />,
  },
  {
    year: '2026',
    title: 'React Native + Cloud',
    description: 'Expanded to cross-platform mobile apps (SplitGrow expense manager, GPS tracking) and automated model hosting on AWS SageMaker.',
    icon: <FiCloud />,
  },
  {
    year: '2026',
    title: 'Built AI Projects',
    description: 'Developed ResuNexa (AI resume parsing tool), integrated OpenAI/LLMs, and automated intelligent parsing workflows using Firebase.',
    icon: <FiCpu />,
  },
  {
    year: 'Current',
    title: 'Learning LLMs & RAG',
    description: 'Researching advanced Generative AI systems, prompt engineering, vector databases, and Retrieval-Augmented Generation architectures.',
    icon: <FiBookOpen />,
  },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="glow-orb glow-purple" style={{ top: '30%', right: '10%' }} />
      <div className="glow-orb glow-cyan" style={{ bottom: '10%', left: '5%' }} />

      <div className="container">
        {/* Intro Header */}
        <div className="about-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">
            Engineering Code, <br />
            Architecting <span className="gradient-text">Intelligence</span>.
          </h2>
          <p className="about-intro-text">
            I'm an Information Technology student and Full-Stack Developer passionate
            about building modern, scalable web applications. I enjoy developing
            responsive user interfaces, designing robust backend systems, and exploring
            AI-powered solutions to solve real-world problems.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="timeline-container">
          <div className="timeline-line" />

          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                className={`timeline-item ${isEven ? 'left' : 'right'}`} 
                key={item.year}
              >
                {/* Visual Connector Dot */}
                <motion.div 
                  className="timeline-dot"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                >
                  <div className="dot-inner">
                    {item.icon}
                  </div>
                </motion.div>

                {/* Info Card */}
                <motion.div 
                  className="timeline-content glass-card"
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
                >
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
