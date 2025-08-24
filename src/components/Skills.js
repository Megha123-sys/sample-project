import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaGoogle, FaFacebook, FaLinkedin, FaSearch, 
  FaChartBar, FaDatabase, FaCode, FaCogs,
  FaEnvelope, FaBullseye, FaRobot, FaChartLine
} from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: "Advertising Platforms",
      skills: [
        { name: "Google Ads", icon: <FaGoogle />, level: 95 },
        { name: "Meta Ads", icon: <FaFacebook />, level: 90 },
        { name: "LinkedIn Ads", icon: <FaLinkedin />, level: 85 },
        { name: "DV360", icon: <FaChartBar />, level: 80 },
        { name: "The Trade Desk", icon: <FaBullseye />, level: 75 }
      ]
    },
    {
      title: "Analytics & Tools",
      skills: [
        { name: "Google Analytics 4", icon: <FaChartLine />, level: 90 },
        { name: "SQL", icon: <FaDatabase />, level: 80 },
        { name: "Python (Basic)", icon: <FaCode />, level: 70 },
        { name: "Looker Studio", icon: <FaChartBar />, level: 85 },
        { name: "SurferSEO", icon: <FaSearch />, level: 80 }
      ]
    },
    {
      title: "CRM & Automation",
      skills: [
        { name: "HubSpot", icon: <FaCogs />, level: 90 },
        { name: "Salesforce", icon: <FaCogs />, level: 85 },
        { name: "MO Engage", icon: <FaRobot />, level: 80 },
        { name: "CleverTap", icon: <FaRobot />, level: 80 },
        { name: "Email Marketing", icon: <FaEnvelope />, level: 90 }
      ]
    },
    {
      title: "Marketing Skills",
      skills: [
        { name: "SEO", icon: <FaSearch />, level: 85 },
        { name: "PPC", icon: <FaBullseye />, level: 90 },
        { name: "Conversion Rate Optimization", icon: <FaChartBar />, level: 85 },
        { name: "A/B Testing", icon: <FaCogs />, level: 90 },
        { name: "Programmatic Advertising", icon: <FaRobot />, level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="skills-content" ref={ref}>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-card"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5
                    }}
                  >
                    <div className="skill-icon">
                      {skill.icon}
                    </div>
                    <div className="skill-info">
                      <h4 className="skill-name">{skill.name}</h4>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 
                          }}
                        />
                      </div>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="summary-card">
            <h3>Technical Proficiency</h3>
            <p>
              Proficient in advanced marketing platforms, data analysis tools, and automation systems. 
              Experienced in multi-channel campaign management with a focus on measurable ROI and 
              continuous optimization.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 