import React from 'react';
import '../styles/PatientDetails.css';
import BloodPressureChart from './BloodPressureChart';
import RespiratoryImage from '../images/respiratory rate.svg';
import TemperatureImage from '../images/temperature.svg';
import HeartRateImage from '../images/HeartBPM.svg';

const PatientDetails = ({ selectedPatient }) => {
    console.log(selectedPatient)
  return (
    <div className="patient-details">
      <div className="mid-container" >
      <div className="chart-container" style={{width: '40vw', height: '30vh'}}>

        <BloodPressureChart data={selectedPatient.diagnosis_history} />
        <div className="metrics">
            <div className="respiratory-rate">
            <img src={RespiratoryImage} alt='image'/>
            <p style={{fontSize: '10px', marginTop: '-10px', marginLeft: '10px'}}>Respiratory Rate</p>
            <p style={{fontWeight: 'bold', marginTop: '-8px', marginLeft: '10px'}}>{selectedPatient.diagnosis_history[0].respiratory_rate.value} bpm</p>
            <p style={{fontSize: '10px', marginTop: '-6px', marginLeft: '10px'}}>Normal</p>
          </div>
          <div className="temperature" style={{marginLeft: '13px'}}>
          <img src={TemperatureImage} alt='image'/>
            <p style={{fontSize: '10px', marginTop: '-10px', marginLeft: '10px'}}>Temperature</p>
            <p style={{fontWeight: 'bold', marginTop: '-8px', marginLeft: '10px'}}>{selectedPatient.diagnosis_history[0].temperature.value}°F</p>
            <p style={{fontSize: '10px', marginTop: '-6px', marginLeft: '10px'}}>Normal</p>
          </div>
          <div className="heart-rate" style={{marginLeft: '13px'}}>
          <img src={HeartRateImage} alt='image'/>
            <p style={{fontSize: '10px', marginTop: '-10px', marginLeft: '10px'}}>Heart Rate</p>
            <p style={{fontWeight: 'bold', marginTop: '-8px', marginLeft: '10px'}}>{selectedPatient.diagnosis_history[0].heart_rate.value} bpm</p>
            <p style={{fontSize: '10px', marginTop: '-6px', marginLeft: '10px'}}>Lower than Average</p>
          </div>
        </div>
      </div>
      <div className="card"style={{marginLeft: '20px'}}>
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
