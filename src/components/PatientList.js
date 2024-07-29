import React from 'react';
import '../styles/PatientList.css';

const PatientList = ({ patients, onPatientClick }) => {
    console.log(patients)
  return (

    <div className="patient-list">
      <h2>Patients</h2>
      <ul>
        {patients.map((patient, index) => (
          <li key={patient.id} onClick={() => onPatientClick(index)}>
            <img src={patient.profile_picture} alt="Patient" />
            <span>{patient.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
