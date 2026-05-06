import React, { useState } from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import "./DoctorCard.css";

const DoctorCard = ({ name, speciality, experience, ratings, image }) => {
  const [showForm, setShowForm] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [appointmentData, setAppointmentData] = useState(null);

  const handleBook = (data) => {
    setAppointmentData(data);
    setIsBooked(true);
    setShowForm(false);
  };

  // Cancel appointment logic
  const handleCancelAppointment = () => {
    setIsBooked(false);
    setAppointmentData(null);
    setShowForm(false);
  };

  return (
    <div className="doctor-card">
      <div className="doctor-card-details">
        <img
          src={image || "https://via.placeholder.com/80"}
          alt={name}
          className="doctor-img"
        />
        <h3 className="doctor-name">{name}</h3>
        <p className="doctor-speciality">{speciality}</p>
        <p className="doctor-experience">{experience} years experience</p>
        <div className="doctor-ratings">
          Ratings: {"⭐".repeat(ratings)}
        </div>
      </div>

      <div className="doctor-card-options-container">
        {!isBooked ? (
          <>
            <button
              className="btn-book-appointment"
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? "Cancel" : "Book Appointment"}
              <br />
              <small>No Booking Fee</small>
            </button>
            {showForm && (
              <AppointmentForm
                doctorName={name}
                doctorSpeciality={speciality}
                onBook={handleBook}
              />
            )}
          </>
        ) : (
          <div className="appointment-booked">
            <p className="booked-text">✅ Appointment Booked!</p>
            <p>Name: {appointmentData?.name}</p>
            <p>Phone: {appointmentData?.phone}</p>
            {/* Cancel appointment button */}
            <button
              className="btn-cancel-appointment"
              onClick={handleCancelAppointment}
            >
              Cancel Appointment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorCard;