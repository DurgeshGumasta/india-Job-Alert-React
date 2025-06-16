import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'; // Link to the CSS file

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <Link to="/" className="logo-link">
            <i className="fas fa-briefcase custom-briefcase-icon" style={{ fontSize: '2rem', color: '#4ade80' }}></i>

          {/* <img src="/src/assets/logo1.png" alt="RojGaar Suchna Logo" className="logo" /> */}
          <span className="site-name">रोजगार सूचना</span>
          {/* रोजगार सूचना */}
        </Link>
      </div>
      <nav className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          <i className="fas fa-home"></i> Home
        </Link>
        <Link to="/sarkari-job-search" className={location.pathname.includes('/sarkari-job-search') ? 'active' : ''}>
          <i className="fas fa-briefcase"></i> Latest Jobs
        </Link>
        <Link to="/syllabus" className={location.pathname === '/syllabus' ? 'active' : ''}>
          <i className="fas fa-book"></i> Syllabus
        </Link>
        <Link to="/exam-calendar" className={location.pathname === '/exam-calendar' ? 'active' : ''}>
          <i className="fas fa-calendar"></i> Exam Calendar
        </Link>
        <Link to="/study-material" className={location.pathname === '/study-material' ? 'active' : ''}>
          <i className="fas fa-graduation-cap"></i> Study Material
        </Link>
      </nav>
      <div className="cta-buttons">
        <button className="btn sign-in">
          <i className="fas fa-sign-in-alt"></i> Login
        </button>
        <button className="btn sign-up">
          <i className="fas fa-user-plus"></i> Register
        </button>
      </div>
    </header>
  );
};

export default Header;
