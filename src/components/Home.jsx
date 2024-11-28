import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const slideProperties = {
  prevArrow: (
    <button className="p-2 bg-black text-white m-2 shadow-lg rounded-md hover:bg-gray-700">
      <HiArrowLeft size={24} />
    </button>
  ),
  nextArrow: (
    <button className="p-2 bg-black text-white m-2 shadow-lg rounded-md hover:bg-gray-700">
      <HiArrowRight size={24} />
    </button>
  ),
};

export default function Home() {
  const slides = [
    {
      image: "https://lwks.app/hubfs/The%20Future-min.webp",
      title: "Video Editing",
    },
    {
      image:
        "https://www.creative-tim.com/blog/content/images/size/w960/2022/01/which-development-job-is-right-for-you.jpg",
      title: "Web Development",
    },
    {
      image: "https://www.cbit.ac.in/wp-content/uploads/2023/03/AIML-CBIT.gif",
      title: "AI & Machine Learning",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-100 dark:from-gray-900 dark:to-black dark:text-white text-primary">
      {/* Header Section */}
      <div className="text-4xl font-bold pt-10 flex items-center justify-center">
        <h1>Welcome to One Agency</h1>
      </div>

      {/* Slide Section */}
      <div className="m-10">
        <Slide {...slideProperties}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-[650px] bg-cover bg-center rounded-lg shadow-lg"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay Content */}
              <div className="bg-white dark:bg-black text-black dark:text-white bg-opacity-75 text-4xl font-extrabold p-8 rounded-lg shadow-md">
                <h1>{slide.title}</h1>
              </div>
            </div>
          ))}
        </Slide>
      </div>
      <br />
      <div className="bg-white dark:bg-background-dark py-16 px-4">
        {/* Outer container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Active in Market */}
          <div className="p-8 bg-white dark:bg-gray-700 shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
            <h1 className="text-lg uppercase font-medium tracking-wide text-gray-500 dark:text-gray-300">
              Active in Market For
            </h1>
            <h2 className="text-5xl md:text-6xl font-extrabold text-blue-600 dark:text-blue-400 my-4">
              8 YEARS!
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Dedicated service and consistent excellence over the years.
            </p>
          </div>

          {/* Collaborated With */}
          <div className="p-8 bg-white dark:bg-gray-700 shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
            <h1 className="text-lg uppercase font-medium tracking-wide text-gray-500 dark:text-gray-300">
              Collaborated With
            </h1>
            <h2 className="text-5xl md:text-6xl font-extrabold text-green-600 dark:text-green-400 my-4">
              500+ CLIENTS
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Partnering with diverse industries globally.
            </p>
          </div>

          {/* Maintained Ratings */}
          <div className="p-8 bg-white dark:bg-gray-700 shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
            <h1 className="text-lg uppercase font-medium tracking-wide text-gray-500 dark:text-gray-300">
              Maintained on All Platforms
            </h1>
            <h2 className="text-5xl md:text-6xl font-extrabold text-yellow-500 dark:text-yellow-400 my-4">
              5 STAR RATINGS
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Consistently delivering top-notch service across platforms.
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
