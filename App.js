import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/IntroAnimation';
import Home from './components/Home';
import EventsPage from './components/Events';
import Header from './components/Header1';
import About from './components/About';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        {/* Always visible header */}
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <AnimatePresence mode="wait">
          {loading ? (
            <Loader key="loader" onComplete={() => setLoading(false)} />
          ) : (
            <Routes key="routes">
            <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/about" element={<About darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/events" element={<EventsPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/team" element={<Team darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/gallery" element={<Gallery darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/resources" element={<Resources darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/contact" element={<Contact darkMode={darkMode} setDarkMode={setDarkMode} />} />
          </Routes>

          )}
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
