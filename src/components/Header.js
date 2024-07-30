import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import CompanyLogo from '../images/TestLogo.svg';
import '../styles/Header.css';

const Header = () => {
  const [activeNav, setActiveNav] = useState('#patients');

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
  };

  return (
    <Navbar bg="light" expand="lg" className="custom-navbar">
      <Navbar.Brand href="#home" className="d-flex align-items-center">
        <img
          src={CompanyLogo}
          width="120"
          height="70"
          className="d-inline-block align-top company-logo"
          alt="Tech.Care logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link 
            href="#overview" 
            className={`nav-item ${activeNav === '#overview' ? 'active' : ''}`}
            onClick={() => handleNavClick('#overview')}
          >
            Overview
          </Nav.Link>
          <Nav.Link 
            href="#patients" 
            className={`nav-item ${activeNav === '#patients' ? 'active' : ''}`}
            onClick={() => handleNavClick('#patients')}
          >
            Patients
          </Nav.Link>
          <Nav.Link 
            href="#schedule" 
            className={`nav-item ${activeNav === '#schedule' ? 'active' : ''}`}
            onClick={() => handleNavClick('#schedule')}
          >
            Schedule
          </Nav.Link>
          <Nav.Link 
            href="#message" 
            className={`nav-item ${activeNav === '#message' ? 'active' : ''}`}
            onClick={() => handleNavClick('#message')}
          >
            Message
          </Nav.Link>
          <Nav.Link 
            href="#transactions" 
            className={`nav-item ${activeNav === '#transactions' ? 'active' : ''}`}
            onClick={() => handleNavClick('#transactions')}
          >
            Transactions
          </Nav.Link>
        </Nav>
        <div className="d-flex align-items-center ms-4">
          <img
            src="https://fedskillstest.ct.digital/8.png"
            width="40"
            height="40"
            className="rounded-circle"
            alt="Profile"
          />
          <div className="ms-2">
            <div className="profile-name">Dr. Jose Simmons</div>
            <div className="profile-role">General Practitioner</div>
          </div>
          <i className="bi bi-gear ms-4"></i>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
