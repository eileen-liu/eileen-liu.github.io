import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import WorkItem from './WorkItem';
import WorkItemEven from './WorkItemEven';
import {gptData, gptData1} from './WorkData';
import './style.css'
import header from './workheader.png';
import './carousel.css'
import CarouselWithModal from './carousel.js'

const Work = () => {
  window.scrollTo(0, 0); 
  return (
    <div>
      <Helmet>
        <title>Work </title>
      </Helmet>
      <Header />
      <div class = "skyContainer">
          <img
                loading='lazy'
                src={header}
                alt='Pretty Gradient :)'
                class = "gradient"
          />
          <div class="text-on-image">Hey, I'm a human-centered developer & designer passionate about creating innovative solutions 🧠</div>
          <div class="smalltext-on-image">____ <br></br>See my designs</div>
        </div>


      {/* TABLE */}
    <table class="table">
    <tbody>
        <tr class="odd-row">
            <td class = "workRows" style = {{background: 'white'}}><WorkItem workData={gptData} /></td>
        </tr>
        <tr class="even-row">
            <td class = "workRows" style = {{background: '#ffecf7'}}><WorkItemEven workData={gptData1} /></td>
        </tr>
    </tbody>
    </table>
    <div className='workContainer'>
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          style = {{color: "black"}}
          transition={{ type: 'spring', damping: 10, stiffness: 400, duration: 0.5, delay: 0.2 }}
        > <div className='workContainer' >
        <motion.h2 >
        <br></br>
         Graphic Designs
         <br></br> <br></br>
        </motion.h2>
       </div>  
       
          </motion.p>
          
          <CarouselWithModal></CarouselWithModal>
          </div>
        {/* GRADIENT */}
          {/* <div className='workContainer' id = "endquote" style={{ margin: 'right' }} >
        <motion.h2 >
        <br></br><br></br>
         Lets Chat!
        </motion.h2>
       </div>   */}
          
      <div id='personalTitle'
      className='workContainer'>
        {/* <motion.h1
          style = {{color: "black"}}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', damping: 10, stiffness: 400, duration: 0.5, delay: 0.2 }}
        >
         💫 Projects 
        </motion.h1>
        <p> Still in the works... pardon the dust!</p> */}
      </div>

      <Footer />
    </div>
  );
};

export default Work;
