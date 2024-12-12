import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import ServiceDetails from "./components/ServiceDetails";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import { AuthProvider } from "./Contexts/authContexts";
export default function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/services" element={<Services />} />
          <Route path="/servicedetails/:id" element={<ServiceDetails />} />
          <Route path="/contactform" element={<ContactForm />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}
