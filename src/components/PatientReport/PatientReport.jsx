import React, { useState } from "react";
import "./PatientReport.css";

const PatientReport = ({ report }) => {
  const [showPrescription, setShowPrescription] = useState(false);

  return (
    <div className="patient-report">
      <div className="report-header">
        <div className="report-info">
          <h3>Patient: {report.patientName}</h3>
          <p><strong>Report ID:</strong> {report.id}</p>
          <p><strong>Date:</strong> {report.date}</p>
          <p><strong>Doctor:</strong> {report.doctor}</p>
          <p><strong>Diagnosis:</strong> {report.diagnosis}</p>
        </div>
        <div className="report-actions">
          <button
            className="btn-toggle-prescription"
            onClick={() => setShowPrescription(!showPrescription)}
          >
            {showPrescription ? "Hide Prescription" : "Show Prescription"}
          </button>
        </div>
      </div>

      {showPrescription && (
        <div className="prescription-details">
          <h4>Prescription Details</h4>
          <table className="prescription-table">
            <thead>
              <tr>
                <th>Medication</th>
                <th>Dosage</th>
                <th>Frequency</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {report.prescription.map((med, index) => (
                <tr key={index}>
                  <td>{med.medication}</td>
                  <td>{med.dosage}</td>
                  <td>{med.frequency}</td>
                  <td>{med.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {report.notes && (
            <div className="doctor-notes">
              <strong>Doctor's Notes:</strong> {report.notes}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PatientReport;