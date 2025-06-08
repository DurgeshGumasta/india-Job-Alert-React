import React from 'react';
import './Header.css'; // Link to the CSS file

const Header = () => {
  return (
    // <header className="header">
    //   {/* Logo */}
    //   <div className="logo-container">
    //     <img src="\src\assets\logo1.png" alt="Sitemark Logo" className="logo" />
    //     <span className="logo-text">RojGaar Suchna</span>
    //   </div>

    //   {/* Nav Links */}
    //   <nav className="nav-links">
    //     <a href="#features">Home</a>
    //     <a href="#testimonials">Letest Job</a>
    //     <a href="#pricing">Syllebus</a>
    //   </nav>

    //   {/* Auth Buttons */}
    //   {/* <div className="auth-buttons">
    //     <button className="sign-in">Sign in</button>
    //     <button className="sign-up">Sign up</button>
    //   </div> */}
    // </header>

    <header class="header">
  <div class="logo-container">
    <img src="/src/assets/logo1.png" alt="RojGaar Suchna Logo" class="logo" />
    <span class="site-name">RojGaar Suchna</span>
  </div>
  <nav class="nav-links">
    <a href="#">Home</a>
    <a href="#">Latest Jobs</a>
    <a href="#">Syllabus</a>
    <a href="#">Results</a>
  </nav>
  <div class="cta-buttons">
    <button class="btn sign-in">Sign In</button>
    <button class="btn sign-up">Register</button>
  </div>
</header>

  );
};

export default Header;
