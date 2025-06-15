import React, { useState } from 'react';
import './sarkari-job-create.css';

const SarkariJobCreate = () => {
  const [formData, setFormData] = useState({
    // Basic Information
    nameOfPost: '',
    jobLocation: '',
    jobType: '',
    postDate: '',
    officialWebsite: '',
    advertisementNumber: '',
    postCode: '',
    postName: '',
    jobBoard: '',

    // Important Dates
    applicationStartDate: '',
    applicationEndDate: '',
    examDate: '',
    interviewDate: '',
    resultDate: '',
    admitCardReleaseDate: '',
    documentVerificationDate: '',

    // Vacancy Details
    totalVacancy: '',
    vacancyTotal: '',
    vacancyGeneral: '',
    vacancyObc: '',
    vacancySc: '',
    vacancySt: '',
    vacancyEws: '',
    vacancyPwd: '',
    vacancyFemale: '',
    vacancyMale: '',
    vacancyUr: '',
    vacancyBc: '',

    // Age Criteria
    minAge: '',
    maxAgeMale: '',
    maxAgeFemale: '',
    ageRelaxationDetails: '',

    // Application Fee
    feeGeneral: '',
    feeObc: '',
    feeSc: '',
    feeSt: '',
    feeEws: '',
    feePh: '',
    feePaymentMode: '',
    feePaymentLastDate: '',

    // Educational & Experience
    educationalQualification: '',
    experienceRequired: '',
    otherEligibility: '',

    // Salary Details
    payScale: '',
    payLevel: '',

    // Selection Process
    selectionStages: '',
    examPattern: '',

    // Application Process
    howToApply: '',
    documentsRequired: '',
    registrationRequired: '',

    // Additional Information
    eligibilityDetails: '',
    shortInformation: '',
    serviceBondDetails: '',

    // Document Specifications
    photoSpecification: '',
    signatureSpecification: '',
    scanDocumentRequirement: '',
    previewInstructions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <div className="job-create-container">
      <h1>Create New Sarkari Job Post</h1>
      <form onSubmit={handleSubmit} className="job-create-form">
        {/* Basic Information Section */}
        <section className="form-section">
          <h2>Basic Information</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="nameOfPost">Name of Post</label>
              <input
                type="text"
                id="nameOfPost"
                name="nameOfPost"
                value={formData.nameOfPost}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="jobLocation">Job Location</label>
              <input
                type="text"
                id="jobLocation"
                name="jobLocation"
                value={formData.jobLocation}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="jobType">Job Type</label>
              <select
                id="jobType"
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                required
              >
                <option value="">Select Job Type</option>
                <option value="permanent">Permanent</option>
                <option value="contract">Contract</option>
                <option value="temporary">Temporary</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="postDate">Post Date</label>
              <input
                type="date"
                id="postDate"
                name="postDate"
                value={formData.postDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </section>

        {/* Important Dates Section */}
        <section className="form-section">
          <h2>Important Dates</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="applicationStartDate">Application Start Date</label>
              <input
                type="date"
                id="applicationStartDate"
                name="applicationStartDate"
                value={formData.applicationStartDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="applicationEndDate">Application End Date</label>
              <input
                type="date"
                id="applicationEndDate"
                name="applicationEndDate"
                value={formData.applicationEndDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="examDate">Exam Date</label>
              <input
                type="date"
                id="examDate"
                name="examDate"
                value={formData.examDate}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="interviewDate">Interview Date</label>
              <input
                type="date"
                id="interviewDate"
                name="interviewDate"
                value={formData.interviewDate}
                onChange={handleChange}
              />
            </div>
          </div>
        </section>

        {/* Vacancy Details Section */}
        <section className="form-section">
          <h2>Vacancy Details</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="totalVacancy">Total Vacancy</label>
              <input
                type="number"
                id="totalVacancy"
                name="totalVacancy"
                value={formData.totalVacancy}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="vacancyGeneral">General</label>
              <input
                type="number"
                id="vacancyGeneral"
                name="vacancyGeneral"
                value={formData.vacancyGeneral}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="vacancyObc">OBC</label>
              <input
                type="number"
                id="vacancyObc"
                name="vacancyObc"
                value={formData.vacancyObc}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="vacancySc">SC</label>
              <input
                type="number"
                id="vacancySc"
                name="vacancySc"
                value={formData.vacancySc}
                onChange={handleChange}
              />
            </div>
          </div>
        </section>

        {/* Age Criteria Section */}
        <section className="form-section">
          <h2>Age Criteria</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="minAge">Minimum Age</label>
              <input
                type="number"
                id="minAge"
                name="minAge"
                value={formData.minAge}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="maxAgeMale">Maximum Age (Male)</label>
              <input
                type="number"
                id="maxAgeMale"
                name="maxAgeMale"
                value={formData.maxAgeMale}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="maxAgeFemale">Maximum Age (Female)</label>
              <input
                type="number"
                id="maxAgeFemale"
                name="maxAgeFemale"
                value={formData.maxAgeFemale}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="ageRelaxationDetails">Age Relaxation Details</label>
            <textarea
              id="ageRelaxationDetails"
              name="ageRelaxationDetails"
              value={formData.ageRelaxationDetails}
              onChange={handleChange}
              rows="3"
            />
          </div>
        </section>

        {/* Application Fee Section */}
        <section className="form-section">
          <h2>Application Fee</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="feeGeneral">General</label>
              <input
                type="number"
                id="feeGeneral"
                name="feeGeneral"
                value={formData.feeGeneral}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="feeObc">OBC</label>
              <input
                type="number"
                id="feeObc"
                name="feeObc"
                value={formData.feeObc}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="feeSc">SC</label>
              <input
                type="number"
                id="feeSc"
                name="feeSc"
                value={formData.feeSc}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="feeSt">ST</label>
              <input
                type="number"
                id="feeSt"
                name="feeSt"
                value={formData.feeSt}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </section>

        {/* Educational & Experience Section */}
        <section className="form-section">
          <h2>Educational & Experience</h2>
          <div className="form-group">
            <label htmlFor="educationalQualification">Educational Qualification</label>
            <textarea
              id="educationalQualification"
              name="educationalQualification"
              value={formData.educationalQualification}
              onChange={handleChange}
              rows="3"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="experienceRequired">Experience Required</label>
            <textarea
              id="experienceRequired"
              name="experienceRequired"
              value={formData.experienceRequired}
              onChange={handleChange}
              rows="3"
            />
          </div>
        </section>

        {/* Salary Details Section */}
        <section className="form-section">
          <h2>Salary Details</h2>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="payScale">Pay Scale</label>
              <input
                type="text"
                id="payScale"
                name="payScale"
                value={formData.payScale}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="payLevel">Pay Level</label>
              <input
                type="text"
                id="payLevel"
                name="payLevel"
                value={formData.payLevel}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </section>

        {/* Selection Process Section */}
        <section className="form-section">
          <h2>Selection Process</h2>
          <div className="form-group">
            <label htmlFor="selectionStages">Selection Stages</label>
            <textarea
              id="selectionStages"
              name="selectionStages"
              value={formData.selectionStages}
              onChange={handleChange}
              rows="3"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="examPattern">Exam Pattern</label>
            <textarea
              id="examPattern"
              name="examPattern"
              value={formData.examPattern}
              onChange={handleChange}
              rows="3"
            />
          </div>
        </section>

        {/* Application Process Section */}
        <section className="form-section">
          <h2>Application Process</h2>
          <div className="form-group">
            <label htmlFor="howToApply">How to Apply</label>
            <textarea
              id="howToApply"
              name="howToApply"
              value={formData.howToApply}
              onChange={handleChange}
              rows="3"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="documentsRequired">Documents Required</label>
            <textarea
              id="documentsRequired"
              name="documentsRequired"
              value={formData.documentsRequired}
              onChange={handleChange}
              rows="3"
              required
            />
          </div>
        </section>

        {/* Additional Information Section */}
        <section className="form-section">
          <h2>Additional Information</h2>
          <div className="form-group">
            <label htmlFor="eligibilityDetails">Eligibility Details</label>
            <textarea
              id="eligibilityDetails"
              name="eligibilityDetails"
              value={formData.eligibilityDetails}
              onChange={handleChange}
              rows="3"
            />
          </div>
          <div className="form-group">
            <label htmlFor="shortInformation">Short Information</label>
            <textarea
              id="shortInformation"
              name="shortInformation"
              value={formData.shortInformation}
              onChange={handleChange}
              rows="3"
            />
          </div>
        </section>

        {/* Document Specifications Section */}
        <section className="form-section">
          <h2>Document Specifications</h2>
          <div className="form-group">
            <label htmlFor="photoSpecification">Photo Specification</label>
            <textarea
              id="photoSpecification"
              name="photoSpecification"
              value={formData.photoSpecification}
              onChange={handleChange}
              rows="3"
            />
          </div>
          <div className="form-group">
            <label htmlFor="signatureSpecification">Signature Specification</label>
            <textarea
              id="signatureSpecification"
              name="signatureSpecification"
              value={formData.signatureSpecification}
              onChange={handleChange}
              rows="3"
            />
          </div>
        </section>

        <div className="form-actions">
          <button type="submit" className="submit-button">Create Job Post</button>
          <button type="button" className="reset-button" onClick={() => setFormData({})}>
            Reset Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default SarkariJobCreate; 