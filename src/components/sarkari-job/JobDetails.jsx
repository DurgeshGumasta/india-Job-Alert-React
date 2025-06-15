import React from 'react';
import { useParams } from 'react-router-dom';
import './JobDetails.css';

const JobDetails = () => {
  const { id } = useParams();

  // Mock data - will be replaced with API data
  const jobDetails = {
    nameOfPost: "Junior Engineer",
    jobLocation: "Delhi",
    jobType: "Permanent",
    educationalQualification: "B.Tech",
    payScale: "Level 6",
    payLevel: "6",
    applicationStartDate: "2024-03-01",
    applicationEndDate: "2024-03-31",
    examDate: "2024-04-15",
    interviewDate: "2024-05-01",
    resultDate: "2024-05-15",
    totalVacancy: 100,
    vacancyTotal: 100,
    vacancyGeneral: 40,
    vacancyObc: 27,
    vacancySc: 15,
    vacancySt: 8,
    vacancyEws: 10,
    minAge: 21,
    maxAgeMale: 30,
    maxAgeFemale: 35,
    feeGeneral: 500,
    feeObc: 500,
    feeSc: 250,
    feeSt: 250,
    feeEws: 500,
    feePh: 250,
    feePaymentMode: "Online",
    feePaymentLastDate: "2024-03-31",
    eligibilityDetails: "Candidates must have a valid B.Tech degree from a recognized university.",
    experienceRequired: "2 years of relevant experience",
    howToApply: "Apply online through the official website",
    officialWebsite: "https://example.com",
    advertisementNumber: "JE/2024/001",
    postCode: "JE001",
    postName: "Junior Engineer",
    jobBoard: "Engineering",
    documentsRequired: [
      "Educational Certificates",
      "Experience Certificate",
      "Age Proof",
      "Category Certificate",
      "Photo ID Proof"
    ],
    selectionStages: [
      "Written Examination",
      "Document Verification",
      "Medical Examination"
    ],
    examPattern: "Objective type questions covering technical and general knowledge",
    shortInformation: "Government job for Junior Engineer position",
    ageRelaxationDetails: "Age relaxation as per government norms",
    otherEligibility: "Must be an Indian citizen",
    serviceBondDetails: "3 years service bond applicable",
    admitCardReleaseDate: "2024-04-01",
    documentVerificationDate: "2024-05-20",
    photoSpecification: "Recent passport size photo",
    signatureSpecification: "Clear signature on white paper",
    scanDocumentRequirement: "All documents should be scanned in PDF format",
    previewInstructions: "Preview application before final submission",
    registrationRequired: true,
    postDate: "2024-02-15"
  };

  return (
    <div className="job-details-container">
      <div className="job-header">
        <h1>{jobDetails.nameOfPost}</h1>
        <div className="job-meta">
          <span className="job-type">{jobDetails.jobType}</span>
          <span className="job-location">
            <i className="fas fa-map-marker-alt"></i> {jobDetails.jobLocation}
          </span>
        </div>
      </div>

      <div className="job-content">
        <div className="main-info">
          <div className="info-card">
            <h3>Important Dates</h3>
            <ul>
              <li>
                <span>Application Start:</span>
                {new Date(jobDetails.applicationStartDate).toLocaleDateString()}
              </li>
              <li>
                <span>Last Date to Apply:</span>
                {new Date(jobDetails.applicationEndDate).toLocaleDateString()}
              </li>
              <li>
                <span>Exam Date:</span>
                {new Date(jobDetails.examDate).toLocaleDateString()}
              </li>
              <li>
                <span>Result Date:</span>
                {new Date(jobDetails.resultDate).toLocaleDateString()}
              </li>
            </ul>
          </div>

          <div className="info-card">
            <h3>Vacancy Details</h3>
            <div className="vacancy-grid">
              <div className="vacancy-item">
                <span>Total Vacancy</span>
                <strong>{jobDetails.totalVacancy}</strong>
              </div>
              <div className="vacancy-item">
                <span>General</span>
                <strong>{jobDetails.vacancyGeneral}</strong>
              </div>
              <div className="vacancy-item">
                <span>OBC</span>
                <strong>{jobDetails.vacancyObc}</strong>
              </div>
              <div className="vacancy-item">
                <span>SC</span>
                <strong>{jobDetails.vacancySc}</strong>
              </div>
              <div className="vacancy-item">
                <span>ST</span>
                <strong>{jobDetails.vacancySt}</strong>
              </div>
              <div className="vacancy-item">
                <span>EWS</span>
                <strong>{jobDetails.vacancyEws}</strong>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h3>Application Fee</h3>
            <div className="fee-grid">
              <div className="fee-item">
                <span>General/OBC/EWS</span>
                <strong>₹{jobDetails.feeGeneral}</strong>
              </div>
              <div className="fee-item">
                <span>SC/ST/PwD</span>
                <strong>₹{jobDetails.feeSc}</strong>
              </div>
              <div className="fee-item">
                <span>Payment Mode</span>
                <strong>{jobDetails.feePaymentMode}</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="detailed-info">
          <div className="info-section">
            <h3>Eligibility Criteria</h3>
            <div className="eligibility-details">
              <p><strong>Educational Qualification:</strong> {jobDetails.educationalQualification}</p>
              <p><strong>Age Limit:</strong> {jobDetails.minAge} - {jobDetails.maxAgeMale} years (Male) / {jobDetails.maxAgeFemale} years (Female)</p>
              <p><strong>Experience Required:</strong> {jobDetails.experienceRequired}</p>
              <p><strong>Age Relaxation:</strong> {jobDetails.ageRelaxationDetails}</p>
            </div>
          </div>

          <div className="info-section">
            <h3>Selection Process</h3>
            <ul className="selection-stages">
              {jobDetails.selectionStages.map((stage, index) => (
                <li key={index}>{stage}</li>
              ))}
            </ul>
          </div>

          <div className="info-section">
            <h3>How to Apply</h3>
            <div className="apply-steps">
              <p>{jobDetails.howToApply}</p>
              <a href={jobDetails.officialWebsite} target="_blank" rel="noopener noreferrer" className="apply-btn">
                Apply Online
              </a>
            </div>
          </div>

          <div className="info-section">
            <h3>Required Documents</h3>
            <ul className="document-list">
              {jobDetails.documentsRequired.map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails; 