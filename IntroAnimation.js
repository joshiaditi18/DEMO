import { useEffect, useState } from 'react';
import '../css/IntroAnimation.css';
import logo from '../assets/acmw.png';



const RingLoader = ({ onComplete }) => {
  const [zoomOut, setZoomOut] = useState(false);

  useEffect(() => {
    const zoomTimeout = setTimeout(() => setZoomOut(true), 4200);
    const completeTimeout = setTimeout(() => onComplete(), 5000);

    return () => {
      clearTimeout(zoomTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <div className={`ring-loader-container${zoomOut ? ' zoom-out' : ''}`}>
      <div className="loader-ring-set">
        {/* Largest static ring */}
        <div className="loader-ring-track extra1"></div>
        {/* Second largest static ring */}
        <div className="loader-ring-track extra2"></div>
        {/* Extra static ring */}
        <div className="loader-ring-track extra3"></div>
        {/* Two original static rings */}
        <div className="loader-ring-track outer"></div>
        <div className="loader-ring-track inner"></div>
        {/* Rotating rings */}
        <div className="loader-ring-light outer"></div>
        <div className="loader-ring-light inner"></div>
        {/* Logo */}
        <img src={logo} alt="ACM-W Logo" className="loader-logo" draggable="false"/>
      </div>
    </div>
  );
};

export default RingLoader;
