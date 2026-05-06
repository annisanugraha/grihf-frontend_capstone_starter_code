import React, { useState } from "react";
import "./AppointmentFormIC.css";

const AppointmentFormIC = ({ doctorName, onBook, onCancel }) => {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [isBooked, setIsBooked] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsBooked(true);
    if (onBook) onBook(formData);
  };

  const handleCancel = () => {
    setIsBooked(false);
    setFormData({ name: "", phone: "" });
    if (onCancel) onCancel();
  };

  if (isBooked) {
    return (
      <div className="booking-confirmed">
        <p className="confirmed-text">✅ Appointment Booked!</p>
        <p>Name: {formData.name}</p>
        <p>Phone Number: {formData.phone}</p>
        <button className="btn-cancel" onClick={handleCancel}>
          Cancel Appointment
        </button>
      </div>
    );
  }

  return (
    <form className="appointment-form-ic" onSubmit={handleSubmit}>
      {/* AppointmentFormIC includes only Name and Phone Number fields */}
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="form-group">
        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
          required
        />
      </div>
      <button type="submit" className="btn-book">Book Now</button>
    </form>
  );
};

export default AppointmentFormIC;