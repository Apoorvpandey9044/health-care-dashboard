import React, { useState } from 'react';
import '../styles/PatientList.css';

const PatientList = ({ patients, onPatientClick }) => {
  const [selectedPatientIndex, setSelectedPatientIndex] = useState(null);

  const handlePatientClick = (index) => {
    setSelectedPatientIndex(index);
    onPatientClick(index);
  };

  return (
    <div className="patient-list">
      <h2>Patients</h2>
      <ul>
        {patients.map((patient, index) => (
          <div key={patient.id} className={`list-names ${selectedPatientIndex === index ? 'selected' : ''}`}>
            <li onClick={() => handlePatientClick(index)}>
              <img src={patient.profile_picture} alt="Patient" />
              <span>{patient.name}</span>
            </li>
            <i className="bi bi-three-dots"></i>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
