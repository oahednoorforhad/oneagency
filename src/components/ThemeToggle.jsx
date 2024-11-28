import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Update the theme in localStorage and body when the mode changes
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Apply dark mode based on state
    if (darkMode) {
      document.documentElement.classList.add("dark"); // Apply dark mode class
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark"); // Remove dark mode class
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Get saved theme from localStorage on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
    >
      {darkMode ? "🌞" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
