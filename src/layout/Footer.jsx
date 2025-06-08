import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white shadow-inner mt-10 py-10 px-[156px] text-sm text-gray-700">
      <div className="flex flex-col md:flex-row justify-between gap-8 border-b pb-6">
        {/* Logo Section */}
        <div>
          <img src="/src/assets/logo1.png" alt="RojGaar Suchna" className="h-10 mb-2" />
          <p className="max-w-xs">Your trusted source for the latest RRB, SSC, and Sarkari job updates.</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-bold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/latest-jobs" className="hover:text-blue-600">Latest Jobs</a></li>
            <li><a href="/syllabus" className="hover:text-blue-600">Syllabus</a></li>
            <li><a href="/results" className="hover:text-blue-600">Results</a></li>
          </ul>
        </div>

        {/* Contact or Social */}
        <div>
          <h3 className="font-bold mb-2">Contact</h3>
          <p>Email: support@rojgaarsuchna.in</p>
          <div className="flex gap-4 mt-2">
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
            <a href="#"> <i class="fa-brands fa-x-twitter"></i> </a>
            <a href="#"><i class="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </div>

      <div className="text-center pt-4 text-gray-500">
        © {new Date().getFullYear()} RojGaar Suchna. All rights reserved.
      </div>
    </footer>
  );
}
