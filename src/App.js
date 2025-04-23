import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/static/landing";
import AboutPage from "./pages/static/About";
import ContactPage from "./pages/static/Contact";
// import CausesPage from "./pages/Causes";
// import EventsPage from "./pages/Events";
// import BlogPage from "./pages/Blog";
// import BlogDetailsPage from "./pages/BlogDetails";
// import ElementsPage from "./pages/Elements";
// import ContactPage from "./pages/Contact";
// import DonatePage from "./pages/Donate";
// import SubscribePage from "./pages/Subscribe";
// import ProjectsPage from "./pages/Projects";
// import TestimonialsPage from "./pages/Testimonials";
// import PropertiesPage from "./pages/Properties";
// import SupportPage from "./pages/Support";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
       
      </Routes>
    </Router>
  );
}

export default App;
