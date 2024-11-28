import React from "react";
import { useLocation } from "react-router-dom";

export default function ContactForm() {
  const location = useLocation();
  const service = location.state?.service;

  return (
    <div className="min-h-screen text-black bg-gradient-to-b from-blue-50 to-gray-100 dark:from-gray-900 dark:to-black dark:text-white px-6 py-10">
      <div className="max-w-4xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <form>
          {/* Service Name (Pre-filled) */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Service</label>
            <input
              type="text"
              value={service?.name || ""}
              disabled
              className="w-full px-4 py-2 border rounded-lg bg-gray-200 dark:bg-gray-700"
            />
          </div>

          {/* Price (Pre-filled) */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Estimated Price
            </label>
            <input
              type="text"
              value={service?.price || ""}
              disabled
              className="w-full px-4 py-2 border rounded-lg bg-gray-200 dark:bg-gray-700"
            />
          </div>

          {/* User Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg  bg-gray-200 dark:bg-gray-700"
            />
          </div>

          {/* User Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg  bg-gray-200 dark:bg-gray-700"
            />
          </div>

          {/* Additional Requirements */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Additional Requirements
            </label>
            <textarea
              placeholder="Tell us more about your requirements"
              className="w-full px-4 py-2 border rounded-lg  bg-gray-200 dark:bg-gray-700"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
