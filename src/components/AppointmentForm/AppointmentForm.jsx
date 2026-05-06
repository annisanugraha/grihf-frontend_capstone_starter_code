import React, { useState } from "react";
import { API_URL } from "../../config";
import "./AppointmentForm.css";

const AppointmentForm = ({ doctorName, doctorSpeciality, onBook }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
  });
  const [isBooked, setIsBooked] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authToken = sessionStorage.getItem("auth-token");
    try {
      const response = await fetch(`${API_URL}/api/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({ ...formData, doctorName, doctorSpeciality }),
      });
      if (response.ok) {
        setIsBooked(true);
        if (onBook) onBook(formData);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleCancel = () => {
    setIsBooked(false);
    setFormData({ name: "", phone: "", date: "", time: "" });
  };

  if (isBooked) {
    return (
      <div className="booking-confirmed">
        <p>✅ Appointment Booked!</p>
        <p>Name: {formData.name}</p>
        <p>Phone: {formData.phone}</p>
        <p>Date: {formData.date}</p>
        <p>Time: {formData.time}</p>
        <button className="btn-cancel" onClick={handleCancel}>
          Cancel Appointment
        </button>
      </div>
    );
  }

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      {/* AppointmentForm includes Name, Phone Number, Date and Time fields */}
      <div className="form-group">
        <label>Name</label>
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
        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
          required
        />
      </div>
      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Time</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn-book">Book Appointment</button>
    </form>
  );
};

export default AppointmentForm;