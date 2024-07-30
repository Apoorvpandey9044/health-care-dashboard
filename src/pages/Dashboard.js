import React, { useEffect, useState } from 'react';
import PatientList from '../components/PatientList';
import PatientDetails from '../components/PatientDetails';
import '../styles/Dashboard.css';
import axios from 'axios';

const Dashboard = () => {
  const [patientList, setPatientList] = useState([]);
  const [selectedPatientIndex, setSelectedPatientIndex] = useState(3);
  const [loading, setLoading] = useState(true);

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://fedskillstest.coalitiontechnologies.workers.dev',
    headers: { 
      'Authorization': 'Basic Y29hbGl0aW9uOnNraWxscy10ZXN0'
    }
  };  

  useEffect(() => {
    axios.request(config)
      .then((response) => {
        console.log(response.data)
        const data = response.data
        setPatientList(data)
        setLoading(false);
      });
  }, []);

  const handlePatientClick = (index) => {
    setSelectedPatientIndex(index);
  };

  return (
    <div className="dashboard">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <PatientList patients={patientList} onPatientClick={handlePatientClick} />
          <PatientDetails selectedPatient={patientList[selectedPatientIndex]} />
        </>
      )}
    </div>
  );
};

export default Dashboard;
