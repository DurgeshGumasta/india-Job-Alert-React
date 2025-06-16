import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer custom-footer">
      <div className="footer-container custom-footer-container">
        {/* Left: Logo, Hindi name, tagline, social icons */}
        <div className="footer-brand custom-footer-brand">
          <div className="brand-logo custom-brand-logo">
            <i className="fas fa-briefcase custom-briefcase-icon" style={{ fontSize: '2rem', color: '#4ade80' }}></i>
            <span className="brand-name custom-brand-name">रोजगार सूचना</span>
          </div>
          <p className="brand-description custom-brand-description">
            Your trusted partner for government job alerts and exam preparation.
          </p>
          <div className="social-icons custom-social-icons">
            <a href="#" className="social-icon" title="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon" title="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon" title="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-icon" title="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        {/* Right: Quick Links */}
        <div className="footer-links custom-footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/sarkari-job-search">Latest Jobs</Link>
            </li>
            <li>
              <Link to="/admit-cards">Admit Cards</Link>
            </li>
            <li>
              <Link to="/results">Results</Link>
            </li>
            <li>
              <Link to="/syllabus">Syllabus</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Footer Bottom (optional, for copyright) */}
      <div className="footer-bottom custom-footer-bottom">
        <p>© {new Date().getFullYear()} रोजगार सूचना. All rights reserved.</p>
      </div>
    </footer>
  );
}
