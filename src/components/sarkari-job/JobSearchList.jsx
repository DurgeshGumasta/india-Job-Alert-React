import React, { useState } from 'react';
import './JobSearchList.css';

const JobSearchList = () => {
  const [filters, setFilters] = useState({
    location: '',
    jobType: '',
    qualification: '',
    dateRange: 'all'
  });

  // Mock data - will be replaced with API data
  const jobs = [
    {
      id: 1,
      nameOfPost: "Junior Engineer",
      jobLocation: "Delhi",
      jobType: "Permanent",
      educationalQualification: "B.Tech",
      payScale: "Level 6",
      applicationStartDate: "2024-03-01",
      applicationEndDate: "2024-03-31",
      totalVacancy: 100,
      shortInformation: "Government job for Junior Engineer position"
    },
    // Add more mock jobs as needed
  ];

  return (
    <div className="job-search-container">
      <div className="search-filters">
        <h2>Search Government Jobs</h2>
        <div className="filter-grid">
          <div className="filter-group">
            <label>Location</label>
            <input 
              type="text" 
              placeholder="Enter location"
              value={filters.location}
              onChange={(e) => setFilters({...filters, location: e.target.value})}
            />
          </div>
          <div className="filter-group">
            <label>Job Type</label>
            <select 
              value={filters.jobType}
              onChange={(e) => setFilters({...filters, jobType: e.target.value})}
            >
              <option value="">All Types</option>
              <option value="permanent">Permanent</option>
              <option value="contract">Contract</option>
              <option value="temporary">Temporary</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Qualification</label>
            <select 
              value={filters.qualification}
              onChange={(e) => setFilters({...filters, qualification: e.target.value})}
            >
              <option value="">All Qualifications</option>
              <option value="btech">B.Tech</option>
              <option value="mba">MBA</option>
              <option value="bsc">B.Sc</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Date Posted</label>
            <select 
              value={filters.dateRange}
              onChange={(e) => setFilters({...filters, dateRange: e.target.value})}
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
          </div>
        </div>
      </div>

      <div className="job-list">
        {jobs.map(job => (
          <div key={job.id} className="job-card">
            <div className="job-header">
              <h3>{job.nameOfPost}</h3>
              <span className="job-type">{job.jobType}</span>
            </div>
            <div className="job-details">
              <div className="detail-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>{job.jobLocation}</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-graduation-cap"></i>
                <span>{job.educationalQualification}</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-money-bill-wave"></i>
                <span>{job.payScale}</span>
              </div>
            </div>
            <div className="job-footer">
              <div className="vacancy-info">
                <span>Total Vacancy: {job.totalVacancy}</span>
              </div>
              <div className="date-info">
                <span>Last Date: {new Date(job.applicationEndDate).toLocaleDateString()}</span>
              </div>
              <a href={`/sarkari-job-details/${job.id}`} className="view-details-btn">
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobSearchList; 