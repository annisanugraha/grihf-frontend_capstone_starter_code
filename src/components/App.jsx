import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Notification from "./components/Notification/Notification";
import LandingPage from "./components/LandingPage/LandingPage";
import Sign_Up from "./components/Sign_Up/Sign_Up";
import Login from "./components/Login/Login";
import BookingConsultation from "./components/BookingConsultation/BookingConsultation";
import InstantConsultation from "./components/InstantConsultation/InstantConsultation";
import GiveReviews from "./components/GiveReviews/GiveReviews";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ReportsLayout from "./components/ReportsLayout/ReportsLayout";

function App() {
  return (
    <Router>
      {/* Notification component integrated for application-wide visibility */}
      <Notification />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Sign_Up />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointments" element={<BookingConsultation />} />
        <Route path="/instant-consultation" element={<InstantConsultation />} />
        <Route path="/reviews" element={<GiveReviews />} />
        <Route path="/profile" element={<ProfileCard />} />
        <Route path="/reports" element={<ReportsLayout />} />
      </Routes>
    </Router>
  );
}

export default App;