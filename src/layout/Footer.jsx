import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <Link to="/" className="brand-logo">
            <img src="/src/assets/logo1.png" alt="RojGaar Suchna" className="footer-logo" />
            <span className="brand-name">रोजगार सूचना</span>
          </Link>
          <p className="brand-description">
            India's #1 Sarkari Job Portal. Trusted by lakhs of aspirants for SSC, UPSC, RRB, and more.
          </p>
          <div className="trust-badges">
            <span className="badge">
              <i className="fas fa-check-circle"></i> 100% Verified Jobs
            </span>
            <span className="badge">
              <i className="fas fa-users"></i> 1M+ Users
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/sarkari-job-search">
                <i className="fas fa-briefcase"></i> Latest Jobs
              </Link>
            </li>
            <li>
              <Link to="/syllabus">
                <i className="fas fa-book"></i> Syllabus
              </Link>
            </li>
            <li>
              <Link to="/exam-calendar">
                <i className="fas fa-calendar"></i> Exam Calendar
              </Link>
            </li>
            <li>
              <Link to="/mock-tests">
                <i className="fas fa-pencil-alt"></i> Mock Tests
              </Link>
            </li>
            <li>
              <Link to="/download-app">
                <i className="fas fa-mobile-alt"></i> Download App
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <div className="contact-info">
            <p>
              <i className="fas fa-envelope"></i>
              <a href="mailto:support@rojgaarsuchna.in">support@rojgaarsuchna.in</a>
            </p>
            <p>
              <i className="fab fa-whatsapp"></i>
              <a href="https://wa.me/your-number">Join WhatsApp Group</a>
            </p>
            <p>
              <i className="fab fa-telegram"></i>
              <a href="https://t.me/your-channel">Join Telegram Channel</a>
            </p>
          </div>
          <div className="social-icons">
            <a href="#" className="social-icon" title="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon" title="Twitter">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="#" className="social-icon" title="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="social-icon" title="Telegram">
              <i className="fab fa-telegram"></i>
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-subscribe">
          <h4>Get Job Alerts</h4>
          <form onSubmit={handleSubscribe} className="subscribe-form">
            <div className="input-group">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            {isSubscribed && (
              <p className="success-message">
                <i className="fas fa-check-circle"></i> Subscribed successfully!
              </p>
            )}
            <p className="privacy-note">No spam. Only relevant job alerts.</p>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>© {new Date().getFullYear()} RojGaar Suchna. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`} 
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </footer>
  );
}
