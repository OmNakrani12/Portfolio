import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/Statistics.css';

const StatCounter = ({ endValue, label, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000; // 2 seconds animation
    const incrementTime = Math.max(Math.floor(duration / endValue), 10);
    
    const timer = setInterval(() => {
      start += Math.ceil(endValue / (duration / incrementTime));
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, endValue]);

  return (
    <div className="stat-card glass-card" ref={ref}>
      <h3 className="stat-number">
        {count}
        <span className="stat-suffix">{suffix}</span>
      </h3>
      <p className="stat-label">{label}</p>
    </div>
  );
};

const Statistics = () => {
  const statsList = [
    { endValue: 20, label: 'Completed Projects', suffix: '+' },
    { endValue: 400, label: 'LeetCode Problems', suffix: '+' },
    { endValue: 150, label: 'GitHub Contributions', suffix: '+' },
    { endValue: 15, label: 'Technologies Mastered', suffix: '+' }
  ];

  return (
    <section className="statistics-section">
      <div className="container">
        <div className="stats-grid">
          {statsList.map((stat, idx) => (
            <StatCounter 
              key={stat.label}
              endValue={stat.endValue}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
