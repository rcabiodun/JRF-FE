import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/static/landing";
import AboutPage from "./pages/static/About";
import ContactPage from "./pages/static/Contact";
import NotFoundPage from "./pages/static/NotFound";
import RegistrationPage from "./pages/authentication/Registration";
import LoginPage from "./pages/authentication/Login";
import OtpPage from "./pages/authentication/Otp";
import ForgotPasswordPage from "./pages/authentication/ForgotPassword";
import ResetPasswordPage from "./pages/authentication/ResetPassword";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
