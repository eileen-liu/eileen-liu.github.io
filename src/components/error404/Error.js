import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './error.css';
import Header from '../header/Header';

export default function Error() {
  const numberVariants = {
    float: {
      y: ['-15%', '10%', '-15%'],
      transition: {
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        },
      },
    },
    fadeIn: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 400, damping: 10  },
    },
  };

  const containerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { type: 'spring', stiffness: 400, damping: 10 },
  };

  const oscillateAnimation = useAnimation();

  useEffect(() => {
    oscillateAnimation.start({
      y: [0, -5, 0, 5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    });
  }, [oscillateAnimation]);

  return (
    <div>
      <Header />
      <motion.div
        id='errorContainer'
        initial='initial'
        animate='animate'
        variants={containerVariants}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate='fadeIn'
          variants={numberVariants}
          style={{ fontSize: '20em' }}
        >
          <motion.span
            variants={numberVariants.float}
            animate={oscillateAnimation}
            style={{ display: 'inline-block' }}
          >
            404
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 400, damping: 10 }}
        >
          Error 404: My website is still under construction, so the page you're searching for either 
          doesn't exist or has been relocated. 
        </motion.p>
      </motion.div>
    </div>
  );
}
