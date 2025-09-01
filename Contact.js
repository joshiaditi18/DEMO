import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaTwitter, FaGithub, FaPaperPlane, FaUser, FaComment, FaFileAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import '../css/Contact.css';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Intersection Observer hooks
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      details: "acmw.pccoe@gmail.com",
      link: "mailto:acmw.pccoe@gmail.com",
      description: "Send us an email for general inquiries and support"
    },
    {
      icon: <FaPhone />,
      title: "Call Us",
      details: "+91 98765 43210",
      link: "tel:+919876543210",
      description: "Reach out to us directly for urgent matters"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Visit Us",
      details: "PCCOE Campus, Nigdi, Pune",
      link: "https://maps.google.com/?q=PCCOE+Pune",
      description: "Drop by our campus for in-person meetings"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://linkedin.com/company/acmw-pccoe",
      color: "#0077B5"
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
      url: "https://instagram.com/acmw_pccoe",
      color: "#E4405F"
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
      url: "https://twitter.com/acmw_pccoe",
      color: "#1DA1F2"
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/acmw-pccoe",
      color: "#333"
    }
  ];

  const faqData = [
    {
      question: "How can I join ACM-W PCCOE?",
      answer: "You can join ACM-W PCCOE by filling out our membership form available on our website or contacting us directly. We welcome all students interested in technology and women's empowerment."
    },
    {
      question: "What events do you organize?",
      answer: "We organize various events including hackathons, workshops, seminars, networking events, and technical competitions. Check our Events page for upcoming activities."
    },
    {
      question: "Do I need prior programming experience?",
      answer: "No, we welcome students of all skill levels. We offer beginner-friendly workshops and mentorship programs to help you get started in technology."
    },
    {
      question: "How can I contribute to the community?",
      answer: "You can contribute by participating in events, sharing knowledge, mentoring others, or helping organize activities. We value all forms of contribution to our community."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 2000);
  };

  return (
    <div className={`contact-page ${darkMode ? 'dark-mode' : ''}`}>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`contact-hero ${heroInView ? 'animate' : ''}`}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1>Get in Touch</h1>
            <p className="hero-subtitle">
              We'd love to hear from you and answer any questions you might have
            </p>
            <p className="hero-description">
              Whether you want to join our community, collaborate on projects, 
              or just say hello, we're here to help and connect with you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        ref={contactRef}
        className="contact-section"
      >
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2>Contact Information</h2>
              <p className="section-description">
                Reach out to us through any of these channels. We're always happy to help!
              </p>
              
              <div className="contact-cards">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-card">
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-details">
                      <h3>{info.title}</h3>
                      <a href={info.link} target="_blank" rel="noopener noreferrer">
                        {info.details}
                      </a>
                      <p>{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      style={{ '--hover-color': social.color }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="contact-form-container"
              initial={{ opacity: 0, x: 30 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="form-header">
                <h2>Send us a Message</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <div className="input-icon">
                    <FaUser />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <div className="input-icon">
                    <FaEnvelope />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <div className="input-icon">
                    <FaFileAlt />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <div className="input-icon">
                    <FaComment />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    required
                    rows="5"
                    className="form-textarea"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`submit-button ${isSubmitting ? 'loading' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="success-message"
                  >
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="faq-content"
          >
            <h2>Frequently Asked Questions</h2>
            <p className="section-description">
              Find answers to common questions about ACM-W PCCOE
            </p>
            
            <div className="faq-grid">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  className="faq-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="map-content"
          >
            <h2>Find Us</h2>
            <p>Visit our campus to meet us in person and explore our facilities.</p>
            
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1234567890123!2d73.7654321!3d18.654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM5JzE1LjYiTiA3M8KwNDUnNTUuNiJF!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PCCOE Campus Location"
              ></iframe>
            </div>
            
            <div className="location-details">
              <h3>Pimpri Chinchwad College of Engineering</h3>
              <p>Sector 26, Pradhikaran, Nigdi, Pune - 411044</p>
              <p>Maharashtra, India</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
