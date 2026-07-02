import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiBookOpen } from 'react-icons/fi';
import '../styles/Projects.css';

const projectsList = [
  {
    id: 'resunexa',
    title: 'ResuNexa',
    subtitle: 'AI Resume Analyzer',
    description: 'An AI-powered resume analysis platform designed to grade resume content, highlight syntax mistakes, check ATS compatibility, and suggest resume upgrades.',
    features: ['NLP & Keyword Analysis', 'ATS Score Calculator', 'PDF Upload Parsing', 'Tailored Improvement Suggestions'],
    tech: ['React', 'Next.js', 'OpenAI API', 'Firebase RTDB', 'Firebase Auth'],
    image: '/projects/resunexa.png',
    github: 'https://github.com/OmNakrani12',
    demo: 'https://github.com/OmNakrani12',
    caseStudy: '#contact',
    gridSpan: 'span-2-cols'
  },
  {
    id: 'quickhire',
    title: 'QuickHire',
    subtitle: 'Smart Hiring Platform',
    description: 'A recruitment hub connecting candidates and job hirers through automated scheduling, visual profiles, and application pipelines.',
    features: ['Interactive Kanban Board', 'Interview Scheduling', 'Real-time Messaging', 'Recruiter Dashboard'],
    tech: ['React', 'Spring Boot', 'PostgreSQL', 'Firebase Auth'],
    image: '/projects/quickhire.png',
    github: 'https://github.com/OmNakrani12',
    demo: 'https://github.com/OmNakrani12',
    caseStudy: '#contact',
    gridSpan: 'span-1-col'
  },
  {
    id: 'splitgrow',
    title: 'SplitGrow',
    subtitle: 'Collaborative Expense Management',
    description: 'A financial tracking app that lets groups split bills, logs daily expenses, and provides visual charts for financial summaries.',
    features: ['Group Bill Splitting', 'Visual Spending Charts', 'Transaction Categorization', 'Offline Syncing Mode'],
    tech: ['React Native', 'Expo', 'Next.js', 'Firebase RTDB'],
    image: '/projects/splitgrow.png',
    github: 'https://github.com/OmNakrani12',
    demo: 'https://github.com/OmNakrani12',
    caseStudy: '#contact',
    gridSpan: 'span-1-col'
  },
  {
    id: 'colordetection',
    title: 'AI Color Detection',
    subtitle: 'Computer Vision Color Picker',
    description: 'A computer vision application that processes photos and video inputs, isolates specific color palettes, and retrieves hexadecimal codes.',
    features: ['Real-time Camera Feed', 'Dominant Color Palette Extraction', 'Color Match Algorithm', 'Historical Color Swatches'],
    tech: ['Python', 'OpenCV', 'TensorFlow', 'React'],
    image: '/projects/colordetection.png',
    github: 'https://github.com/OmNakrani12',
    demo: 'https://github.com/OmNakrani12',
    caseStudy: '#contact',
    gridSpan: 'span-1-col'
  },
  {
    id: 'gpstracking',
    title: 'GPS Tracking App',
    subtitle: 'Real-time Path Navigator',
    description: 'A cross-platform React Native mobile application for GPS routing, recording user location coordinates, and drawing track paths.',
    features: ['Live Background Geolocation', 'Interactive Dark Map Layer', 'Movement Speed Analytics', 'Exportable GeoJSON Route Trails'],
    tech: ['React Native', 'Expo Mapview', 'Node.js', 'PostgreSQL'],
    image: '/projects/gpstracking.png',
    github: 'https://github.com/OmNakrani12',
    demo: 'https://github.com/OmNakrani12',
    caseStudy: '#contact',
    gridSpan: 'span-1-col'
  },
  {
    id: 'sagemaker',
    title: 'AWS SageMaker ML Deployment',
    subtitle: 'Scale ML Pipelines on the Cloud',
    description: 'Designed automated pipelines that train machine learning models and deploy them to hosted AWS SageMaker endpoints for high-throughput client API inferences.',
    features: ['Automated ETL Pipeline', 'SageMaker Endpoint Autoscaling', 'Docker Container Model Images', 'A/B Endpoint Model Testing'],
    tech: ['AWS SageMaker', 'Docker', 'Python', 'Boto3', 'AWS Lambda'],
    image: '/projects/sagemaker.png',
    github: 'https://github.com/OmNakrani12',
    demo: 'https://github.com/OmNakrani12',
    caseStudy: '#contact',
    gridSpan: 'span-2-cols'
  }
];

const Projects = () => {
  // Mouse tracking spotlight glow effect
  const handleMouseMove = (e, ref) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty('--mouse-x', `${x}px`);
    ref.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="glow-orb glow-purple" style={{ top: '25%', left: '5%' }} />
      <div className="glow-orb glow-cyan" style={{ bottom: '15%', right: '10%' }} />

      <div className="container">
        {/* Header */}
        <div className="projects-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Bento Grid Projects.</h2>
          <p className="projects-subtitle">
            An curated selection of my work spanning AI resume analyzers, expense managers,
            IoT GPS trackers, and high-performance cloud deployments.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div 
          className="bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projectsList.map((project) => {
            const cardRef = React.createRef();
            return (
              <motion.div
                key={project.id}
                ref={cardRef}
                className={`bento-card glass-card ${project.gridSpan}`}
                variants={cardVariants}
                onMouseMove={(e) => handleMouseMove(e, cardRef)}
              >
                {/* Spotlight Background Element */}
                <div className="spotlight-overlay" />

                {/* Project Image Frame */}
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image"
                  />
                  <div className="project-image-gradient" />
                </div>

                {/* Project Body */}
                <div className="project-info">
                  <span className="project-subtitle">{project.subtitle}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  
                  {/* Features Bullets */}
                  <ul className="project-bullets">
                    {project.features.slice(0, 3).map((f) => (
                      <li key={f} className="bullet-item">
                        <span className="bullet-dot" /> {f}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack chips */}
                  <div className="project-tech-chips">
                    {project.tech.map((t) => (
                      <span key={t} className="project-chip">{t}</span>
                    ))}
                  </div>

                  {/* Actions buttons */}
                  <div className="project-actions">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-btn btn-git">
                      <FiGithub /> GitHub
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-btn btn-demo">
                      <FiExternalLink /> Live Demo
                    </a>
                    <a href={project.caseStudy} className="project-btn btn-case">
                      <FiBookOpen /> Case Study
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
