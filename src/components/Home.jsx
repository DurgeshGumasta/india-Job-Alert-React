import React from "react";

export default function HomePage() {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto font-sans">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">
            Find Your <span className="text-blue-600">Dream Job</span><br /> with Rojgaar Suchna
          </h1>
          <div className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Search jobs..."
              className="px-4 py-2 border rounded w-full max-w-md"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Browse Jobs</button>
            <button className="border px-4 py-2 rounded">Post a job</button>
          </div>
        </div>
        <img
          src="/hero-illustration.png"
          alt="Job Search Illustration"
          className="w-72 md:w-96"
        />
      </div>

      {/* Latest Sarkari Jobs */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Latest Sarkari Jobs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "SSC GD", post: "Constable", org: "SSC", date: "July 30, 2024" },
            { title: "IBPS", post: "PO", org: "IBPS", date: "August 18, 2024" },
            { title: "UPPCL", post: "Assistant Engineer", org: "UPPCL", date: "July 25, 2024" },
            { title: "Delhi", post: "Farest Guard", org: "Delhi Forest Doat", date: "August 2, 2024" },
          ].map((job, i) => (
            <div
              key={i}
              className="p-4 border rounded shadow-sm bg-white hover:shadow-md"
            >
              <div className="text-blue-600 font-bold">{job.title}</div>
              <div>{job.post}</div>
              <div className="text-sm text-gray-500">{job.org}</div>
              <div className="text-orange-500 font-semibold mt-1">{job.date}</div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <a href="#" className="text-blue-600 font-medium">View All Jobs →</a>
        </div>
      </div>

      {/* Private Sector Jobs */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Private Sector Jobs</h2>
        <div className="flex flex-wrap gap-4 items-center">
          {["TCS", "Infosys", "Google", "Amazon", "Remote"].map((company, i) => (
            <div
              key={i}
              className="bg-white border p-4 rounded shadow-sm text-center w-28"
            >
              <div className="text-lg font-semibold">{company}</div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Explore top MNC: jobs and remote work opportunities
        </p>
      </div>

      {/* Part-Time & Freelancing */}
      <div className="mb-12 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-2">Part-Time & Freelancing</h2>
          <p className="text-gray-600 mb-4">
            Find part-time jobs and freelancing gigs for students and gig workers.
          </p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            Learn More
          </button>
        </div>
        <img src="/freelance-illustration.png" alt="Freelancing" className="w-72 md:w-96" />
      </div>

      {/* Trusted Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Trusted by Thousands of Job seekers</h2>
        <p className="text-gray-700 max-w-2xl">
          “Accurate’ and timely job updates Rojgaar Suchna provides have helped thousands find employment opportunities fast.”
        </p>
      </div>
    </div>
  );
}
