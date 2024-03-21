import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import resume from '../../assets/Eileen_resume.pdf';
import './header.css';
import BrandName from './eileen_logo.svg';

const navLinkVariants = {
  hover: {
    opacity: 0.6,
    scale: 1.1,
    transition: {
      type: "spring",       
      stiffness: 400,      
      damping: 10,         
    },
  },
  active: {
    opacity: 1,
    fontWeight: 'bold',
    color: '#8F8F8F', 
  },
};

const linkHoverEffect = {
  opacity: 0.6,
  scale: 1.05,
  transition: {
    type: "spring", 
    stiffness: 400,      
    damping: 10,          
  },
};

document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Fetch the IP address of the client using an external service
    const response = await fetch('https://api64.ipify.org?format=json');
    const data = await response.json();
    const ipAddress = data.ip;

    // Call the ipapi API to get location information
    const locationResponse = await fetch(`https://ipapi.co/${ipAddress}/json/`);
    const locationData = await locationResponse.json();

    // Format and display the time and location information
    const currentTime = new Date().toLocaleTimeString();
    const location = `${locationData.city}, ${locationData.region}, ${locationData.country_name}`;

    const timeAndLocationDiv = document.getElementById('timeAndLocation');
    timeAndLocationDiv.innerHTML = `
      <p>Current Time: ${currentTime}</p>
      <p>Location: ${location}</p>
    `;
  } catch (error) {
    console.error('Error fetching time and location:', error.message);
  }
});


export default function Header() {
  return (  
    <div className='headerContainer'>
      <div class="logo-container">
      <Link to="/">
      <img
            src={BrandName}
            alt="Eileen Liu"
            className="logo-image"
          />
        </Link>
  
      <div id='navBar'>
        <motion.div
          whileHover='hover'
          variants={navLinkVariants}
          className='navLink'
        >
          <NavLink end to='/' className={({ isActive }) => (isActive ? 'activePage' : 'inactivePage')}>
            Home
          </NavLink>
        </motion.div>
        <motion.div
          whileHover='hover'
          variants={navLinkVariants}
          className='navLink'
        >
          <NavLink to='/work' className={({ isActive }) => (isActive ? 'activePage' : 'inactivePage')}>
            Work
          </NavLink>
        </motion.div>
        
        <motion.div
          whileHover='hover'
          variants={navLinkVariants}
          className='navLink'
        >
          <NavLink to='/about' className={({ isActive }) => (isActive ? 'activePage' : 'inactivePage')}>
            About
          </NavLink>
        </motion.div>

        <motion.div
          whileHover='hover'
          variants={navLinkVariants}
          className='navLink'
        >
          <NavLink to='/research' className={({ isActive }) => (isActive ? 'activePage' : 'inactivePage')}>
            Research
          </NavLink>
        </motion.div>

        <motion.a
          href={resume}
          target='_blank'
          rel='noopener noreferrer'
          className='navLink inactivePage'
          whileHover={linkHoverEffect}
        >
          Resume
        </motion.a>
      </div>
    </div>
    </div>
  );
}
