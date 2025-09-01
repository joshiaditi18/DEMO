import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaCrown, FaUsers, FaStar } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import '../css/Team.css';

// Import team member images
import sanskrutiImg from '../assets/sanskruti.png';
import vaishnaviImg from '../assets/vaishnavi.png';
import kamakshaImg from '../assets/kamaksha.png';
import utkarshImg from '../assets/utkarsha.png';
import sabaImg from '../assets/Saba.png';
import snehaImg from '../assets/sneha.png';
import akanshaImg from '../assets/Akansha.png';
import dhanashreeImg from '../assets/Dhanashree.png';
import akshataImg from '../assets/akshata.png';
import prastutiImg from '../assets/Prastuti Motghare.png';
import shravaniImg from '../assets/Shravani Pande.png';
import sakshiImg from '../assets/Sakshi.png';
import shwetaImg from '../assets/Shweta.png';
import kartikaImg from '../assets/kartika.png';
import tejashreeImg from '../assets/Tejashree panaskar.png';
import hodImg from '../assets/HOD_mam.png';
import aparnaImg from '../assets/Aparna_Mam.png';
import trushitaImg from '../assets/Trushita.png';
// import dikshaImg from '../assets/Diksha.HEIC'; // HEIC format not supported in browsers

const Team = ({ darkMode }) => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  // Intersection Observer hooks
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const memberImageByName = {
    'Sonali Patil': hodImg,
    'Dr.Aparna Joshi': aparnaImg,
    'Sanskruti Dahiphale': sanskrutiImg,
    'Vaishnavi Kadam': vaishnaviImg,
    'Kamaksha Kharul': kamakshaImg,
    'Utkarsh Zade': utkarshImg,
    'Saba Sayyad': sabaImg,
    'Sneha Ingale': snehaImg,
    'Akansha Kale': akanshaImg,
    'Dhanashree sul': dhanashreeImg,
    'Akshata Majgaonkar': akshataImg,
    'Prastuti Motghare': prastutiImg,
    'Shravani Pande': shravaniImg,
    'Sakshi': sakshiImg,
    'Shweta': shwetaImg,
    'Kartika': kartikaImg,
    'Tejashree panaskar': tejashreeImg,
    //'Diksha Rokade': null 
  };

  const getMemberImage = (member) => {
    const image = memberImageByName[member?.name] || member?.image || '';
    
    // If no image, use fallback
    if (!image) {
      return generateFallbackImage(member?.name);
    }
    
    return image;
  };




  const generateFallbackImage = (fullName) => {
    const name = encodeURIComponent(fullName || 'Member');
    return `https://ui-avatars.com/api/?name=${name}&size=400&background=1e40af&color=ffffff`;
  };

  const teamMembers = {
    Faculty: [
      {
        id: 1,
        name: "Sonali Patil",
        role: "Head Of Department",
        image: hodImg,
        department: "Computer Engineering",
        year: "Faculty",
        linkedin: "https://www.linkedin.com/in/dr-sonali-d-patil-9413681b/",
        email: "sonali.patil@example.com",
        description: "Leading the Computer Engineering Department with expertise in computer science and engineering education.",
        achievements: ["Department Head", "Research Publications", "Academic Leadership"],
        skills: ["Computer Science", "Engineering Education", "Research", "Leadership"]
      },
      {
        id: 2,
        name: "Dr.Aparna Joshi",
        role: "ACM-W Coordinator",
        image: aparnaImg,
        department: "Computer Engineering",
        year: "Faculty",
        linkedin: "https://linkedin.com/in/aparna-joshi",
        github: "https://github.com/aparna",
        email: "aparna.joshi@example.com",
        description: "Coordinating ACM-W activities and mentoring students in computing and technology.",
        achievements: ["ACM-W Coordinator", "Student Mentor", "Technical Education"],
        skills: ["Computer Science", "Student Mentoring", "ACM-W Coordination", "Education"]
      }
    ],

    core: [
      {
        id: 1,
        name: "Sanskruti Dahiphale",
        role: "President",
        image: sanskrutiImg,
        department: "Computer Engineering",
        year: "Pre Final Year",
        linkedin: "https://www.linkedin.com/in/sanskruti-dahiphale-0b6391320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: null,
        email: "sanskruti.dahiphale23@pccoepune.org",
        description: "Leading ACM-W PCCOE with passion and dedication. Experienced in web development and community building.",
        achievements: ["Best Student Chapter Award 2023", "Hackathon Winner 2024", "Mentored 50+ students"],
        skills: ["React", "Node.js", "Leadership", "Community Management"]
      },
      {
        id: 2,
        name: "Vaishnavi Kadam",
        role: "Vice President",
        image: vaishnaviImg,
        department: "Computer Engineering",
        year: "Final Year",
        linkedin: "https://www.linkedin.com/in/vaishnavikadam2125",
        github: null,
        email: "vaishnavi.kadam24@pccoepune.org",
        description: "Driving innovation and technical excellence in our community. Specialized in AI/ML and competitive programming.",
        achievements: ["Google Code Jam Qualifier", "AI Research Paper Published", "Technical Lead for 10+ projects"],
        skills: ["Python", "Machine Learning", "Competitive Programming", "Project Management"]
      },
      {
        id: 3,
        name: "Kamaksha Kharul",
        role: "Secretary",
        image: kamakshaImg,
        department: "Computer Engineering",
        year: "Third Year",
        linkedin: "https://www.linkedin.com/in/kamaaksha-kharul-a95451326/",
        github: "https://github.com/kharulkamaaksha",
        email: "kamaaksha.kharul23@pccoepune.org",
        description: "Organizing events and managing communications. Passionate about creating inclusive tech communities.",
        achievements: ["Event Management Excellence", "Community Outreach Leader", "Technical Workshop Organizer"],
        skills: ["Event Management", "Communication", "UI/UX Design", "Team Coordination"]
      },
      {
        id: 4,
        name: "Utkarsh Zade",
        role: "Co-Secretary",
        image: utkarshImg,
        department: "Computer Engineering",
        year: "Third Year",
        linkedin: "https://www.linkedin.com/in/utkarsha-zade-524a82292/",
        github: "https://github.com/UtkarshaZade",
        email: "utkarsha.zade23@pccoepune.org",
        description: "Organizing events and managing communications. Passionate about creating inclusive tech communities.",
        achievements: ["Event Management Excellence", "Community Outreach Leader", "Technical Workshop Organizer"],
        skills: ["Event Management", "Communication", "UI/UX Design", "Team Coordination"]
      },
      {
        id: 5,
        name: "Saba Sayyad",
        role: "Management Executive",
        image: sabaImg,
        department: "Computer Engineering",
        year: "Third Year",
        linkedin: "https://www.linkedin.com/in/saba-sayyad-b22634326/",
        github: null,
        email: "saba.sayyad23@pccoepune.org",
        description: "Organizing events and managing communications. Passionate about creating inclusive tech communities.",
        achievements: ["Event Management Excellence", "Community Outreach Leader", "Technical Workshop Organizer"],
        skills: ["Event Management", "Communication", "UI/UX Design", "Team Coordination"]
      },
      {
        id: 6,
        name: "Sneha Ingale",
        role: "Treasurer",
        image: snehaImg,
        department: "Computer Engineering",
        year: "Third Year",
        linkedin: "https://www.linkedin.com/in/sneha-ingale-466bb8310",
        github: null,
        email: "sneha.ingale23@pccoepune.org",
        description: "Organizing events and managing communications. Passionate about creating inclusive tech communities.",
        achievements: ["Event Management Excellence", "Community Outreach Leader", "Technical Workshop Organizer"],
        skills: ["Event Management", "Communication", "UI/UX Design", "Team Coordination"]
      },
      {
        id: 7,
        name: "Akansha Kale",
        role: "Membership Chair",
        image: akanshaImg,
        department: "Computer Engineering",
        year: "Third Year",
        linkedin: "https://www.linkedin.com/in/akanksha-kale-044505303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/Akanksha123B1B159",
        email: "akanksha.kale23@pccoepune.org",
        description: "Organizing events and managing communications. Passionate about creating inclusive tech communities.",
        achievements: ["Event Management Excellence", "Community Outreach Leader", "Technical Workshop Organizer"],
        skills: ["Event Management", "Communication", "UI/UX Design", "Team Coordination"]
      }
    ],
    webTeam: [
      {
        id: 8,
        name: "Dhanashree sul",
        role: "Senior Webmaster",
        image: dhanashreeImg,
        department: "Computer Engineering",
        year: "Third Year",
        linkedin: "https://www.linkedin.com/in/dhanashree-sul-513546294/",
        github: "https://github.com/DhanashreeSSul/",
        email: "dhanashree.sul23@pccoepune.org",
        description: "Leading technical initiatives and mentoring junior members. Expert in full-stack development.",
        achievements: ["Full Stack Developer", "Mentored 30+ students", "Technical Workshop Instructor"],
        skills: ["JavaScript", "React", "Node.js", "MongoDB"]
      }
    ],
    technicalTeam: [
      {
        id: 9,
        name: "Akshata Majgaonkar",
        role: "Technical Head",
        image: akshataImg,
        department: "Computer Engineering",
        year: "Third Year",
        linkedin: "https://www.linkedin.com/in/akshata-majgaonkar-2ba51627b/",
        github: null,
        email: "akshata.majgaonkar24@pccoepune.org",
        description: "Leading technical initiatives and mentoring junior members. Expert in full-stack development.",
        achievements: ["Full Stack Developer", "Mentored 30+ students", "Technical Workshop Instructor"],
        skills: ["JavaScript", "React", "Node.js", "MongoDB"]
      },
      {
        id: 10,
        name: "Trushita Sathe",
        role: "Technical Head",
        image: trushitaImg,
        department: "Computer Engineering",
        year: "Second Year",
        linkedin: "http://www.linkedin.com/in/trushita-sathe-100727274",
        github: "https://github.com/TRUSHITA-NS18",
        email: "trushita.sathe24@pccoepune.org",
        description: "Creating engaging content and managing our digital presence. Passionate about tech writing and design.",
        achievements: ["Content Creator", "Social Media Manager", "Design Enthusiast"],
        skills: ["Content Writing", "Graphic Design", "Social Media", "UI/UX"]
      },
      {
        id: 11,
        name: "Shweta Jadhav",
        role: "Technical Head",
        image: shwetaImg,
        department: "Computer Engineering",
        year: "Second Year",
        linkedin: "https://www.linkedin.com/in/shweta-jadhav-9510b5292/",
        github: "https://github.com/ShwetaJadhav12",
        email: "shweta.jadhav23@pccoepune.org",
        description: "Active member contributing to various projects and events. Learning and growing with the community.",
        achievements: ["Hackathon Participant", "Workshop Attendee", "Community Contributor"],
        skills: ["Python", "Web Development", "Team Collaboration"]
      }
    ],
    socialMediaTeam: [
      {
        id: 12,
        name: "Diksha Rokade",
        role: "Social Media Head",
        image: null, // Will use fallback image
        department: "Computer Engineering",
        year: "Second Year",
        linkedin: "https://www.linkedin.com/in/diksha-rokade-0997a5311",
        github: null,
        email: "diksha.rokade23@pccoepune.org",
        description: "Managing social media presence and creating engaging content for our community.",
        achievements: ["Social Media Manager", "Content Creator", "Community Engagement"],
        skills: ["Social Media Marketing", "Content Creation", "Community Management", "Digital Marketing"]
      },
      {
        id: 13,
        name: "Sakshi Khairnar",
        role: "Social Media Head",
        image: sakshiImg,
        department: "Computer Engineering",
        year: "Second Year",
        linkedin: "https://www.linkedin.com/in/sakshikhairnar1794/",
        github: "https://github.com/sakshikhairnar1794",
        email: "sakshi.khairnar23@pccoepune.org",
        description: "Passionate about data science and machine learning. Contributing to technical projects and learning initiatives.",
        achievements: ["Data Science Enthusiast", "ML Workshop Participant", "Project Contributor"],
        skills: ["Python", "Machine Learning", "Data Analysis", "Statistics"]
      }
    ],
    designTeam: [
      {
        id: 14,
        name: "Kartika Shah",
        role: "Design Head",
        image: kartikaImg,
        department: "Computer Engineering",
        year: "Second Year",
        linkedin: null,
        github: null,
        email: null,
        description: "Leading design initiatives and creating visually appealing content for our community.",
        achievements: ["Design Lead", "UI/UX Designer", "Creative Director"],
        skills: ["UI/UX Design", "Graphic Design", "Adobe Creative Suite", "Visual Communication"]
      }
    ]

  };

  const filters = [
    { id: 'Faculty', label: 'Faculty', icon: <FaUsers /> },
    { id: 'core', label: 'Core Team', icon: <FaStar /> },
    { id: 'webTeam', label: 'Web Team', icon: <FaUsers /> },
    { id: 'technicalTeam', label: 'Technical Team', icon: <FaStar /> },
    { id: 'socialMediaTeam', label: 'Social Media Team', icon: <FaUsers /> },
    { id: 'designTeam', label: 'Design Team', icon: <FaUsers /> }
  ];

  const getFilteredMembers = () => {
    return teamMembers[activeFilter] || [];
  };

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className={`team-page ${darkMode ? 'dark-mode' : ''}`}>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`team-hero ${heroInView ? 'animate' : ''}`}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1>Meet Our Team</h1>
            <p className="hero-subtitle">
              The passionate individuals driving innovation and empowerment in our community
            </p>
            <p className="hero-description">
              Our diverse team of leaders, innovators, and changemakers work together to create 
              opportunities and foster growth for women in computing and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        ref={teamRef}
        className="team-section"
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
                <span className="filter-icon">{filter.icon}</span>
                {filter.label}
              </button>
            ))}
          </div>

          {/* Team Grid */}
          <div className={activeFilter === 'Faculty' ? 'faculty-grid' : 'team-grid'}>
            {getFilteredMembers().map((member, index) => (
              <motion.div
                key={member.id}
                className={`team-card ${activeFilter === 'Faculty' ? 'faculty-card' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => handleMemberClick(member)}
              >
                <div className="member-image">
                  <img
                    src={getMemberImage(member)}
                    alt={member.name}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = generateFallbackImage(member.name);
                    }}
                  />
                  <div className="member-overlay">
                    <span>View Profile</span>
                  </div>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-department">{member.department} • {member.year}</p>
                  <div className="member-social">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                    </a>
                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                    <a href={`mailto:${member.email}`}>
                      <FaEnvelope />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Modal */}
      {selectedMember && (
        <div className="modal-overlay" onClick={closeModal}>
          <motion.div
            className="member-modal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-content">
              <div className="modal-header">
                <img
                  src={getMemberImage(selectedMember)}
                  alt={selectedMember.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = generateFallbackImage(selectedMember.name);
                  }}
                />
                <div className="modal-info">
                  <h2>{selectedMember.name}</h2>
                  <p className="modal-role">{selectedMember.role}</p>
                  <p className="modal-department">{selectedMember.department} • {selectedMember.year}</p>
                </div>
              </div>
              <div className="modal-body">
                <p className="modal-description">{selectedMember.description}</p>
                
                <div className="modal-section">
                  <h3>Achievements</h3>
                  <ul className="achievements-list">
                    {selectedMember.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h3>Skills</h3>
                  <div className="skills-tags">
                    {selectedMember.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-section">
                  <h3>Connect</h3>
                  <div className="modal-social">
                    {selectedMember.linkedin && (
                      <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaLinkedin />
                        <span>LinkedIn</span>
                      </a>
                    )}
                    {selectedMember.github && (
                      <a href={selectedMember.github} target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaGithub />
                        <span>GitHub</span>
                      </a>
                    )}
                    {selectedMember.email && (
                      <a href={`mailto:${selectedMember.email}`} className="social-link">
                        <FaEnvelope />
                        <span>Email</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Join Team Section */}
      <section className="join-team-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="join-content"
          >
            <h2>Join Our Team</h2>
            <p>
              Want to be part of our amazing team? We're always looking for passionate individuals 
              who want to make a difference in the tech community.
            </p>
            <div className="join-buttons">
              <button className="btn-primary">Apply Now</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
