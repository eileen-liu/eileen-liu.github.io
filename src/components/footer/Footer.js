import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ReactComponent as ArrowSvg } from '../../assets/icons/upright-arrow.svg';
import './footer.css';

const Footer = () => {
  const controls = useAnimation();
  const [triggered, setTriggered] = useState(false);

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

  const linkHoverEffect = {
    opacity: 0.6,
    scale: 1.2,
    transition: {
      type: "spring",
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
              <p id='nameBold'>Eileen Liu</p>
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
          <div className='socialsColumn'>
          <div id = 'spotifyFooterBox'>
            <p style = {{color: 'white'}}>☀ REMINDER </p>
            <p>The sun shines not on us but in us. <br></br>Brighter days are yet to come!</p>
          </div>
           </div>  
          </div>

            <div id='smallerBox'>
              <p>Made with love from California </p>
              <p>Last updated: February 2024</p> 
            </div>
          </div>
      </div>
    </motion.div>
  );
};

export default Footer;
