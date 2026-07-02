import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaMobileAlt, FaGitAlt, FaDatabase,
  FaJava, FaCode, FaAws
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTailwindcss, SiSpringboot, SiFirebase, 
  SiPostgresql, SiDocker, SiPostman, SiPython, SiJavascript,
  SiTensorflow
} from 'react-icons/si';
import { FiCpu } from 'react-icons/fi';
import '../styles/Skills.css';

const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    icon: <FaCode />,
    skills: [
      { name: 'Python', level: 90, icon: <SiPython color="#3776AB" /> },
      { name: 'Java', level: 85, icon: <FaJava color="#007396" /> },
      { name: 'JavaScript', level: 90, icon: <SiJavascript color="#F7DF1E" /> },
      { name: 'C++', level: 80, icon: <FaCode color="#00599C" /> },
      { name: 'SQL', level: 85, icon: <FaDatabase color="#4479A1" /> },
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: <FaReact />,
    skills: [
      { name: 'React', level: 95, icon: <FaReact color="#61DAFB" /> },
      { name: 'Next.js', level: 88, icon: <SiNextdotjs color="#FFFFFF" /> },
      { name: 'HTML5/CSS3', level: 92, icon: <FaHtml5 color="#E34F26" /> },
      { name: 'Tailwind CSS', level: 90, icon: <SiTailwindcss color="#06B6D4" /> },
    ]
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: <FaNodeJs />,
    skills: [
      { name: 'Node.js', level: 85, icon: <FaNodeJs color="#339933" /> },
      { name: 'Spring Boot', level: 80, icon: <SiSpringboot color="#6DB33F" /> },
      { name: 'REST APIs', level: 90, icon: <SiPostman color="#FF6C37" /> },
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile',
    icon: <FaMobileAlt />,
    skills: [
      { name: 'React Native', level: 85, icon: <FaReact color="#61DAFB" /> },
      { name: 'Expo', level: 85, icon: <FaMobileAlt color="#FFFFFF" /> },
    ]
  },
  {
    id: 'ai',
    title: 'AI / ML',
    icon: <FiCpu />,
    skills: [
      { name: 'LLM & RAG', level: 80, icon: <FiCpu color="#00F5FF" /> },
      { name: 'Model Inference', level: 75, icon: <SiTensorflow color="#FF6F00" /> },
      { name: 'AWS SageMaker', level: 80, icon: <FaAws color="#FF9900" /> },
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud',
    icon: <FaAws />,
    skills: [
      { name: 'AWS Services', level: 80, icon: <FaAws color="#FF9900" /> },
      { name: 'Firebase', level: 88, icon: <SiFirebase color="#FFCA28" /> },
    ]
  },
  {
    id: 'database',
    title: 'Database',
    icon: <FaDatabase />,
    skills: [
      { name: 'PostgreSQL', level: 85, icon: <SiPostgresql color="#4169E1" /> },
      { name: 'Firebase RTDB', level: 88, icon: <SiFirebase color="#FFCA28" /> },
    ]
  },
  {
    id: 'devops',
    title: 'DevOps / Tools',
    icon: <SiDocker />,
    skills: [
      { name: 'Git & GitHub', level: 90, icon: <FaGitAlt color="#F05032" /> },
      { name: 'Docker', level: 75, icon: <SiDocker color="#2496ED" /> },
      { name: 'Postman', level: 88, icon: <SiPostman color="#FF6C37" /> },
    ]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  const currentCategory = skillCategories.find(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="skills-section">
      <div className="glow-orb glow-cyan" style={{ top: '20%', left: '10%' }} />
      <div className="glow-orb glow-purple" style={{ bottom: '15%', right: '5%' }} />

      <div className="container">
        {/* Header */}
        <div className="skills-header">
          <span className="section-tag">Expertise</span>
          <h2 className="section-title">My Tech stack.</h2>
          <p className="skills-subtitle">
            A comprehensive set of tools and technologies I utilize to build end-to-end,
            intelligent digital solutions.
          </p>
        </div>

        {/* Categories Menu */}
        <div className="skills-tabs-container">
          <div className="skills-tabs">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                className={`skill-tab-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="tab-icon">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Skills Grid */}
        <motion.div 
          className="skills-grid"
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {currentCategory.skills.map((skill) => (
            <motion.div 
              className="skill-card glass-card"
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="skill-card-header">
                <span className="skill-icon-wrap">{skill.icon}</span>
                <h3>{skill.name}</h3>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-progress-bar-bg">
                <motion.div 
                  className="skill-progress-bar-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
