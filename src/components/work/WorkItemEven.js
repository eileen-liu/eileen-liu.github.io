import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './work.css';

export default function WorkItemEven({ workData }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 150 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 10, stiffness: 400 },
    },
  };

  const headingVariants = {
    hover: {
      scale: 1.04,
      transition: { type: 'spring', damping: 10, stiffness: 400 },
    },
  };

  return (
    <div>
      <div className='itemContainer'>
        {workData.map((item, index) => (
          <motion.div
            id='itemContainer'
            key={index}
            initial='hidden'
            animate='visible'
            variants={itemVariants}
          >
            <div id='workInfo'>
              <div id='labels'>
                {item.labels.map((label, labelIndex) => (
                  <span key={labelIndex}>
                    <p className='smallBody'>{label}</p>
                  </span>
                ))}
              </div>
              <Link to={item.workLink} style={{ textDecoration: 'none' }}>
                <motion.h2 id='workTitle' whileHover='hover' variants={headingVariants}>
                  {item.workTitle}
                </motion.h2>
              </Link>
              <p className='smallText'>{item.workDesc}
              {/* <p id='workDate'>{item.workDate}</p> */}
              <br></br><br></br>
              <Link to={item.workLink} style={{ textDecoration: 'none' }}>
                <motion.button
                  className='rounded-button'
                  whileHover={{ scale: 1.1, backgroundColor: 'grey'}}
                  style={{ backgroundColor: 'pink', color: 'white', border: 'transparent', padding: '10px', borderRadius: '20px', textAlign: 'left'}}
                >Coming Soon!
                  </motion.button>
                  </Link>
                  </p>
            </div>
            <Link to={item.workLink} style={{ textDecoration: 'none' }}>
            <motion.img
              style={{ float: 'right', marginRight: 0 }} // Align to the right
              src={item.imgSrc}
              whileHover={{ scale: 1.1, y: -10, transition: { type: 'spring', damping: 10, stiffness: 400 } }}
            />
          </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
