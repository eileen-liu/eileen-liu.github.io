import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowSvg } from '../../assets/icons/upright-arrow.svg';
import './footer.css';
import BrandName from './eileen_logo white.svg';
import song from './song.jpeg'

const Footer = () => {
  const controls = useAnimation();
  const [triggered, setTriggered] = useState(false);
  const [timeAndLocation, setTimeAndLocation] = useState(null);

useEffect(() => {
  const handleScroll = () => {
    const footerContainer = document.getElementById('boxContainer');
    const footerRect = footerContainer.getBoundingClientRect();

    if (!triggered && footerRect.top < window.innerHeight) {
      controls.start('visible');
      setTriggered(true);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [controls, triggered]);

const hoverEffect = {
scale: 1.075,
transition: {
  type: 'spring',
  stiffness: 400,
  damping: 10,
},
};

useEffect(() => {
  const fetchTimeAndLocation = async () => {
    try {
      // Fetch the IP address of the client using an external service
      const response = await fetch('https://api64.ipify.org?format=json');
      const data = await response.json();
      const ipAddress = data.ip;

      // Call the ipapi API to get location information
      const locationResponse = await fetch(`https://ipapi.co/${ipAddress}/json/`);
      const locationData = await locationResponse.json();

      // Format the time and location information
      const currentTime = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
      const location = `${locationData.city}, ${locationData.region_code}`;

      if (!locationData.city || !locationData.region_code) {
        location = "Berkeley, CA";
      }

      setTimeAndLocation({
        currentTime,
        location,
      });
    } catch (error) {
      console.error('Error fetching location:', error);
      // Set default location to "Berkeley, CA" if there's an error
      setTimeAndLocation({
        currentTime: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
        location: "Berkeley, CA",
      });
    }
  };

  fetchTimeAndLocation();

  const intervalId = setInterval(() => {
    fetchTimeAndLocation();
  }, 1000);

  return () => clearInterval(intervalId);
}, []);

const linkHoverEffect = {
  opacity: 0.6,
  scale: 1.2,
  transition: {
    type: 'spring',
    stiffness: 400,
    damping: 10,
  },
};

  return (
    <motion.div
      id='boxContainer'
      initial='hidden'
      animate={controls}
      variants={{
        hidden: { opacity: 0, translateY: 100 },
        visible: { opacity: 1, translateY: 0 },
      }}
      transition={{ duration: 1 }}
    >
      <div id='footerBoxes'>
        <div id='contactRow'>
            <div>
              <p><img
                src={BrandName}
                alt="Eileen Liu"
                className="logo-image-footer"
              /></p>
              {/* <p id='nameBold'>Eileen Liu</p> */}
              <p id='subGrey'>Product Designer & Developer</p>
            </div>

        <div className='socialsBox'>
          <div className='socialsColumn'>
          <p id='arrowSection'> Let's Connect!</p>
          <motion.a
              href="mailto:eileen-liu@berkeley.edu"
              target='_blank'
              rel="noreferrer"
              whileHover={linkHoverEffect}
              className='arrowLink'
            >
              Email
              <ArrowSvg className="arrow" />
            </motion.a>
            <motion.a
              href='https://www.linkedin.com/in/eileen-l/'
              target='_blank'
              rel="noreferrer"
              whileHover={linkHoverEffect}
              className='arrowLink'
            > Linkedin
              <ArrowSvg className="arrow" />
            </motion.a>
            <motion.a
              href='https://open.spotify.com/user/chiharuyachida'
              target='_blank'
              rel="noreferrer"
              whileHover={linkHoverEffect}
              className='arrowLink'
            >
              Spotify
              <ArrowSvg className="arrow" />
            </motion.a>
         
          </div>
          {/* DOUBLE COLUMNS */}
          {/* <div className='socialsColumn'>
          <br></br>
          <motion.a
              href='https://open.spotify.com/user/chiharuyachida'
              target='_blank'
              rel="noreferrer"
              whileHover={linkHoverEffect}
              className='arrowLink'
            >
              Spotify
              <ArrowSvg className="arrow" />
            </motion.a>
          </div> */}
        </div>
        <div id='spotifyFooterBox'>
        <p style = {{color: 'white'}}>Currently on Replay </p>
          <motion.div whileHover={hoverEffect}>
          <Link to="https://open.spotify.com/track/3xKsf9qdS1CyvXSMEid6g8" className="arrow-link">
            <img src = {song}/>
            </Link>
          </motion.div> 

            </div>
            <div id='smallerBox'>
            {timeAndLocation && (
              <>
              {/* ♡ */}
                <p>{timeAndLocation.currentTime} ☀ {timeAndLocation.location}</p>
              </>
            )}
            </div>
          </div>
      </div>
    </motion.div>
  );
};

export default Footer;