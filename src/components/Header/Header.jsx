import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Navbar from '../Navbar/Navbar';
import "./Header.css";
import { FaPaperPlane } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleGetStarted = () => {
    navigate('/login'); // Navigate to the Login page
  };

  return (
    <header className='header flex flex-center flex-column'>
      <Navbar />
      <div className='container'>
        <div className='header-content text-center flex flex-column'>
          <h1 className='text-uppercase header-title'>Explore. Learn. Invest</h1>
          <p className='text-lead'>
            An all-in-one investment platform that empowers you with real-time market insights,
            personalized learning, and intuitive tools to make smarter financial decisions.
            Discover, learn, and invest with confidence.
          </p>
          <button
            className='btn header-btn btn-blue'
            onClick={handleGetStarted} // Attach event handler for navigation
          >
            <FaPaperPlane /> <span>Get Started</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
