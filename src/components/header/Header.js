import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import resume from '../../assets/Eileen_resume.pdf';
import './header.css';
import BrandName from './eileen_logo.png';

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


export default function Header() {
  return (  
    <div className='headerContainer'>
      <div class="logo-container">
      <img
            src={BrandName}
            alt="Eileen Liu"
            className="logo-image"
          />
  
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
