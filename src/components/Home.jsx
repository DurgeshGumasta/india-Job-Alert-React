import React, { useState, useRef, useEffect } from "react";

const rotatingTags = [
  "SSC Jobs",
  "UPSC Jobs",
  "IBPS Jobs",
  "Railway Jobs",
  "State PSC Jobs"
];

const suggestions = [
  "SSC CGL",
  "UPSC Civil Services",
  "IBPS PO",
  "Railway Group D",
  "Delhi Police",
  "Bank Clerk"
];

export default function HomePage() {
  const [tagIndex, setTagIndex] = useState(0);
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setTagIndex((prev) => (prev + 1) % rotatingTags.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const filteredSuggestions = suggestions.filter((s) =>
    s.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto font-sans">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Your Gateway to <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Government Jobs</span><br />
            and Career Success
          </h1>
          <div className="flex items-center gap-3 mt-2">
            <span className="text-lg text-blue-600 font-semibold animate-fade-in">
              <i className="fas fa-bullhorn mr-2"></i>
              {rotatingTags[tagIndex]}
            </span>
            <span className="ml-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">100% Verified</span>
          </div>
          <p className="text-gray-600 text-lg max-w-xl">
            Your trusted platform for the latest government job opportunities. The perfect place for SSC, UPSC, IBPS, and other competitive exam preparation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center relative">
            <div className="relative flex-1 max-w-md w-full">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search exams or jobs..."
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                value={search}
                onChange={e => {
                  setSearch(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
              />
              {showSuggestions && search && (
                <ul className="absolute left-0 right-0 bg-white border border-gray-200 rounded-xl mt-2 shadow-lg z-10">
                  {filteredSuggestions.length ? filteredSuggestions.map((s, i) => (
                    <li
                      key={i}
                      className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
                      onMouseDown={() => {
                        setSearch(s);
                        setShowSuggestions(false);
                        inputRef.current.blur();
                      }}
                    >
                      <i className="fas fa-search mr-2 text-blue-500"></i>{s}
                    </li>
                  )) : (
                    <li className="px-4 py-2 text-gray-400">No suggestions</li>
                  )}
                </ul>
              )}
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-200 transition-all flex items-center gap-2">
              <i className="fas fa-briefcase"></i> Browse Jobs
            </button>
            <button className="border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-all flex items-center gap-2">
              <i className="fas fa-book"></i> Syllabus
            </button>
          </div>
        </div>
        <div className="flex-1 relative flex flex-col items-center">
          <img
            src="/govt-illustration.svg"
            alt="Job Search Illustration"
            className="w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Verified Jobs</p>
                <p className="text-sm text-gray-500">100% authentic listings</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Government Jobs */}
      <div className="mb-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Latest Government Jobs</h2>
          <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2">
            View All Jobs
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "SSC GD", post: "Constable", org: "SSC", date: "July 30, 2024", salary: "₹35,400 - ₹1,12,400", lastDate: "Last Date: Aug 15, 2024" },
            { title: "IBPS", post: "Probationary Officer", org: "IBPS", date: "Aug 18, 2024", salary: "₹36,000 - ₹63,840", lastDate: "Last Date: Aug 30, 2024" },
            { title: "UPPCL", post: "Assistant Engineer", org: "UPPCL", date: "July 25, 2024", salary: "₹35,400 - ₹1,12,400", lastDate: "Last Date: Aug 10, 2024" },
            { title: "Delhi", post: "Forest Guard", org: "Delhi Forest Dept", date: "Aug 2, 2024", salary: "₹35,400 - ₹1,12,400", lastDate: "Last Date: Aug 20, 2024" },
          ].map((job, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-blue-600 font-bold text-lg group-hover:text-blue-700">{job.title}</div>
                  <div className="text-gray-600">{job.post}</div>
                </div>
                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  {job.org}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{job.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{job.salary}</span>
                </div>
                <div className="text-sm text-red-600 font-medium">
                  {job.lastDate}
                </div>
              </div>
              <button className="w-full mt-4 bg-blue-50 text-blue-600 py-2 rounded-lg font-medium hover:bg-blue-100 transition-colors">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Exams */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Popular Competitive Exams</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {[
            { name: "UPSC", fullName: "Union Public Service Commission" },
            { name: "SSC", fullName: "Staff Selection Commission" },
            { name: "IBPS", fullName: "Banking Personnel Selection Institute" },
            { name: "Railway", fullName: "Railway Recruitment Board" },
            { name: "State PSC", fullName: "State Public Service Commission" },
          ].map((exam, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all text-center group"
            >
              <div className="h-16 w-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <span className="text-2xl font-bold text-blue-600">{exam.name}</span>
              </div>
              <div className="text-lg font-semibold text-gray-800">{exam.name}</div>
              <div className="text-sm text-gray-500 mt-1">{exam.fullName}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Study Resources */}
      <div className="mb-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold">Study Resources</h2>
            <p className="text-gray-600 text-lg">
              Access the best study materials, mock tests, and online courses for government job preparation. Start your journey to success today.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-200 transition-all">
                Study Materials
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all">
                Mock Tests
              </button>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="/study-resources.png"
              alt="Study Resources"
              className="w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="mb-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Success Stories</h2>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"></div>
              ))}
            </div>
            <div className="text-left">
              <div className="font-semibold">4,000+ Successful Students</div>
              <div className="text-sm text-gray-500">Achieved their dream jobs</div>
            </div>
          </div>
          <p className="text-gray-600 text-lg italic">
            "Rojgaar Suchna has been instrumental in my preparation journey. The information and study materials provided here played a crucial role in my success in SSC CGL."
          </p>
          <div className="mt-6">
            <div className="font-semibold">Rahul Sharma</div>
            <div className="text-sm text-gray-500">SSC CGL 2023 Topper</div>
          </div>
        </div>
      </div>
    </div>
  );
}
