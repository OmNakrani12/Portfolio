import React from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode, SiGithub, SiCodeforces } from 'react-icons/si';
import { GiNinjaHeroicStance } from 'react-icons/gi';
import '../styles/CodingProfiles.css';

const CodingProfiles = () => {
  return (
    <section className="profiles-section">
      <div className="glow-orb glow-purple" style={{ top: '15%', right: '10%' }} />
      <div className="glow-orb glow-cyan" style={{ bottom: '15%', left: '5%' }} />

      <div className="container">
        {/* Header */}
        <div className="profiles-header">
          <span className="section-tag">Algorithm Focus</span>
          <h2 className="section-title">Coding Profiles.</h2>
          <p className="profiles-subtitle">
            My performance and track record in competitive programming platforms and 
            open-source contribution metrics.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="profiles-grid">
          
          {/* GitHub Stats Card */}
          <motion.div 
            className="profile-card glass-card"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="profile-card-header">
              <SiGithub className="platform-icon github" />
              <div>
                <h3>GitHub Repository Stats</h3>
                <p>@OmNakrani12</p>
              </div>
            </div>
            <div className="stats-image-container">
              <img 
                src="https://github-readme-stats.vercel.app/api?username=OmNakrani12&show_icons=true&theme=tokyonight&bg_color=050816&title_color=00F5FF&icon_color=7C3AED&text_color=9CA3AF&border_color=ffffff0d" 
                alt="GitHub stats"
                className="profile-embed-img"
              />
            </div>
          </motion.div>

          {/* GitHub Streak & Top Languages */}
          <motion.div 
            className="profile-card glass-card"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="profile-card-header">
              <SiGithub className="platform-icon github" />
              <div>
                <h3>GitHub Commits &amp; Languages</h3>
                <p>Contribution Activity</p>
              </div>
            </div>
            <div className="stats-image-container double-images">
              <img 
                src="https://github-readme-streak-stats.herokuapp.com/?user=OmNakrani12&theme=tokyonight&background=050816&ring=7C3AED&fire=00F5FF&currStreakNum=FFF&sideText=9CA3AF&stroke=ffffff0d" 
                alt="GitHub streak stats"
                className="profile-embed-img mb-10"
              />
              <img 
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=OmNakrani12&layout=compact&theme=tokyonight&bg_color=050816&title_color=00F5FF&text_color=9CA3AF&border_color=ffffff0d" 
                alt="GitHub top languages"
                className="profile-embed-img"
              />
            </div>
          </motion.div>

          {/* LeetCode Card */}
          <motion.div 
            className="profile-card glass-card"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="profile-card-header">
              <SiLeetcode className="platform-icon leetcode" />
              <div>
                <h3>LeetCode Solver</h3>
                <p>@omnakrani</p>
              </div>
            </div>
            <div className="stats-image-container lc-container">
              <a href="https://leetcode.com/u/omnakrani/" target="_blank" rel="noreferrer" className="leetcode-link">
                <img 
                  src="https://leetcard.jacoblin.cool/omnakrani?theme=dark&font=Outfit&ext=contest"
                  alt="LeetCode profile card"
                  className="profile-embed-img"
                />
              </a>
            </div>
          </motion.div>

          
          <motion.div
            className="profile-card glass-card custom-stat-card"
            whileHover={{ y: -5 }}
          >
            <div className="profile-card-header">
              <img
                src="../../public/projects/tuf.png"
                alt="TakeUForward"
                className="platform-logo"
                width={60}
                height={60}
              />
              <div>
                <h3>TakeUForward</h3>
                <p>Striver A2Z DSA Sheet</p>
              </div>
            </div>

            <div className="custom-stats-content">
              <div className="cs-row">
                <span className="cs-label">Progress</span>
                <span className="cs-value">220 / 455</span>
              </div>

              <div className="cs-row">
                <span className="cs-label">Completion</span>
                <span className="cs-value">48%</span>
              </div>

              <div className="cs-row">
                <span className="cs-label">Current Topic</span>
                <span className="cs-value">Dynamic Programming</span>
              </div>

              <div className="cs-row">
                <span className="cs-label">Goal</span>
                <span className="cs-value">Complete A2Z Sheet</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
