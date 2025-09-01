import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub, FaArrowRight, FaStar, FaAward, FaEnvelope, FaArrowLeft, FaGlobe, FaCalendarAlt, FaTrophy, FaProjectDiagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import '../css/Home.css';
import prastuti from '../assets/Prastuti Motghare.png';
import heroBg from '../assets/acmw.png';
import faculty1 from '../assets/Prastuti Motghare.png';
import faculty2 from '../assets/Shravani Pande.png';
import faculty3 from '../assets/Tejashree panaskar.png';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

const heroProducts = [
  {
    title: 'ACM-W Event 1',
    thumbnail: require('../assets/acmw.png'),
    link: '#',
  },
  {
    title: 'ACM-W Event 2',
    thumbnail: require('../assets/Prastuti Motghare.png'),
    link: '#',
  },
  {
    title: 'ACM-W Event 3',
    thumbnail: require('../assets/Shravani Pande.png'),
    link: '#',
  },
  {
    title: 'ACM-W Event 4',
    thumbnail: require('../assets/Tejashree panaskar.png'),
    link: '#',
  },
  {
    title: 'ACM-W Event 5',
    thumbnail: require('../assets/acmw.png'),
    link: '#',
  },
  {
    title: 'ACM-W Event 6',
    thumbnail: require('../assets/Prastuti Motghare.png'),
    link: '#',
  },
  {
    title: 'ACM-W Event 7',
    thumbnail: require('../assets/Shravani Pande.png'),
    link: '#',
  },
  {
    title: 'ACM-W Event 8',
    thumbnail: require('../assets/Tejashree panaskar.png'),
    link: '#',
  },
  {
    title: 'ACM-W Event 9',
    thumbnail: require('../assets/acmw.png'),
    link: '#',
  },
  {
    title: 'ACM-W Event 10',
    thumbnail: require('../assets/Prastuti Motghare.png'),
    link: '#',
  },
  {
    title: 'ACM-W Event 11',
    thumbnail: require('../assets/Shravani Pande.png'),
    link: '#',
  },
  {
    title: 'ACM-W Event 12',
    thumbnail: require('../assets/Tejashree panaskar.png'),
    link: '#',
  },
  {
    title: 'ACM-W Event 13',
    thumbnail: require('../assets/acmw.png'),
    link: '#',
  },
  {
    title: 'ACM-W Event 14',
    thumbnail: require('../assets/Prastuti Motghare.png'),
    link: '#',
  },
  {
    title: 'ACM-W Event 15',
    thumbnail: require('../assets/Shravani Pande.png'),
    link: '#',
  },
  // Add more for variety
  {
    title: 'ACM-W Event 16',
    thumbnail: require('../assets/Tejashree panaskar.png'),
    link: '#',
  },
  {
    title: 'ACM-W Event 17',
    thumbnail: require('../assets/acmw.png'),
    link: '#',
  },
  {
    title: 'ACM-W Event 18',
    thumbnail: require('../assets/Prastuti Motghare.png'),
    link: '#',
  },
  {
    title: 'ACM-W Event 19',
    thumbnail: require('../assets/Shravani Pande.png'),
    link: '#',
  },
  {
    title: 'ACM-W Event 20',
    thumbnail: require('../assets/Tejashree panaskar.png'),
    link: '#',
  },
];

