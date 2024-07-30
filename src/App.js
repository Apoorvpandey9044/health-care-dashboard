import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import './App.css';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
