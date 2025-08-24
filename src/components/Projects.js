import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChartLine, FaUsers, FaRocket, FaBullseye, FaPercent, FaArrowUp } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const projects = [
    {
      title: "Drishti IAS - State PCS Campaigns",
      category: "Education Marketing",
      description: "End-to-end digital campaign strategy for State PCS exam verticals including UPPCS, BPSC, RAS, and MPPSC.",
      metrics: [
        { label: "Weekly Budget", value: "₹1L+", icon: <FaBullseye /> },
        { label: "Platforms", value: "Meta, Google, YouTube", icon: <FaRocket /> },
        { label: "Optimization", value: "CPC, CTR, CPL", icon: <FaChartLine /> }
      ],
      achievements: [
        "Managed high-volume campaigns across multiple platforms",
        "Optimized full-funnel strategies from awareness to enrollment",
        "Aligned ad creatives with regional and brand goals"
      ],
      technologies: ["Meta Ads", "Google Ads", "YouTube Ads", "Budget Management"]
    },
    {
      title: "GRMI - High-Performance Campaigns",
      category: "B2B Marketing",
      description: "Developed and managed high-performing Meta and Google Ads campaigns with comprehensive KPI tracking.",
      metrics: [
        { label: "Monthly Budget", value: "₹10L+", icon: <FaBullseye /> },
        { label: "ROAS Improvement", value: "25%", icon: <FaArrowUp /> },
        { label: "A/B Testing", value: "Comprehensive", icon: <FaChartLine /> }
      ],
      achievements: [
        "Handled ₹10L+ monthly budget across Meta and Google Ads",
        "Implemented A/B testing on creatives and landing pages",
        "Created comprehensive performance reports with actionable insights",
        "Managed cross-channel campaigns with attribution modeling"
      ],
      technologies: ["Meta Ads", "Google Ads", "A/B Testing", "KPI Tracking", "Attribution Modeling"]
    },
    {
      title: "Advertize India - B2B Lead Generation",
      category: "Lead Generation",
      description: "Comprehensive B2B marketing campaigns focusing on lead generation and conversion optimization.",
      metrics: [
        { label: "Lead Generation", value: "+20%", icon: <FaUsers /> },
        { label: "CPC Reduction", value: "30%", icon: <FaPercent /> },
        { label: "ROAS Increase", value: "22%", icon: <FaArrowUp /> }
      ],
      achievements: [
        "Increased lead generation by 20% using LinkedIn Sales Navigator",
        "Reduced CPC by 30% and increased ROAS by 22% for Google Ads campaigns",
        "Increased lead-to-sale conversion rates by 20% through automation",
        "Reduced CAC by 25% for e-commerce clients",
        "Increased website traffic by 25% through SEO-optimized content"
      ],
      technologies: ["LinkedIn Sales Navigator", "Google Ads", "CRM Tools", "SEO", "Content Marketing"]
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid" ref={ref}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="project-header">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-metrics">
                <h4>Key Metrics</h4>
                <div className="metrics-grid">
                  {project.metrics.map((metric, metricIndex) => (
                    <motion.div
                      key={metric.label}
                      className="metric-item"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 + metricIndex * 0.1 }}
                    >
                      <div className="metric-icon">{metric.icon}</div>
                      <div className="metric-content">
                        <div className="metric-value">{metric.value}</div>
                        <div className="metric-label">{metric.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="project-achievements">
                <h4>Key Achievements</h4>
                <ul>
                  {project.achievements.map((achievement, achievementIndex) => (
                    <motion.li
                      key={achievementIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 + achievementIndex * 0.1 }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="project-technologies">
                <h4>Technologies Used</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.2 + techIndex * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="projects-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="summary-card">
            <h3>Project Impact Overview</h3>
            <div className="impact-grid">
              <div className="impact-item">
                <div className="impact-number">30%</div>
                <div className="impact-label">Average CPC Reduction</div>
              </div>
              <div className="impact-item">
                <div className="impact-number">25%</div>
                <div className="impact-label">ROAS Improvement</div>
              </div>
              <div className="impact-item">
                <div className="impact-number">20%</div>
                <div className="impact-label">Lead Generation Increase</div>
              </div>
              <div className="impact-item">
                <div className="impact-number">200+</div>
                <div className="impact-label">Projects Managed</div>
              </div>
            </div>
            <p className="impact-description">
              These projects demonstrate my ability to deliver measurable results across diverse industries, 
              from education to B2B marketing, with a focus on data-driven optimization and continuous improvement.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 