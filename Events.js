import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import '../css/Event.css';

const EventsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeAnantyaDay, setActiveAnantyaDay] = useState('day1');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeUpcomingTab, setActiveUpcomingTab] = useState('featured');
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Event data
  const upcomingEvents = {
    featured: [
      {
        id: 1,
        title: "HER Hackathon 2024",
        type: "hackathon",
        date: "2024-02-15",
        time: "9:00 AM - 9:00 PM",
        location: "Tech Pavilion",
        description: "A 12-hour hackathon exclusively for women coders. Solve real-world problems and win exciting prizes! Teams of 2-4 allowed.",
        images: [
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        ],
        registrationLink: "#register",
        highlights: [
          "₹50,000 in prizes",
          "Industry mentors",
          "Free swag for all participants",
          "Networking opportunities"
        ]
      }
    ],
    all: [
      {
        id: 2,
        title: "Women in AI Workshop",
        type: "workshop",
        date: "2024-01-25",
        time: "2:00 PM - 5:00 PM",
        location: "AI Lab",
        description: "Hands-on workshop covering machine learning fundamentals and building your first AI model with Python.",
        images: [
          "https://images.unsplash.com/photo-1677442135136-760c813a743d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          "https://images.unsplash.com/photo-1677442135136-760c813a743d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        ],
        registrationLink: "#register",
        highlights: [
          "No prior experience needed",
          "Free learning resources",
          "Certificate of participation"
        ]
      },
      {
        id: 3,
        title: "Tech Leadership Summit",
        type: "seminar",
        date: "2024-02-05",
        time: "10:00 AM - 1:00 PM",
        location: "Grand Auditorium",
        description: "Hear from women tech leaders about their journey and how to navigate the tech industry as a woman.",
        images: [
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
          "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        ],
        registrationLink: "#register",
        highlights: [
          "Panel discussion",
          "Q&A session",
          "Networking lunch"
        ]
      }
    ]
  };

  const anantyaEvents = {
    mainEvent: {
      title: "ANANTYA 2024",
      subtitle: "The Annual Tech Extravaganza",
      description: "Anantya is our flagship annual tech festival that brings together the brightest minds for two days of innovation, competition, and technological exploration. ACM-W proudly presents several events as part of Anantya to empower women in technology.",
      images: [
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      ],
      stats: [
        { value: "48", label: "Hours" },
        { value: "1000+", label: "Participants" },
        { value: "20+", label: "Events" },
        { value: "15", label: "Speakers" }
      ]
    },
    days: {
      day1: [
        {
          id: 4,
          title: "Anantya Inauguration",
          type: "inauguration",
          date: "2024-03-01",
          time: "9:00 AM - 10:30 AM",
          location: "Main Ground",
          description: "The grand opening ceremony of Anantya with keynote speakers, cultural performances, and lighting of the lamp.",
          images: [
            "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          ],
          highlights: [
            "Keynote by tech leaders",
            "Cultural performances",
            "Networking session"
          ]
        },
        {
          id: 5,
          title: "She Solves Hackathon",
          type: "hackathon",
          date: "2024-03-01",
          time: "11:00 AM - 6:00 PM",
          location: "Innovation Labs",
          description: "ACM-W's flagship hackathon for women coders to solve real-world problems with innovative tech solutions.",
          images: [
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          ],
          highlights: [
            "₹1,00,000 in prizes",
            "Industry mentors",
            "Free swag for participants"
          ]
        }
      ],
      day2: [
        {
          id: 6,
          title: "Code Relay",
          type: "competition",
          date: "2024-03-02",
          time: "10:00 AM - 12:00 PM",
          location: "Coding Arena",
          description: "Team coding competition where participants solve problems in a relay format, passing the code to teammates.",
          images: [
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          ],
          highlights: [
            "Teams of 3-4 members",
            "Multiple problem rounds",
            "Speed and accuracy challenge"
          ]
        },
        {
          id: 7,
          title: "Valedictory Ceremony",
          type: "valedictory",
          date: "2024-03-02",
          time: "5:00 PM - 7:00 PM",
          location: "Grand Auditorium",
          description: "Closing ceremony with prize distribution, cultural performances, and reflections on Anantya's success.",
          images: [
            "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          ],
          highlights: [
            "Prize distribution",
            "Keynote address",
            "Cultural performances"
          ]
        }
      ]
    }
  };

  const regularEvents = [
    {
      id: 8,
      title: "HER Hack Hour",
      type: "hackathon",
      date: "2023-11-15",
      time: "10:00 AM - 4:00 PM",
      location: "Computer Lab 1",
      description: "A coding event exclusively for women to solve real-world problems and showcase their technical skills.",
      images: [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      ],
      highlights: [
        "Beginner-friendly",
        "Mentorship available",
        "Prizes for top solutions"
      ]
    },
    {
      id: 9,
      title: "Web Dev Workshop",
      type: "workshop",
      date: "2023-10-20",
      time: "2:00 PM - 5:00 PM",
      location: "Lab 2",
      description: "Hands-on workshop covering modern web development technologies including React and Node.js.",
      images: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      ],
      highlights: [
        "Build a portfolio project",
        "Free resources provided",
        "Q&A with industry developers"
      ]
    },
    {
      id: 10,
      title: "Tech Quiz Competition",
      type: "competition",
      date: "2023-09-10",
      time: "3:00 PM - 6:00 PM",
      location: "Seminar Hall",
      description: "Test your technical knowledge in this exciting quiz competition with teams of 2-4 members.",
      images: [
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      ],
      highlights: [
        "Multiple rounds",
        "Tech trivia and puzzles",
        "Exciting prizes"
      ]
    }
  ];

  // Auto-change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Filter events based on active filter
  const filteredRegularEvents = activeFilter === 'all' 
    ? regularEvents 
    : regularEvents.filter(event => event.type === activeFilter);

  return (
    <div className="events-page" ref={containerRef}>
      {/* Hero Section with Parallax */}
      <section className="hero-section">
        <motion.div 
          className="hero-background"
          style={{ y }}
        >
          <div className="bg-gradient"></div>
          <div className="bg-pattern"></div>
        </motion.div>
        
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-title-container"
          >
            <motion.span 
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              ACM-W Presents
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              <span className="title-line">Empowering Women</span>
              <span className="title-line">Through Technology</span>
            </motion.h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="hero-description"
          >
            Join our community of women in computing through exciting events, hackathons, and workshops
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="hero-buttons"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hero-btn primary"
            >
              Explore Events
            </motion.button>
          </motion.div>
        </div>
        
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span>Scroll</span>
          <div className="arrow-down"></div>
        </motion.div>
      </section>

      {/* Upcoming Events Section */}
      <section className="upcoming-events">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="section-label"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              What's Next
            </motion.div>
            <h2>Upcoming Events</h2>
            <p>Don't miss our next exciting events designed to empower women in technology</p>
          </motion.div>
          
          <div className="upcoming-tabs">
            <button 
              className={activeUpcomingTab === 'featured' ? 'active' : ''}
              onClick={() => setActiveUpcomingTab('featured')}
            >
              Featured Event
            </button>
            <button 
              className={activeUpcomingTab === 'all' ? 'active' : ''}
              onClick={() => setActiveUpcomingTab('all')}
            >
              All Upcoming
            </button>
          </div>
          
          <div className="upcoming-events-grid">
            {upcomingEvents[activeUpcomingTab].map((event, index) => (
              <motion.div 
                className="upcoming-event-card"
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedEvent(event)}
              >
                <div className="event-image-container">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      className="event-image"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      style={{ 
                        backgroundImage: `url(${event.images[currentImageIndex]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <div className="image-overlay"></div>
                      <span className={`event-tag ${event.type}`}>{event.type}</span>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="event-details">
                  <div className="event-date">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                    </svg>
                    {event.date} | {event.time}
                  </div>
                  <h3>{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                  <div className="event-highlights">
                    {event.highlights.slice(0, 3).map((highlight, i) => (
                      <div className="highlight" key={i}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                        {highlight}
                      </div>
                    ))}
                  </div>
                  <a href={event.registrationLink} className="register-btn">
                    Register Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Anantya Main Event Section */}
      <section className="anantya-main">
        <div className="container">
          <motion.div 
            className="anantya-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="section-label"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Flagship Event
            </motion.div>
            <h2>{anantyaEvents.mainEvent.title}</h2>
            <h3>{anantyaEvents.mainEvent.subtitle}</h3>
            <p>{anantyaEvents.mainEvent.description}</p>
          </motion.div>
          
          <div className="anantya-stats">
            {anantyaEvents.mainEvent.stats.map((stat, index) => (
              <motion.div 
                className="stat-card"
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          <div className="anantya-schedule">
            <div className="schedule-tabs">
              <button 
                className={activeAnantyaDay === 'day1' ? 'active' : ''}
                onClick={() => setActiveAnantyaDay('day1')}
              >
                Day 1
              </button>
              <button 
                className={activeAnantyaDay === 'day2' ? 'active' : ''}
                onClick={() => setActiveAnantyaDay('day2')}
              >
                Day 2
              </button>
            </div>
            
            <motion.div 
              className="schedule-container"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeAnantyaDay}
                  className="schedule-day"
                  initial={{ opacity: 0, x: activeAnantyaDay === 'day1' ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: activeAnantyaDay === 'day1' ? -50 : 50 }}
                  transition={{ duration: 0.4 }}
                >
                  {anantyaEvents.days[activeAnantyaDay].map((event, index) => (
                    <motion.div 
                      className="schedule-event"
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => setSelectedEvent(event)}
                    >
                      <div className="event-time">
                        <span>{event.time}</span>
                      </div>
                      <div className="event-details">
                        <div className="event-header">
                          <h4>{event.title}</h4>
                          <span className={`event-tag ${event.type}`}>{event.type}</span>
                        </div>
                        <p>{event.description}</p>
                        <div className="event-highlights">
                          {event.highlights.slice(0, 2).map((highlight, i) => (
                            <div className="highlight" key={i}>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                              </svg>
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
        
        <div className="anantya-gallery">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              className="gallery-slide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              style={{ 
                backgroundImage: `url(${anantyaEvents.mainEvent.images[currentImageIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="gallery-overlay"></div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Regular Events Section */}
      <section className="regular-events">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="section-label"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Past Events
            </motion.div>
            <h2>ACM-W Regular Events</h2>
            <p>Explore our past events that have empowered women in technology through learning and networking</p>
          </motion.div>
          
          <motion.div 
            className="filter-buttons"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <button 
              className={activeFilter === 'all' ? 'active' : ''}
              onClick={() => setActiveFilter('all')}
            >
              All Events
            </button>
            <button 
              className={activeFilter === 'workshop' ? 'active' : ''}
              onClick={() => setActiveFilter('workshop')}
            >
              Workshops
            </button>
            <button 
              className={activeFilter === 'hackathon' ? 'active' : ''}
              onClick={() => setActiveFilter('hackathon')}
            >
              Hackathons
            </button>
            <button 
              className={activeFilter === 'seminar' ? 'active' : ''}
              onClick={() => setActiveFilter('seminar')}
            >
              Seminars
            </button>
            <button 
              className={activeFilter === 'competition' ? 'active' : ''}
              onClick={() => setActiveFilter('competition')}
            >
              Competitions
            </button>
          </motion.div>
          
          <div className="events-grid">
            {filteredRegularEvents.map((event, index) => (
              <motion.div 
                className="event-card"
                key={event.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedEvent(event)}
              >
                <div className="event-image-container">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      className="event-image"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      style={{ 
                        backgroundImage: `url(${event.images[currentImageIndex]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <div className="image-overlay"></div>
                      <span className={`event-tag ${event.type}`}>{event.type}</span>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="event-details">
                  <h3>{event.title}</h3>
                  <div className="event-meta">
                    <div className="meta-item">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                      </svg>
                      {event.date}
                    </div>
                    <div className="meta-item">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                      </svg>
                      {event.time}
                    </div>
                  </div>
                  <p className="event-description">{event.description}</p>
                  <button className="view-more-btn">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div 
            className="event-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="close-btn"
                onClick={() => setSelectedEvent(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              
              <div className="modal-image-container">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    className="modal-image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ 
                      backgroundImage: `url(${selectedEvent.images[currentImageIndex]})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="image-overlay"></div>
                    <span className={`event-tag ${selectedEvent.type}`}>{selectedEvent.type}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              <div className="modal-details">
                <h2>{selectedEvent.title}</h2>
                
                <div className="event-meta">
                  <div className="meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                    </svg>
                    {selectedEvent.date} | {selectedEvent.time}
                  </div>
                  <div className="meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    {selectedEvent.location}
                  </div>
                </div>
                
                <div className="event-description">
                  <p>{selectedEvent.description}</p>
                </div>
                
                {selectedEvent.highlights && (
                  <div className="event-highlights">
                    <h4>Highlights</h4>
                    <ul>
                      {selectedEvent.highlights.map((highlight, index) => (
                        <li key={index}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                          </svg>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {selectedEvent.registrationLink && (
                  <a href={selectedEvent.registrationLink} className="register-btn">
                    Register Now
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventsPage;