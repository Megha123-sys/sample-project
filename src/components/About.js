import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChartLine, FaUsers, FaRocket, FaBullseye } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const stats = [
    {
      icon: <FaChartLine />,
      number: "30%",
      label: "CPC Reduction",
      description: "Achieved through A/B testing and optimization"
    },
    {
      icon: <FaUsers />,
      number: "200+",
      label: "Projects Managed",
      description: "Across B2B, e-commerce, education, and SaaS"
    },
    {
      icon: <FaRocket />,
      number: "25%",
      label: "ROAS Improvement",
      description: "Through AI-driven bid strategies"
    },
    {
      icon: <FaBullseye />,
      number: "₹10L+",
      label: "Monthly Budget",
      description: "Managed high-performing campaigns"
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <div className="about-content" ref={ref}>
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Performance Marketing Specialist</h3>
            <p>
              With over 3+ years of expertise in performance marketing, I specialize in 
              transforming brands through data-driven digital strategies across B2B, 
              e-commerce, education, and SaaS verticals.
            </p>
            
            <p>
              My expertise spans across multiple channels including Google Ads, Meta Ads, 
              LinkedIn Ads, and programmatic advertising platforms like DV360 and The Trade Desk. 
              I'm certified in Advanced Marketing Platforms including Microsoft Bing Ads and 
              Google Display Ads.
            </p>

            <p>
              I excel in CRM tools like HubSpot, Salesforce, Netcore, and Oracle Responsys, 
              with strong understanding of automated workflows and customer segmentation. 
              My approach combines technical expertise with strategic thinking to deliver 
              measurable outcomes and drive business growth.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🎯</span>
                <span>Data-driven strategies for measurable outcomes</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🚀</span>
                <span>Multi-channel campaign optimization</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">📊</span>
                <span>Advanced analytics and attribution modeling</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🤖</span>
                <span>AI-driven automation and optimization</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="stat-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div className="stat-icon">
                    {stat.icon}
                  </div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-description">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 