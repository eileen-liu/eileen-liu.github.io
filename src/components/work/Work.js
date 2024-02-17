import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import WorkItem from './WorkItem';
import {gptData} from './WorkData';

const Work = () => {
  window.scrollTo(0, 0); 
  return (
    <div>
      <Helmet>
        <title>Work </title>
      </Helmet>
      <Header />
      <div className='workContainer'>
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          style = {{color: "black"}}
          transition={{ type: 'spring', damping: 10, stiffness: 400, duration: 0.5, delay: 0.2 }}
        >
          Featured Work 
        </motion.h1>
        <div id='workColumns' className='doubleColumns'>
          <WorkItem workData={gptData} />
          {/* <WorkItem workData={emochaData} /> */}
        </div>
      </div>
      <div id='personalTitle'
      className='workContainer'>
        <motion.h1
          style = {{color: "black"}}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', damping: 10, stiffness: 400, duration: 0.5, delay: 0.2 }}
        >
         💫 Projects 
        </motion.h1>
        <p> Still in the works... pardon the dust!</p>
        <div id='workColumns' className='doubleColumns'>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Work;
