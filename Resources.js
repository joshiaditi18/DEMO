import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaExternalLinkAlt, FaBook, FaVideo, FaCode, FaGraduationCap, FaUsers, FaLightbulb, FaStar } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import '../css/Resources.css';

const Resources = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState('learning');
  const [searchTerm, setSearchTerm] = useState('');

  // Intersection Observer hooks
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [resourcesRef, resourcesInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const resources = {
    learning: [
      {
        id: 1,
        title: "Web Development Fundamentals",
        type: "course",
        category: "learning",
        description: "Complete guide to HTML, CSS, and JavaScript fundamentals for beginners.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        link: "https://example.com/web-dev-course",
        external: true,
        rating: 4.8,
        duration: "8 weeks",
        level: "Beginner",
        tags: ["HTML", "CSS", "JavaScript", "Web Development"]
      },
      {
        id: 2,
        title: "Machine Learning Basics",
        type: "course",
        category: "learning",
        description: "Introduction to machine learning concepts and Python implementation.",
        image: "https://images.unsplash.com/photo-1677442135136-760c813a743d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        link: "https://example.com/ml-course",
        external: true,
        rating: 4.6,
        duration: "10 weeks",
        level: "Intermediate",
        tags: ["Python", "Machine Learning", "Data Science", "AI"]
      },
      {
        id: 3,
        title: "React.js Complete Guide",
        type: "course",
        category: "learning",
        description: "Master React.js from basics to advanced concepts with hands-on projects.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        link: "https://example.com/react-course",
        external: true,
        rating: 4.9,
        duration: "12 weeks",
        level: "Intermediate",
        tags: ["React", "JavaScript", "Frontend", "Web Development"]
      }
    ],
    tools: [
      {
        id: 4,
        title: "VS Code Setup Guide",
        type: "guide",
        category: "tools",
        description: "Complete setup guide for VS Code with recommended extensions for developers.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        link: "/resources/vscode-setup.pdf",
        external: false,
        rating: 4.7,
        duration: "30 min",
        level: "Beginner",
        tags: ["VS Code", "Development Tools", "Setup Guide"]
      },
      {
        id: 5,
        title: "Git & GitHub Tutorial",
        type: "tutorial",
        category: "tools",
        description: "Learn version control with Git and collaboration with GitHub.",
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        link: "https://example.com/git-tutorial",
        external: true,
        rating: 4.5,
        duration: "2 hours",
        level: "Beginner",
        tags: ["Git", "GitHub", "Version Control", "Collaboration"]
      },
      {
        id: 6,
        title: "Docker for Beginners",
        type: "tutorial",
        category: "tools",
        description: "Containerization basics and Docker implementation for developers.",
        image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        link: "https://example.com/docker-tutorial",
        external: true,
        rating: 4.4,
        duration: "3 hours",
        level: "Intermediate",
        tags: ["Docker", "Containerization", "DevOps", "Deployment"]
      }
    ],
    templates: [
      {
        id: 7,
        title: "React Project Template",
        type: "template",
        category: "templates",
        description: "Ready-to-use React project template with modern setup and best practices.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        link: "https://github.com/acmw-pccoe/react-template",
        external: true,
        rating: 4.8,
        duration: "Instant",
        level: "All Levels",
        tags: ["React", "Template", "Boilerplate", "Project Setup"]
      },
      {
        id: 8,
        title: "Python Flask API Template",
        type: "template",
        category: "templates",
        description: "Flask API template with authentication, database setup, and documentation.",
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        link: "https://github.com/acmw-pccoe/flask-template",
        external: true,
        rating: 4.6,
        duration: "Instant",
        level: "Intermediate",
        tags: ["Python", "Flask", "API", "Backend"]
      },
      {
        id: 9,
        title: "Portfolio Website Template",
        type: "template",
        category: "templates",
        description: "Modern portfolio website template with responsive design and animations.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        link: "https://github.com/acmw-pccoe/portfolio-template",
        external: true,
        rating: 4.7,
        duration: "Instant",
        level: "Beginner",
        tags: ["Portfolio", "HTML/CSS", "Responsive", "Template"]
      }
    ],
    community: [
      {
        id: 10,
        title: "Mentorship Program Guide",
        type: "guide",
        category: "community",
        description: "How to participate in our mentorship program and get the most out of it.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        link: "/resources/mentorship-guide.pdf",
        external: false,
        rating: 4.9,
        duration: "15 min",
        level: "All Levels",
        tags: ["Mentorship", "Community", "Guidance", "Networking"]
      },
      {
        id: 11,
        title: "Study Group Guidelines",
        type: "guide",
        category: "community",
        description: "Best practices for organizing and participating in study groups.",
        image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        link: "/resources/study-group-guide.pdf",
        external: false,
        rating: 4.5,
        duration: "10 min",
        level: "All Levels",
        tags: ["Study Groups", "Collaboration", "Learning", "Community"]
      },
      {
        id: 12,
        title: "Event Organization Handbook",
        type: "handbook",
        category: "community",
        description: "Complete guide to organizing successful tech events and workshops.",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        link: "/resources/event-handbook.pdf",
        external: false,
        rating: 4.7,
        duration: "45 min",
        level: "Intermediate",
        tags: ["Event Management", "Leadership", "Organization", "Community"]
      }
    ]
  };

  const tabs = [
    { id: 'learning', label: 'Learning Resources', icon: <FaGraduationCap /> },
    { id: 'tools', label: 'Development Tools', icon: <FaCode /> },
    { id: 'templates', label: 'Project Templates', icon: <FaBook /> },
    { id: 'community', label: 'Community Guides', icon: <FaUsers /> }
  ];

  const getFilteredResources = () => {
    const categoryResources = resources[activeTab] || [];
    if (!searchTerm) return categoryResources;
    
    return categoryResources.filter(resource =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  const handleResourceClick = (resource) => {
    if (resource.external) {
      window.open(resource.link, '_blank');
    } else {
      // Handle internal resource download
      console.log('Downloading:', resource.title);
    }
  };

  return (
    <div className={`resources-page ${darkMode ? 'dark-mode' : ''}`}>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`resources-hero ${heroInView ? 'animate' : ''}`}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1>Learning Resources</h1>
            <p className="hero-subtitle">
              Curated resources to accelerate your journey in technology
            </p>
            <p className="hero-description">
              Access our collection of courses, tools, templates, and community guides 
              designed to help you grow as a developer and tech professional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Section */}
      <section 
        ref={resourcesRef}
        className="resources-section"
      >
        <div className="container">
          {/* Search Bar */}
          <div className="search-container">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button className="search-button">
                <FaLightbulb />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="tabs-container">
            <div className="tabs-navigation">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="tab-icon">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Resources Grid */}
          <div className="resources-grid">
            {getFilteredResources().map((resource, index) => (
              <motion.div
                key={resource.id}
                className="resource-card"
                initial={{ opacity: 0, y: 30 }}
                animate={resourcesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => handleResourceClick(resource)}
              >
                <div className="resource-image">
                  <img src={resource.image} alt={resource.title} />
                  <div className="resource-overlay">
                    <span className="resource-type">{resource.type}</span>
                  </div>
                </div>
                
                <div className="resource-content">
                  <div className="resource-header">
                    <h3>{resource.title}</h3>
                    <div className="resource-rating">
                      <FaStar />
                      <span>{resource.rating}</span>
                    </div>
                  </div>
                  
                  <p className="resource-description">{resource.description}</p>
                  
                  <div className="resource-meta">
                    <span className="meta-item">
                      <FaGraduationCap />
                      {resource.level}
                    </span>
                    <span className="meta-item">
                      <FaVideo />
                      {resource.duration}
                    </span>
                  </div>
                  
                  <div className="resource-tags">
                    {resource.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">{tag}</span>
                    ))}
                  </div>
                  
                  <div className="resource-action">
                    <button className="action-button">
                      {resource.external ? (
                        <>
                          <FaExternalLinkAlt />
                          Visit Resource
                        </>
                      ) : (
                        <>
                          <FaDownload />
                          Download
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {getFilteredResources().length === 0 && searchTerm && (
            <div className="no-results">
              <FaLightbulb />
              <h3>No resources found</h3>
              <p>Try adjusting your search terms or browse different categories.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="featured-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="featured-content"
          >
            <h2>Featured Resources</h2>
            <p>
              Our most popular and highly-rated resources that have helped hundreds 
              of students accelerate their learning journey.
            </p>
            
            <div className="featured-grid">
              {resources.learning.slice(0, 2).map((resource, index) => (
                <div key={resource.id} className="featured-card">
                  <img src={resource.image} alt={resource.title} />
                  <div className="featured-info">
                    <h3>{resource.title}</h3>
                    <p>{resource.description}</p>
                    <div className="featured-rating">
                      <FaStar />
                      <span>{resource.rating}</span>
                    </div>
                    <button className="featured-button" onClick={() => handleResourceClick(resource)}>
                      Explore Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="cta-content"
          >
            <h2>Contribute to Our Resources</h2>
            <p>
              Have a great resource to share? Help us grow our collection by contributing 
              tutorials, guides, or templates that can benefit our community.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">Submit Resource</button>
              <button className="btn-secondary">Contact Us</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
