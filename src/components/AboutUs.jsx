import React from "react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 dark:from-gray-900 dark:to-black px-6 py-10">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <h1 className="text-6xl font-extrabold text-blue-600 dark:text-blue-400 mb-8">
          About Us
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          We are a team of passionate professionals, committed to delivering
          world-class services in video editing, web development, and AI/ML.
          Over the years, we've completed more than{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            500 projects
          </span>{" "}
          for our happy clients worldwide!S
        </p>

        {/* Leadership Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {/* Leader Card */}
          {[
            {
              name: "Oahed Noor Forhad",
              role: "CEO",
              img: "https://cdn.discordapp.com/attachments/1145025325076578425/1311705984036769913/Screenshot_2024-11-28_205015.png?ex=6749d4e4&is=67488364&hm=80553a5e03cf1b71256ae8017dfb29a370f27539fcce5d2fe7ace967dfd9eebf&",
            },
            {
              name: "Tohedul Islam Nirjon",
              role: "COO",
              img: "https://cdn.discordapp.com/attachments/1145025325076578425/1311705984275714118/Screenshot_2024-11-28_205026.png?ex=6749d4e4&is=67488364&hm=79d2d155fe4ab6c5b42d8440648b0232c0dd99d898e446de10dce61f6de61446&",
            },
            {
              name: "Saiful Islam Rumi",
              role: "Manager",
              img: "https://cdn.discordapp.com/attachments/1145025325076578425/1311705983814336512/Screenshot_2024-11-28_205039.png?ex=6749d4e4&is=67488364&hm=06705c19cac9c3bd6bdf71df89440933482505a93a6dbf5fd590c09020d91587&",
            },
          ].map((leader, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-transform transform hover:-translate-y-2"
            >
              <img
                src={leader.img}
                alt={leader.name}
                className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-blue-400 dark:border-blue-600"
              />
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {leader.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{leader.role}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-xl p-10 mb-16 shadow-lg">
          <h2 className="text-4xl font-extrabold mb-6">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-lg">
              <span className="font-bold text-3xl">10+</span> Professional Video
              Editors
            </div>
            <div className="text-lg">
              <span className="font-bold text-3xl">5</span> Expert Web
              Developers
            </div>
            <div className="text-lg">
              <span className="font-bold text-3xl">5</span> AI/ML Experts
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-10">
            <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              With dedication and expertise, we’ve successfully completed over{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                500 projects
              </span>{" "}
              for diverse industries worldwide. Our commitment to quality and
              innovation has been the driving force behind our success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
