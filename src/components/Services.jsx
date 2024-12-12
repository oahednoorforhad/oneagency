import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch data from JSON file
    fetch("https://oahednoorforhad.github.io/oneagencyjson/services.json")
      .then((response) => response.json())
      .then((data) => setServices(data.services))
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  return (
    <div className="min-h-screen text-black bg-gradient-to-b from-blue-50 to-gray-100 dark:from-gray-900 dark:to-black dark:text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Premium Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-6 p-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-transform transform hover:scale-105"
          >
            <img
              src={service.icon}
              alt={`${service.name} Icon`}
              className="w-16 h-16 mb-4 mx-auto"
            />
            <h2 className="text-2xl font-semibold mb-2 text-center">
              {service.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {service.description}
            </p>
            <div
              className="h-48 bg-cover bg-center rounded-md mb-4"
              style={{
                backgroundImage: `url(${service.image})`,
              }}
            ></div>
            <p className="text-gray-800 dark:text-gray-200 text-sm">
              {service.detailedDescription}
            </p>
            <div className="mt-6 flex justify-between items-center">
              <span className="text-lg font-bold text-blue-500">
                {service.price}
              </span>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                <Link to={`/servicedetails/${index}`}>Details</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
