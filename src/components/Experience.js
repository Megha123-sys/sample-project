import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendar, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const experiences = [
    {
      company: "Drishti IAS",
      position: "Deputy Manager - Digital Marketing",
      duration: "April 2025 - Present",
      location: "Delhi",
      achievements: [
        "Lead end-to-end digital campaign strategy across Meta Ads, Google Ads, and YouTube for State PCS exam verticals (UPPCS, BPSC, RAS, MPPSC)",
        "Align ad creatives and messaging with brand and regional goals to optimize for reach and conversions",
        "Manage weekly digital budgets exceeding ₹1L+ with ROI-focused allocation across platforms",
        "Continuously optimize CPC, CTR, CPL, and conversion rates across high-volume campaigns",
        "Build, track, and refine full-funnel strategies (awareness to enrollment) to improve lead quality"
      ],
      skills: ["Meta Ads", "Google Ads", "YouTube Ads", "Budget Management", "ROI Optimization"]
    },
    {
      company: "Global Risk Management Institute",
      position: "Digital Marketing Manager & Brand Specialist",
      duration: "July 2024 – April 2025",
      location: "Gurugram",
      achievements: [
        "Developed and managed high-performing Meta (Facebook, Instagram) and Google Ads campaigns, handling a ₹10L+ monthly budget",
        "Monitored key performance indicators (KPIs) to track, evaluate, and enhance campaign efficiency",
        "Conducted keyword research, audience segmentation, and competitive analysis to optimize ad spend",
        "Implemented A/B testing on ad creatives, landing pages, and bidding strategies, maximizing ROAS",
        "Created comprehensive performance reports with actionable insights for stakeholders",
        "Managed cross-channel campaigns with focus on attribution modeling and KPI tracking"
      ],
      skills: ["Meta Ads", "Google Ads", "A/B Testing", "KPI Tracking", "Attribution Modeling"]
    },
    {
      company: "Advertize India (SKS Advertising Pvt Ltd.)",
      position: "Digital Marketing Associate",
      duration: "March 2022 - June 2024",
      location: "New Delhi",
      achievements: [
        "Leveraged LinkedIn Sales Navigator to extract high-potential leads, increasing lead generation by 20%",
        "Managed 50+ Google Ads campaigns for B2B clients, reducing CPC by 30% and increasing ROAS by 22% through RLSA and keyword restructuring",
        "Developed automated email workflows for lead nurturing and customer retention using CRM tools like HubSpot and MO Engage, increasing lead-to-sale conversion rates by 20%",
        "Reduced CAC by 25% for e-commerce clients through lookalike audience targeting and A/B testing of creatives",
        "Increased website traffic by 25% through SEO-optimized blogs and video content, aligned with Ahrefs-driven keyword strategies"
      ],
      skills: ["LinkedIn Sales Navigator", "Google Ads", "CRM Tools", "SEO", "Content Marketing"]
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Work Experience
        </motion.h2>

        <div className="experience-timeline" ref={ref}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="timeline-content">
                <div className="experience-header">
                  <div className="company-info">
                    <h3 className="company-name">{exp.company}</h3>
                    <h4 className="position">{exp.position}</h4>
                  </div>
                  <div className="experience-meta">
                    <div className="meta-item">
                      <FaCalendar className="meta-icon" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="meta-item">
                      <FaMapMarkerAlt className="meta-icon" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="achievements">
                  <h5>Achievements & Responsibilities:</h5>
                  <ul>
                    {exp.achievements.map((achievement, achievementIndex) => (
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

                <div className="skills-used">
                  <h5>Key Skills:</h5>
                  <div className="skills-tags">
                    {exp.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="skill-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.2 + skillIndex * 0.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="experience-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="summary-card">
            <h3>Career Highlights</h3>
            <div className="highlights-grid">
              <div className="highlight-item">
                <FaStar className="highlight-icon" />
                <div>
                  <h4>3+ Years</h4>
                  <p>Performance Marketing Experience</p>
                </div>
              </div>
              <div className="highlight-item">
                <FaStar className="highlight-icon" />
                <div>
                  <h4>200+ Projects</h4>
                  <p>Successfully Managed</p>
                </div>
              </div>
              <div className="highlight-item">
                <FaStar className="highlight-icon" />
                <div>
                  <h4>₹10L+</h4>
                  <p>Monthly Budget Managed</p>
                </div>
              </div>
              <div className="highlight-item">
                <FaStar className="highlight-icon" />
                <div>
                  <h4>30% CPC</h4>
                  <p>Average Reduction</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 