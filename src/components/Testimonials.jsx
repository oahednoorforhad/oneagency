import { useEffect, useState } from "react";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch data from the provided JSON link
    fetch("https://oahednoorforhad.github.io/oneagencyjson/testimonials.json")
      .then((response) => response.json())
      .then((data) => setTestimonials(data))
      .catch((error) =>
        console.error("Error fetching testimonials data:", error)
      );
  }, []);

  return (
    <div className="min-h-screen text-black bg-gradient-to-b from-blue-50 to-gray-100 dark:from-gray-900 dark:to-black dark:text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Testimonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.profilePic}
                alt={`${testimonial.title} Profile`}
                className="w-12 h-12 rounded-full mr-4"
              />
              <h2 className="text-xl font-semibold">{testimonial.title}</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {testimonial.description}
            </p>
            <div
              className="h-48 bg-cover bg-center rounded-md"
              style={{ backgroundImage: `url(${testimonial.servicePic})` }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
