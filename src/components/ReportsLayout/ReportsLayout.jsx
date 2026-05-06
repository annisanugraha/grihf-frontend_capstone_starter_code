import React from "react";
import PatientReport from "../PatientReport/PatientReport";
import "./ReportsLayout.css";

const ReportsLayout = () => {
  // Sample patient data with prescription details
  const reports = [
    {
      id: "PT-2026-9842",
      patientName: "John Doe",
      date: "2026-05-01",
      doctor: "Dr. Sarah Smith",
      diagnosis: "Common Cold",
      prescription: [
        { medication: "Paracetamol 500mg", dosage: "1 tablet", frequency: "3 times daily", duration: "5 days" },
        { medication: "Vitamin C", dosage: "1 tablet", frequency: "Once daily", duration: "7 days" }
      ],
      notes: "Rest and stay hydrated. Follow up if symptoms persist beyond 5 days."
    },
    {
      id: "PT-2026-9843",
      patientName: "John Doe",
      date: "2026-04-15",
      doctor: "Dr. Michael Chen",
      diagnosis: "Seasonal Allergies",
      prescription: [
        { medication: "Cetirizine 10mg", dosage: "1 tablet", frequency: "Once daily", duration: "10 days" }
      ],
      notes: "Avoid exposure to allergens. Recommended air purifier for home."
    }
  ];

  return (
    <div className="reports-container">
      <div className="reports-header">
        <h1>Your Medical Reports</h1>
        <p>View your appointment history and prescriptions</p>
      </div>
      <div className="reports-list">
        {reports.map((report) => (
          <PatientReport key={report.id} report={report} />
        ))}
      </div>
    </div>
  );
};

export default ReportsLayout;