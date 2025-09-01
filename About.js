import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaUsers, FaLightbulb, FaHandshake, FaGraduationCap, FaHeart, FaRocket } from 'react-icons/fa';
import { useInView as useInViewObserver } from 'react-intersection-observer';
import '../css/About.css';

const About = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState('mission');
  const [countStarted, setCountStarted] = useState(false);

  // Intersection Observer hooks
  const [heroRef, heroInView] = useInViewObserver({ threshold: 0.1, triggerOnce: true });
  const [statsRef, statsInView] = useInViewObserver({ 
    threshold: 0.5, 
    triggerOnce: false,
    onChange: (inView) => inView && setCountStarted(true)
  });
  const [valuesRef, valuesInView] = useInViewObserver({ threshold: 0.1, triggerOnce: true });

  const stats = [
    { icon: <FaUsers />, number: 150, suffix: "+", label: "Active Members" },
    { icon: <FaLightbulb />, number: 30, suffix: "+", label: "Events Organized" },
    { icon: <FaHandshake />, number: 25, suffix: "+", label: "Industry Partners" },
    { icon: <FaGraduationCap />, number: 100, suffix: "+", label: "Students Mentored" }
  ];

  const values = [
    {
      icon: <FaHeart />,
      title: "Empowerment",
      description: "We believe in empowering women to take leadership roles in technology and break barriers in the male-dominated tech industry."
    },
    {
      icon: <FaUsers />,
      title: "Community",
      description: "Building a supportive network where women can connect, collaborate, and grow together in their tech journey."
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Fostering creativity and innovation through hands-on projects, hackathons, and technical workshops."
    },
    {
      icon: <FaRocket />,
      title: "Growth",
      description: "Providing opportunities for skill development, career guidance, and personal growth in the technology sector."
    }
  ];

  const tabs = [
    { id: 'mission', label: 'Our Mission', content: 'mission' },
    { id: 'vision', label: 'Our Vision', content: 'vision' },
    { id: 'history', label: 'Our History', content: 'history' },
    { id: 'goals', label: 'Our Goals', content: 'goals' }
  ];

  const tabContent = {
    mission: {
      title: "Empowering Women in Computing",
      description: "Our mission is to create a supportive and inclusive environment where women can thrive in the field of computing. We strive to bridge the gender gap in technology by providing mentorship, skill development opportunities, and a strong community network.",
      points: [
        "Promote women's participation in computing and technology",
        "Provide mentorship and career guidance",
        "Organize technical workshops and skill development programs",
        "Create networking opportunities with industry professionals",
        "Advocate for diversity and inclusion in tech"
      ]
    },
    vision: {
      title: "A Future of Equal Opportunities",
      description: "We envision a world where women have equal representation and opportunities in the technology industry. Our vision is to be the leading force in creating a more diverse, inclusive, and innovative tech community.",
      points: [
        "Achieve gender parity in technology roles",
        "Create role models for future generations",
        "Build a global network of women in tech",
        "Influence policy and industry practices",
        "Drive innovation through diverse perspectives"
      ]
    },
    history: {
      title: "Our Journey Since 2020",
      description: "Founded in 2020, ACM-W PCCOE has grown from a small group of passionate students to a thriving community of over 150 members. Our journey has been marked by numerous achievements and milestones.",
      points: [
        "2020: Chapter established with 25 founding members",
        "2021: First hackathon organized with 100+ participants",
        "2022: Won Best Student Chapter Award at ACM India",
        "2023: Launched mentorship program with industry partners",
        "2024: Expanded to include 150+ active members"
      ]
    },
    goals: {
      title: "Building Tomorrow's Tech Leaders",
      description: "Our goals focus on creating lasting impact in the tech community and preparing our members for successful careers in technology. We aim to be the bridge between academic learning and industry requirements.",
      points: [
        "Increase women's participation in tech competitions",
        "Establish partnerships with leading tech companies",
        "Organize 50+ events annually",
        "Mentor 200+ students by 2025",
        "Create internship and job placement opportunities"
      ]
    }
  };

  return (
    <div className={`about-page ${darkMode ? 'dark-mode' : ''}`}>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`about-hero ${heroInView ? 'animate' : ''}`}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1>About ACM-W PCCOE</h1>
            <p className="hero-subtitle">
              Empowering women in computing through community, education, and innovation
            </p>
            <p className="hero-description">
              We are a student chapter of ACM-W (Association for Computing Machinery - Women) 
              at Pimpri Chinchwad College of Engineering, dedicated to supporting and advancing 
              women in computing and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={statsRef}
        className="stats-section"
      >
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">
                  {countStarted && (
                    <span className="counter">
                      {stat.number}{stat.suffix}
                    </span>
                  )}
                </div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission/Vision Tabs Section */}
      <section className="tabs-section">
        <div className="container">
          <div className="tabs-header">
            <h2>Our Story</h2>
            <p className="section-subtitle">Learn about our mission, vision, and journey</p>
          </div>
          
          <div className="tabs-container">
            <div className="tabs-navigation">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            <div className="tab-content">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="content-wrapper"
              >
                <h3>{tabContent[activeTab].title}</h3>
                <p className="content-description">{tabContent[activeTab].description}</p>
                <ul className="content-points">
                  {tabContent[activeTab].points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        ref={valuesRef}
        className={`values-section ${valuesInView ? 'animate' : ''}`}
      >
        <div className="container">
          <div className="values-header">
            <h2>Our Core Values</h2>
            <p className="section-subtitle">The principles that guide everything we do</p>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="join-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="join-content"
          >
            <h2>Join Our Community</h2>
            <p>
              Ready to be part of something bigger? Join ACM-W PCCOE and become part of a 
              community that's shaping the future of women in technology.
            </p>
            <div className="join-buttons">
              <button className="btn-primary">Become a Member</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
