import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';
import logo from '../assets/acmw.png'; // Replace with your logo path
import '../css/header.css'; // Make sure this path matches your project structure

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/events', label: 'Events' },
  { to: '/team', label: 'Team' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
];

const Header = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    document.body.style.transition = 'background-color 0.4s ease, color 0.4s ease';
    return () => {
      document.body.style.transition = '';
    };
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(dm => !dm);

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.6, 0.05, 0.01, 0.9] }}
      className={`header${darkMode ? ' dark' : ''}`}
    >
      <div className="header-container">
        {/* Logo without ACM-W and PCCOE text, static */}
        <Link to="/" className="logo-container" tabIndex={0}>
          <div className="logo-wrapper">
            <img src={logo} alt="ACM-W PCCOE" className="logo" />
          </div>
        </Link>
        {/* Centered Desktop Navigation */}
        <nav className="desktop-nav centered-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.to} className="nav-item">
                <Link to={link.to} className="nav-link">
                  {link.label}
                  <span className="underline"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Controls: Theme Toggle + Mobile Menu Button */}
        <div className="header-controls">
          <button
            className="theme-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            title="Toggle dark/light mode"
          >
            <AnimatePresence mode="wait" initial={false}>
              {darkMode ? (
                <motion.span
                  key="sun"
                  initial={{ opacity: 0, rotate: 90, scale: 0.3 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.2 }}
                  transition={{ duration: 0.4 }}
                >
                  <FaSun />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ opacity: 0, rotate: -90, scale: 0.3 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.2 }}
                  transition={{ duration: 0.4 }}
                >
                  <FaMoon />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(m => !m)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <div className={`bar ${mobileMenuOpen ? 'change' : ''}`}></div>
            <div className={`bar ${mobileMenuOpen ? 'change' : ''}`}></div>
            <div className={`bar ${mobileMenuOpen ? 'change' : ''}`}></div>
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      <nav className={`mobile-nav${mobileMenuOpen ? ' open' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
