import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-root">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-left">
          <h1 className="hero-title">सरकारी नौकरी का सबसे भरोसमंद प्लेटफार्म</h1>
          <p className="hero-subtitle">Latest Government Job Alerts, Exam Updates & Study Materials</p>
          {/* <div className="hero-search-row">
            <input className="hero-search-input" placeholder="Search jobs, exams, departments..." />
            <button className="hero-search-btn"><i className="fas fa-search"></i></button>
          </div>
          <div className="hero-btn-row">
            <button className="hero-browse-btn">Browse Jobs</button>
            <button className="hero-syllabus-btn">View Syllabus</button>
          </div> */}
        </div>
        <div className="hero-right">
          <img src="src/assets/sarkari building1 (1).jpg" alt="Building" className="hero-img" />
        </div>
      </section>
      {/* Stats Row */}
      <section className="stats-row">
        <div className="stat-card"><span className="stat-main">50K+</span><span className="stat-label">Active Jobs</span></div>
        <div className="stat-card"><span className="stat-main">2L+</span><span className="stat-label">Users</span></div>
        <div className="stat-card"><span className="stat-main">100+</span><span className="stat-label">Departments</span></div>
        <div className="stat-card"><span className="stat-main">95%</span><span className="stat-label">Success Rate</span></div>
      </section>
      {/* Latest Government Jobs */}
      <section className="latest-jobs-section">
        <h2 className="section-title">Latest Government Jobs</h2>
        <p className="section-subtitle">Fresh opportunities updated daily</p>
        <div className="latest-jobs-row">
          <div className="job-card">
            <span className="job-badge job-badge-expire">Expires in 5 days</span>
            <div className="job-title">SSC CGL 2024</div>
            <div className="job-org">Staff Selection Commission</div>
            <div className="job-salary">₹25,000 - ₹75,000</div>
            <div className="job-location">All India</div>
            <div className="job-date">Last Date: 25 Dec 2024</div>
            <button className="job-apply-btn">Apply Now</button>
          </div>
          <div className="job-card">
            <span className="job-badge job-badge-new">New</span>
            <div className="job-title">IBPS PO 2024</div>
            <div className="job-org">Banking Sector</div>
            <div className="job-salary">₹30,000 - ₹50,000</div>
            <div className="job-location">Pan India</div>
            <div className="job-date">Last Date: 30 Dec 2024</div>
            <button className="job-apply-btn">Apply Now</button>
          </div>
          <div className="job-card">
            <span className="job-badge job-badge-hot">Hot</span>
            <div className="job-title">Railway Group D</div>
            <div className="job-org">Indian Railways</div>
            <div className="job-salary">₹18,000 - ₹35,000</div>
            <div className="job-location">All Zones</div>
            <div className="job-date">Last Date: 20 Dec 2024</div>
            <button className="job-apply-btn">Apply Now</button>
          </div>
        </div>
        <button className="view-all-jobs-btn">View All Jobs</button>
      </section>
      {/* Competitive Exams */}
      <section className="exams-section">
        <h2 className="section-title">Competitive Exams</h2>
        <p className="section-subtitle">Prepare for top government exams</p>
        <div className="exams-row">
          <div className="exam-card"><i className="fas fa-university exam-icon"></i><div>UPSC<br /><span className="exam-label">Civil Services</span></div></div>
          <div className="exam-card"><i className="fas fa-users exam-icon"></i><div>SSC<br /><span className="exam-label">Staff Selection</span></div></div>
          <div className="exam-card"><i className="fas fa-landmark exam-icon"></i><div>IBPS<br /><span className="exam-label">Banking</span></div></div>
          <div className="exam-card"><i className="fas fa-train exam-icon"></i><div>Railway<br /><span className="exam-label">RRB Exams</span></div></div>
          <div className="exam-card"><i className="fas fa-gavel exam-icon"></i><div>State PSC<br /><span className="exam-label">State Services</span></div></div>
        </div>
      </section>
      {/* Study Resources */}
      <section className="resources-section">
        <h2 className="section-title">Study Resources</h2>
        <p className="section-subtitle">Everything you need to crack government exams</p>
        <div className="resources-row">
          <div className="resource-card">
            <i className="fas fa-book resource-icon"></i>
            <div className="resource-title">Study Material</div>
            <div className="resource-desc">Comprehensive notes and guides</div>
            <a href="#" className="resource-link">Access Now</a>
          </div>
          <div className="resource-card">
            <i className="fas fa-edit resource-icon"></i>
            <div className="resource-title">Mock Tests</div>
            <div className="resource-desc">Practice with real exam patterns</div>
            <a href="#" className="resource-link">Start Test</a>
          </div>
          <div className="resource-card">
            <i className="fas fa-file-alt resource-icon"></i>
            <div className="resource-title">Previous Papers</div>
            <div className="resource-desc">Last 10 years question papers</div>
            <a href="#" className="resource-link">Download</a>
          </div>
          <div className="resource-card">
            <i className="fas fa-video resource-icon"></i>
            <div className="resource-title">Video Lectures</div>
            <div className="resource-desc">Expert guidance and tips</div>
            <a href="#" className="resource-link">Watch Now</a>
          </div>
        </div>
      </section>
      {/* Success Stories */}
      <section className="success-section">
        <h2 className="section-title">Success Stories</h2>
        <p className="section-subtitle">Real people, real achievements</p>
        <div className="success-row">
          <div className="testimonial-card">
            <img src="/user1.jpg" alt="Priya Sharma" className="testimonial-img" />
            <div className="testimonial-name">Priya Sharma</div>
            <div className="testimonial-role">IAS Officer</div>
            <div className="testimonial-quote">“रोजगार सूचना helped me stay updated with all UPSC notifications. The study material was comprehensive and really helpful.”</div>
            <div className="testimonial-stars">★★★★★</div>
          </div>
          <div className="testimonial-card">
            <img src="/user2.jpg" alt="Rahul Kumar" className="testimonial-img" />
            <div className="testimonial-name">Rahul Kumar</div>
            <div className="testimonial-role">SBI PO</div>
            <div className="testimonial-quote">“Mock tests on this platform were exactly like the real exam. I cleared IBPS PO on my first attempt!”</div>
            <div className="testimonial-stars">★★★★★</div>
          </div>
          <div className="testimonial-card">
            <img src="/user3.jpg" alt="Amit Singh" className="testimonial-img" />
            <div className="testimonial-name">Amit Singh</div>
            <div className="testimonial-role">Railway Officer</div>
            <div className="testimonial-quote">“Best platform for government job alerts. Never missed any important notification because of their timely updates.”</div>
            <div className="testimonial-stars">★★★★★</div>
          </div>
        </div>
      </section>
      {/* Newsletter Section */}
      <section className="newsletter-section">
        <h2 className="newsletter-title">Never Miss a Job Alert</h2>
        <p className="newsletter-subtitle">Get latest government job notifications directly in your inbox</p>
        <form className="newsletter-form">
          <input className="newsletter-input" placeholder="Enter your email" />
          <button className="newsletter-btn">Subscribe</button>
        </form>
      </section>
    </div>
  );
}
