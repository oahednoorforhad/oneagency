import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ServiceDetails() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://oahednoorforhad.github.io/oneagencyjson/services.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedService = data.services[id];
        setService(selectedService);
      })
      .catch((error) =>
        console.error("Error fetching service details:", error)
      );
  }, [id]);

  if (!service) {
    return <div className="text-center py-20">Loading...</div>;
  }

  const handleContactClick = () => {
    navigate("/contactform", { state: { service } });
  };

  return (
    <div className="min-h-screen text-black bg-gradient-to-b from-blue-50 to-gray-100 dark:from-gray-900 dark:to-black dark:text-white px-6 py-10">
      <div className="max-w-4xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold mb-4 text-start">{service.name}</h1>
        <img
          src={service.image}
          alt={`${service.name} Image`}
          className="w-full h-72 object-cover rounded-lg mb-6"
        />
        <p className="text-gray-800 dark:text-gray-200 text-lg mb-4">
          {service.detailedDescription}
        </p>
        <p className="text-xl font-semibold text-blue-500 mb-4">
          Price: {service.price}
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleContactClick}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
