import React from 'react';
import '../styles/PatientDetails.css';
import BloodPressureChart from './BloodPressureChart';

const PatientDetails = ({ selectedPatient }) => {
    console.log(selectedPatient)
  return (
    <div className="patient-details">
      <div className="mid-container">
      <div className="chart-container">
      <h3>Diagnosis History</h3>
        <BloodPressureChart data={selectedPatient.diagnosis_history} />
        <div className="metrics">
            <div className="respiratory-rate">
            <p>Respiratory Rate</p>
            <p>{selectedPatient.diagnosis_history[0].respiratory_rate.value} bpm</p>
            <p>Normal</p>
          </div>
          <div className="temperature">
            <p>Temperature</p>
            <p>{selectedPatient.diagnosis_history[0].temperature.value}°F</p>
            <p>Normal</p>
          </div>
          <div className="heart-rate">
            <p>Heart Rate</p>
            <p>{selectedPatient.diagnosis_history[0].heart_rate.value} bpm</p>
            <p>Lower than Average</p>
          </div>
        </div>
      </div>
      <div className="card">
      <h2>{selectedPatient.name}</h2>
        <img src={selectedPatient.profile_picture} alt="image"/>
        <p>Date of Birth: {selectedPatient.date_of_birth}</p>
        <p>Gender: {selectedPatient.gender}</p>
        <p>Contact: {selectedPatient.phone_number}</p>
        <p>Emergency Contacts: {selectedPatient.emergency_contact}</p>
        <p>Insurance: {selectedPatient.insurance_type}</p>
        <button className="info-button">Show All Information</button>
      </div>
      </div>
      <div className="below-container">
      <div className="card diagnostic-list">
        <h3>Diagnostic List</h3>
        <ul>
          {selectedPatient.diagnostic_list.map((diagnosis, index) => (
            <li key={index}>
              <span>{diagnosis.name}</span>: <span>{diagnosis.description}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="card lab-results">
        <h3>Lab Results</h3>
        <ul>
          <li>Blood Tests <a href="#"><i className="download-icon"></i></a></li>
          <li>CT Scans <a href="#"><i className="download-icon"></i></a></li>
          <li>Radiology Reports <a href="#"><i className="download-icon"></i></a></li>
          <li>X-Rays <a href="#"><i className="download-icon"></i></a></li>
          <li>Urine Test <a href="#"><i className="download-icon"></i></a></li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default PatientDetails;
