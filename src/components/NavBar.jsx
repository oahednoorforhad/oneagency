import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "../Contexts/authContexts";
import { doSignOut } from "../firebase/auth";

export default function NavBar() {
  const { userLoggedIn } = useAuth();
  const handleSignOut = async () => {
    try {
      await doSignOut(); // Call the Firebase sign-out function
      alert("You have been signed out.");
    } catch (error) {
      console.error("Sign-out error:", error);
      alert("Failed to sign out. Please try again.");
    }
  };
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 shadow-md border-b-2 text-primary bg-gradient-to-b from-blue-50 to-gray-100 dark:from-gray-900 dark:to-black dark:text-white">
      <div className="text-2xl font-bold text-primary dark:text-heading-dark">
        One Agency
      </div>

      <div className="flex space-x-6">
        <Link
          to="/"
          className="text-primary hover:text-link dark:text-secondary dark:hover:text-link-dark"
        >
          Home
        </Link>
        <Link
          to="/services"
          className="text-primary hover:text-link dark:text-secondary dark:hover:text-link-dark"
        >
          Services
        </Link>
        <Link
          to="/testimonials"
          className="text-primary hover:text-link dark:text-secondary dark:hover:text-link-dark"
        >
          Testimonials
        </Link>
        <Link
          to="/aboutus"
          className="text-primary hover:text-link dark:text-secondary dark:hover:text-link-dark"
        >
          About Us
        </Link>
      </div>

      <div className="p-2 rounded-full bg-button-bg hover:bg-button-bg-dark dark:bg-button-bg-dark dark:hover:bg-gray-600">
        <ThemeToggle />
        {userLoggedIn ? (
          <button
            onClick={handleSignOut}
            className="text-primary hover:text-link dark:text-secondary dark:hover:text-link-dark font-medium"
          >
            Sign Out
          </button>
        ) : (
          <Link
            to="/login"
            className="text-primary hover:text-link dark:text-secondary dark:hover:text-link-dark"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
