import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiAward, FiCpu, FiGitBranch } from 'react-icons/fi';
import '../styles/Achievements.css';

const achievementsList = [
  {
    category: 'Competitive Programming',
    title: '1100+ Solved, Specialist Rating',
    description: 'Solved over 1100 LeetCode problems and achieved Specialist rating (1636) on Leetcode. Ranked in the top 30% of coders on TakeUForward.',
    icon: <FiTarget />,
    metric: '1100+ Solved'
  },
  {
    category: 'Hackathons',
    title: 'Software Development Hackathon',
    description: 'Built a working project within the hackathon timeframe, applying full-stack development skills, teamwork, and effective problem-solving.',
    icon: <FiAward />,
    metric: 'Project Built'
  },
  {
    category: 'Projects',
    title: 'AI Resume SaaS Launch',
    description: 'Designed, built, and launched ResuNexa AI Analyzer, helping peers and beta testers achieve higher ATS scores and resume formatting standardizations.',
    icon: <FiCpu />,
    metric: '10+ Beta Users'
  },
  {
    category: 'Open Source',
    title: 'React Native Contributor',
    description: 'Contributed code enhancements to public libraries, built open-source utilities for coordinates tracking, and published responsive starter kits.',
    icon: <FiGitBranch />,
    metric: '50+ Contributions'
  }
];

const Achievements = () => {
  return (
    <section className="achievements-section">
      <div className="glow-orb glow-purple" style={{ top: '10%', right: '10%' }} />
      <div className="glow-orb glow-cyan" style={{ bottom: '15%', left: '5%' }} />

      <div className="container">
        {/* Header */}
        <div className="achievements-header">
          <span className="section-tag">Milestones</span>
          <h2 className="section-title">Key Achievements.</h2>
          <p className="achievements-subtitle">
            Notable career highlights, coding milestones, and collaborative tech victories.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="achievements-grid">
          {achievementsList.map((ach, index) => (
            <motion.div 
              key={ach.category}
              className="achievement-card glass-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="ach-top">
                <div className="ach-icon-circle">
                  {ach.icon}
                </div>
                <span className="ach-metric-badge">{ach.metric}</span>
              </div>
              
              <div className="ach-content">
                <span className="ach-cat-label">{ach.category}</span>
                <h3>{ach.title}</h3>
                <p>{ach.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