function HeroParallax({ products, darkMode }) {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const fourthRow = products.slice(15, 20);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);
  const gradient = darkMode
    ? 'linear-gradient(120deg, #0F172A 0%, #1E40AF 100%)'
    : 'linear-gradient(120deg, #1E40AF 0%, #3B82F6 100%)';
  return (
    <div
      ref={ref}
      style={{ perspective: '1000px', transformStyle: 'preserve-3d', minHeight: '100vh', padding: '80px 0 40px 0', overflow: 'hidden', position: 'relative', background: gradient }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 0', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', marginBottom: 16 }}>ACM-W PCCOE Highlights</h1>
        <blockquote style={{ color: '#eebbc3', fontSize: '1.3rem', fontWeight: 600, margin: '0 auto 18px auto', maxWidth: 700, fontStyle: 'italic', textShadow: '0 2px 8px #1E40AF' }}>
          "Supporting, celebrating, and advocating for the full engagement of women in all aspects of the computing field."
        </blockquote>
        <p style={{ color: '#b8c1ec', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' }}>
          Explore our journey, events, and achievements through a visual parallax showcase.
        </p>
      </div>
      <motion.div
        style={{ rotateX, rotateZ, translateY, opacity }}
      >
        <motion.div style={{ display: 'flex', flexDirection: 'row-reverse', gap: 32, marginBottom: 32 }}>
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div style={{ display: 'flex', flexDirection: 'row', gap: 32, marginBottom: 32 }}>
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div style={{ display: 'flex', flexDirection: 'row-reverse', gap: 32, marginBottom: 32 }}>
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div style={{ display: 'flex', flexDirection: 'row', gap: 32 }}>
          {fourthRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

function AnimatedTestimonials({ testimonials, autoplay = false }) {
  const [active, setActive] = useState(0);
  const handleNext = () => setActive((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const isActive = (index) => index === active;
  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);
  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;
  return (
    <div className="animated-testimonials">
      <div className="animated-testimonials-grid">
        <div className="animated-testimonials-image-col">
          <div className="animated-testimonials-image-wrap">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.avatar}
                  initial={{ opacity: 0, scale: 0.9, z: -100, rotate: randomRotateY() }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{ opacity: 0, scale: 0.9, z: 100, rotate: randomRotateY() }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="animated-testimonials-image"
                >
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={500}
                    height={500}
                    draggable={false}
                    className="animated-testimonials-img"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="animated-testimonials-content-col">
          <div className="animated-testimonials-card">
            <motion.div
              key={active}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              style={{ minHeight: 180 }}
            >
              <h3 className="animated-testimonials-name">{testimonials[active].author}</h3>
              <p className="animated-testimonials-role">{testimonials[active].role}</p>
              <motion.p className="animated-testimonials-quote">
                {testimonials[active].quote.split(' ').map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ filter: 'blur(10px)', opacity: 0, y: 5 }}
                    animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut', delay: 0.02 * index }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </div>
          <div className="animated-testimonials-nav">
            <button onClick={handlePrev} className="animated-testimonials-btn"><FaArrowLeft /></button>
            <button onClick={handleNext} className="animated-testimonials-btn"><FaArrowRight /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, translate }) {
  return (
    <motion.div
      style={{ x: translate, height: 380, width: 380, position: 'relative', borderRadius: 0, overflow: 'hidden', boxShadow: '0 4px 32px rgba(30,64,175,0.10)', background: '#fff', margin: 0 }}
      whileHover={{ y: -20 }}
      key={product.title}
    >
      <a href={product.link} style={{ display: 'block', height: '100%', width: '100%' }}>
        <img
          src={product.thumbnail}
          height="380"
          width="380"
          style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%' }}
          alt={product.title}
        />
      </a>
      <div style={{ position: 'absolute', inset: 0, height: '100%', width: '100%', background: 'linear-gradient(0deg, rgba(30,40,80,0.7) 0%, rgba(30,40,80,0.1) 100%)', pointerEvents: 'none' }}></div>
      <h2 style={{ position: 'absolute', bottom: 16, left: 16, color: '#fff', opacity: 1, fontWeight: 700, fontSize: '1.1rem', textShadow: '0 2px 8px #1E40AF, 0 0 2px #000' }}>{product.title}</h2>
    </motion.div>
  );
}

const Home = ({ darkMode, toggleDarkMode }) => {
  // Faculty data
  const facultyAdvisors = [
    {
      id: 1,
      name: "Dr. Jane Smith",
      designation: "Faculty Coordinator – ACM-W PCCOE",
      photo: faculty1,
      quote: "Empowering women in tech through community and education",
      linkedin: "#",
      email: "mailto:jane.smith@example.com",
      expertise: ["Machine Learning", "Data Science"],
      experience: "15+ years",
      level: "Expert",
      achievements: "Published 50+ research papers"
    },
    {
      id: 2,
      name: "Prof. Robert Johnson",
      designation: "Faculty Advisor – ACM-W PCCOE",
      photo: faculty2,
      quote: "Building bridges between academia and industry",
      linkedin: "#",
      email: "mailto:robert.johnson@example.com",
      expertise: ["Networking", "Cybersecurity"],
      experience: "12+ years",
      level: "Expert",
      achievements: "Industry partnerships with 20+ companies"
    },
    {
      id: 3,
      name: "Dr. Sarah Williams",
      designation: "Mentor – ACM-W PCCOE",
      photo: faculty3,
      quote: "Championing diversity in computer science",
      linkedin: "#",
      email: "mailto:sarah.williams@example.com",
      expertise: ["AI Ethics", "Human-Computer Interaction"],
      experience: "10+ years",
      level: "Expert",
      achievements: "Diversity advocate, mentored 100+ students"
    }
  ];

  // Awards data
  const achievements = [
    {
      id: 1,
      title: "Best Student Chapter Award",
      year: "2023",
      description: "Recognized for outstanding contributions to women in tech",
      winners: ["Team ACM-W PCCOE"],
      event: "ACM India Annual Conference",
      image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      title: "Hackathon Winner at CodeFest",
      year: "2024",
      description: "First place in national-level hackathon",
      winners: ["Priya Sharma", "Anjali Patel", "Neha Gupta"],
      event: "National CodeFest 2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 3,
      title: "Speaker at ACM-W India Celebration",
      year: "2023",
      description: "Represented our chapter at national event",
      winners: ["Dr. Jane Smith"],
      event: "ACM-W India Celebration Day",
      image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 4,
      title: "Community Impact Award",
      year: "2022",
      description: "For outreach programs in local schools",
      winners: ["ACM-W Outreach Team"],
      event: "Tech for Good Summit",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      quote: "Being part of ACM-W transformed my college experience. The mentorship and opportunities helped me land my dream job at Google!",
      author: "Priya Sharma",
      role: "Alumni, SDE at Google",
      avatar: "https://randomuser.me/api/portraits/women/43.jpg"
    },
    {
      id: 2,
      quote: "Being part of PCCOE ACM-W has been a transformative journey. It nurtured my leadership skills and personal growth. The responsibilities I undertook here are now boosting my confidence and enhancing my performance in the internship I recently joined.",
      author: "Prastuti Motghare",
      role: "Software Engineer Intern, Syngenta",
      avatar: prastuti
    },
    {
      id: 3,
      quote: "As a freshman, ACM-W provided me with a supportive community that helped me navigate my CS journey.",
      author: "Neha Gupta",
      role: "Sophomore, PCCOE",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg"
    }
  ];

  // State for animated numbers
  const [countStarted, setCountStarted] = useState(false);
  const [currentAchievement, setCurrentAchievement] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const achievementsRef = useRef(null);
  
  // Auto slide for achievements
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAchievement((prev) => (prev + 1) % achievements.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [achievements.length]);

  // Handle touch events for achievements slider
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 5) {
      // Left swipe
      setCurrentAchievement((prev) => (prev + 1) % achievements.length);
    } else if (distance < -5) {
      // Right swipe
      setCurrentAchievement((prev) => (prev - 1 + achievements.length) % achievements.length);
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Intersection Observer hooks for animations
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [facultyRef, facultyInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [achievementsInViewRef, achievementsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [impactRef, impactInView] = useInView({ 
    threshold: 0.5, 
    triggerOnce: false,
    onChange: (inView) => inView && setCountStarted(true)
  });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const facultyCards = [
    {
      title: 'Dr. Jane Smith',
      designation: 'Faculty Coordinator – ACM-W PCCOE',
      src: faculty1,
      linkedin: '#',
      email: 'mailto:jane.smith@example.com',
    },
    {
      title: 'Prof. Robert Johnson',
      designation: 'Faculty Advisor – ACM-W PCCOE',
      src: faculty2,
      linkedin: '#',
      email: 'mailto:robert.johnson@example.com',
    },
    {
      title: 'Dr. Sarah Williams',
      designation: 'Mentor – ACM-W PCCOE',
      src: faculty3,
      linkedin: '#',
      email: 'mailto:sarah.williams@example.com',
    },
  ];

  function FacultyFocusCards({ cards }) {
    const [hovered, setHovered] = useState(null);
    return (
      <div className="faculty-focus-section" style={{ margin: '60px 0' }}>
        <h2 style={{ textAlign: 'center', color: '#1E40AF', marginBottom: 32 }}>Faculty Advisors</h2>
        <div className="faculty-focus-grid">
          {cards.map((card, index) => (
            <div
              key={card.title}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={`faculty-focus-card${hovered !== null && hovered !== index ? ' blurred' : ''}`}
              style={{ transition: 'all 0.3s', position: 'relative' }}
            >
              <img src={card.src} alt={card.title} className="faculty-focus-photo" />
              <div className={`faculty-focus-overlay${hovered === index ? ' show' : ''}`}>
                <div className="faculty-focus-info">
                  <div className="faculty-focus-title">{card.title}</div>
                  <div className="faculty-focus-designation">{card.designation}</div>
                  <div className="faculty-focus-links">
                    <a href={card.linkedin} target="_blank" rel="noopener noreferrer" className="faculty-focus-link"><FaLinkedin /></a>
                    <a href={card.email} className="faculty-focus-link"><FaEnvelope /></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`home-page ${darkMode ? 'dark-mode' : ''}`}> 
      <HeroParallax products={heroProducts} darkMode={darkMode} />
      <FacultyFocusCards cards={facultyCards} />
      {/* Awards & Achievements Section */}
      <section 
        ref={achievementsInViewRef}
        className={`achievements-section ${achievementsInView ? 'animate' : ''}`}
        id="achievements"
      >
        <div className="container">
          <h2>Our Proud Moments</h2>
          <p className="section-subtitle">Celebrating our journey and accomplishments</p>
          
          <div 
            className="achievements-slider"
            ref={achievementsRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="slider-container">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.id} 
                  className={`achievement-card ${index === currentAchievement ? 'active' : ''} 
                    ${index === (currentAchievement + 1) % achievements.length ? 'next' : ''}
                    ${index === (currentAchievement - 1 + achievements.length) % achievements.length ? 'prev' : ''}`}
                  style={{ 
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${achievement.image})`,
                    zIndex: achievements.length - index
                  }}
                  onClick={() => setCurrentAchievement(index)}
                >
                  <div className="achievement-content">
                    <h3>{achievement.title}</h3>
                    <p className="year">{achievement.year}</p>
                    <p className="description">{achievement.description}</p>
                    
                    <div className="achievement-details">
                      <p><strong>Event:</strong> {achievement.event}</p>
                      <p><strong>Winners:</strong> {achievement.winners.join(', ')}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="slider-dots">
              {achievements.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentAchievement ? 'active' : ''}`}
                  onClick={() => setCurrentAchievement(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Our Impact Section - moved above testimonials */}
      <section className="impact-section improved-impact-section animate" id="impact">
        <div className="container">
          <h2>Our Impact</h2>
          <p className="section-subtitle">The difference we're making together</p>
          <div className="impact-hover-grid">
            <ImpactHoverCard icon={<FaGlobe />} title="Active Members" value={150} label="Active Members" delay={0.2} description="Our growing community of passionate members." />
            <ImpactHoverCard icon={<FaCalendarAlt />} title="Events Organized" value={30} label="Events Organized" delay={0.4} description="Workshops, seminars, and hackathons hosted." />
            <ImpactHoverCard icon={<FaTrophy />} title="Awards Won" value={10} label="Awards Won" delay={0.6} description="Recognized for excellence and innovation." />
            <ImpactHoverCard icon={<FaProjectDiagram />} title="Community Projects" value={15} label="Community Projects" delay={0.8} description="Impactful projects for society and tech." />
          </div>
        </div>
      </section>
      {/* Testimonials Section - below impact */}
      <section id="testimonials">
        <div className="container testimonials-centered">
          <h2>What Our Members Say</h2>
          <p className="section-subtitle">Hear from our community</p>
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </section>
    </div>
  );
};

export default Home;

function ImpactHoverCard({ icon, title, value, label, delay, description }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`impact-hover-card-modern${hovered ? ' hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      style={{ outline: 'none' }}
    >
      <div className="impact-hover-icon">{icon}</div>
      <div className="impact-hover-value">{value}+</div>
      <div className="impact-hover-title">{title}</div>
      <div className="impact-hover-label">{label}</div>
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="impact-hover-desc"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.18 } }}
            exit={{ opacity: 0, y: 10, transition: { duration: 0.18 } }}
          >
            {description}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}