import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaPlay, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import '../css/Gallery.css';

const Gallery = ({ darkMode }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');

  // Intersection Observer hooks
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [galleryRef, galleryInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const galleryData = {
    events: [
      {
        id: 1,
        title: "HER Hackathon 2024",
        category: "events",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        date: "February 15, 2024",
        location: "Tech Pavilion, PCCOE",
        description: "A 12-hour hackathon exclusively for women coders. Teams collaborated to solve real-world problems and build innovative solutions."
      },
      {
        id: 2,
        title: "Women in AI Workshop",
        category: "events",
        image: "https://images.unsplash.com/photo-1677442135136-760c813a743d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        date: "January 25, 2024",
        location: "AI Lab, PCCOE",
        description: "Hands-on workshop covering machine learning fundamentals. Participants built their first AI model with Python."
      },
      {
        id: 3,
        title: "Tech Leadership Summit",
        category: "events",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        date: "February 5, 2024",
        location: "Grand Auditorium, PCCOE",
        description: "Women tech leaders shared their journey and insights on navigating the tech industry as a woman."
      }
    ],
    workshops: [
      {
        id: 4,
        title: "Web Development Bootcamp",
        category: "workshops",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        date: "March 10, 2024",
        location: "Computer Lab 1, PCCOE",
        description: "Intensive web development workshop covering HTML, CSS, JavaScript, and React fundamentals."
      },
      {
        id: 5,
        title: "Data Science Fundamentals",
        category: "workshops",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        date: "March 20, 2024",
        location: "Data Science Lab, PCCOE",
        description: "Introduction to data science concepts, tools, and techniques for beginners."
      }
    ],
    team: [
      {
        id: 6,
        title: "Team Building Session",
        category: "team",
        image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        date: "April 5, 2024",
        location: "Campus Grounds, PCCOE",
        description: "Team building activities and bonding sessions to strengthen our community."
      },
      {
        id: 7,
        title: "Leadership Workshop",
        category: "team",
        image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        date: "April 15, 2024",
        location: "Conference Room, PCCOE",
        description: "Leadership development workshop focusing on communication, decision-making, and team management."
      }
    ],
    achievements: [
      {
        id: 8,
        title: "Best Student Chapter Award",
        category: "achievements",
        image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        date: "December 2023",
        location: "ACM India Annual Conference",
        description: "Recognized for outstanding contributions to women in tech and community building."
      },
      {
        id: 9,
        title: "Hackathon Winners",
        category: "achievements",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        date: "February 2024",
        location: "National CodeFest 2024",
        description: "First place in national-level hackathon with innovative project solution."
      }
    ]
  };

  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'events', label: 'Events' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'team', label: 'Team' },
    { id: 'achievements', label: 'Achievements' }
  ];

  const getAllImages = () => {
    return [
      ...galleryData.events,
      ...galleryData.workshops,
      ...galleryData.team,
      ...galleryData.achievements
    ];
  };

  const getFilteredImages = () => {
    if (activeFilter === 'all') {
      return getAllImages();
    }
    return galleryData[activeFilter] || [];
  };

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const filteredImages = getFilteredImages();
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
    setSelectedImage(filteredImages[(currentImageIndex + 1) % filteredImages.length]);
  };

  const prevImage = () => {
    const filteredImages = getFilteredImages();
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
    setSelectedImage(filteredImages[(currentImageIndex - 1 + filteredImages.length) % filteredImages.length]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    }
  };

  return (
    <div className={`gallery-page ${darkMode ? 'dark-mode' : ''}`}>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`gallery-hero ${heroInView ? 'animate' : ''}`}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1>Our Gallery</h1>
            <p className="hero-subtitle">
              Capturing moments of innovation, learning, and community building
            </p>
            <p className="hero-description">
              Explore our journey through photos of events, workshops, team activities, 
              and achievements that showcase our commitment to empowering women in technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section 
        ref={galleryRef}
        className="gallery-section"
      >
        <div className="container">
          {/* Filter Buttons */}
          <div className="filter-container">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-button ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {getFilteredImages().map((item, index) => (
              <motion.div
                key={item.id}
                className="gallery-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={galleryInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => handleImageClick(item, index)}
              >
                <div className="image-container">
                  <img src={item.image} alt={item.title} />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <h3>{item.title}</h3>
                      <div className="image-meta">
                        <span><FaCalendar /> {item.date}</span>
                        <span><FaMapMarkerAlt /> {item.location}</span>
                      </div>
                      <span className="view-more">Click to view</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            onKeyDown={handleKeyPress}
            tabIndex={0}
          >
            <motion.div
              className="image-modal"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                <FaTimes />
              </button>
              
              <div className="modal-image-container">
                <img src={selectedImage.image} alt={selectedImage.title} />
                
                <button className="nav-button prev" onClick={prevImage}>
                  <FaChevronLeft />
                </button>
                <button className="nav-button next" onClick={nextImage}>
                  <FaChevronRight />
                </button>
              </div>
              
              <div className="modal-content">
                <h2>{selectedImage.title}</h2>
                <div className="modal-meta">
                  <span><FaCalendar /> {selectedImage.date}</span>
                  <span><FaMapMarkerAlt /> {selectedImage.location}</span>
                </div>
                <p className="modal-description">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="cta-content"
          >
            <h2>Join Our Next Event</h2>
            <p>
              Don't miss out on our upcoming events and workshops. Be part of our 
              growing community and create memories that last a lifetime.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">View Events</button>
              <button className="btn-secondary">Contact Us</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
