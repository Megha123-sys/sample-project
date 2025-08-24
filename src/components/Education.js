import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaCertificate, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const education = [
    {
      type: "education",
      degree: "PGPM/MBA in Marketing and Analytics",
      institution: "ICFAI Business School",
      duration: "2022 - 2024",
      location: "Gurgaon",
      description: "Specialized in marketing strategies and data analytics for business growth"
    },
    {
      type: "education",
      degree: "Master's in Clinical Psychology",
      institution: "Zakir Husain Delhi College",
      duration: "2017 - 2020",
      location: "New Delhi",
      description: "Advanced studies in psychological assessment and therapeutic interventions"
    },
    {
      type: "education",
      degree: "Bachelor's in Cognitive Psychology",
      institution: "Delhi University",
      duration: "2013 - 2017",
      location: "New Delhi",
      description: "Foundation in cognitive processes and behavioral psychology"
    }
  ];

  const certifications = [
    {
      type: "certification",
      name: "Machine Learning with Python",
      provider: "IBM",
      year: "2024",
      description: "Comprehensive course on machine learning algorithms and Python implementation"
    },
    {
      type: "certification",
      name: "Microsoft Bing Ads",
      provider: "Microsoft",
      year: "2024",
      description: "Certified in advanced Microsoft advertising platform and campaign optimization"
    },
    {
      type: "certification",
      name: "Google Display Ads",
      provider: "Google",
      year: "2024",
      description: "Expert certification in Google Display Network and visual advertising strategies"
    }
  ];

  return (
    <section id="education" className="education section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Education & Certifications
        </motion.h2>

        <div className="education-content" ref={ref}>
          <motion.div
            className="education-section"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="section-subtitle">
              <FaGraduationCap className="section-icon" />
              Education
            </h3>
            <div className="education-grid">
              {education.map((item, index) => (
                <motion.div
                  key={item.degree}
                  className="education-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="card-header">
                    <h4 className="degree">{item.degree}</h4>
                    <div className="institution">{item.institution}</div>
                  </div>
                  <div className="card-meta">
                    <div className="meta-item">
                      <FaCalendar className="meta-icon" />
                      <span>{item.duration}</span>
                    </div>
                    <div className="meta-item">
                      <FaMapMarkerAlt className="meta-icon" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  <p className="description">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="certifications-section"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="section-subtitle">
              <FaCertificate className="section-icon" />
              Certifications
            </h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  className="certification-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="cert-badge">
                    <FaCertificate className="cert-icon" />
                  </div>
                  <div className="cert-content">
                    <h4 className="cert-name">{cert.name}</h4>
                    <div className="cert-provider">{cert.provider}</div>
                    <div className="cert-year">{cert.year}</div>
                    <p className="cert-description">{cert.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="education-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="summary-card">
            <h3>Academic Journey</h3>
            <p>
              My educational background combines business analytics with psychological insights, 
              providing a unique perspective on consumer behavior and data-driven marketing strategies. 
              This interdisciplinary approach enables me to create more effective, human-centered 
              marketing campaigns that resonate with target audiences.
            </p>
            <div className="academic-highlights">
              <div className="highlight">
                <span className="highlight-number">7+</span>
                <span className="highlight-text">Years of Higher Education</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">3</span>
                <span className="highlight-text">Professional Certifications</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">2</span>
                <span className="highlight-text">Advanced Degrees</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 