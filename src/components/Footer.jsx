import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-gray-100 dark:from-gray-900 dark:to-black dark:text-white  text-black dark:text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section */}
        <div>
          <h1 className="text-2xl font-bold">One Agency</h1>
          <p className="text-sm text-gray-400 mt-2">
            All Right Reserved to{" "}
            <a href="#" className="text-blue-500 hover:underline">
              One Agency
            </a>
          </p>
          <p className="text-sm text-gray-400">
            Providing top class service{" "}
            <a
              href="https://twitter.com/mannupaaji"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              @oneagency
            </a>
          </p>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Explore</h2>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Components
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Box Shadows
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Showcase
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Company</h2>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  One Agency
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  One Agency Official
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex items-end justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600">
            Contact Us
          </button>
        </div>
      </div>
    </footer>
  );
}
