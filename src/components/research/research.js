import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useAnimation } from 'framer-motion';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './research.css';
import sky from './berkeley.png'

export default function About() {
  window.scrollTo(0, 0); 

  const controls = useAnimation();
  const spotifyControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const bioContainer = document.getElementById('resContainer');
      const bioRect = bioContainer.getBoundingClientRect();
      
      if (bioRect.top < window.innerHeight) {
        bioContainer.style.opacity = 1;
        bioContainer.style.transform = 'translateY(0)';
        controls.start({ opacity: 1, x: 0 }); 
        spotifyControls.start({ opacity: 1, y: 0 });
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls, spotifyControls]);

  const paragraphHoverEffect = {
    opacity: 0.6,
    scale: 1.05,
    transition: { 
      type: 'spring',
      stiffness: 500,
      damping: 30,
    },
  };

  const linkHoverEffect = {
    opacity: 0.7,
    scale: 1.2,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  };

  const textMotionProps = {
    initial: { opacity: 0, x: -50 },
    animate: controls, 
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10,
    },
  };

  const spotifyMotionProps = {
    initial: { opacity: 0, y: 50 }, 
    animate: spotifyControls, 
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10,
    },
  };
  
  return (
    <div>
      <Helmet>
        <title>Research</title>
      </Helmet>
      <Header />
      <div class = "skyContainer">
      <img
            loading='lazy'
            src={sky}
            alt='Pretty Sky :)'
            class = "sky"
      />
      </div>

      <div id='resContainer'>
        <div >
        <motion.p {...textMotionProps}>
          <div id='tldrBlock'>
            <h2 {...textMotionProps} >Publications</h2>
          </div>
          <div id='infoBlock'>
            <p {...textMotionProps}>
            <b>Liu, E.</b> (under review). Understanding How Predictability Influences Our Explore-Exploit Decisions Across Development. <span>  
              </span> 
            </p>
            <p {...textMotionProps}>
            <b>Liu, E.,</b> Zhang, N., Tahir, M., Ong, S., Vora, S., Chowdhury, Y., Jajj, S. (in progress). Extension on Shared and distinct neural correlates of first and second language morphological processing in bilingual brain. <span>  
              </span> 
            </p>
            <p {...textMotionProps}>
            Yiu, E., Sandbrink, K., <b>Liu, E.</b>, & Gopnik, A. (2023, November). <a href="https://openreview.net/pdf?id=LhbsXSEfGQ"> Children prioritize purely exploratory actions in observe-vs.-bet tasks.</a> In Intrinsically-Motivated and Open-Ended Learning Workshop@ NeurIPS2023. <span>  
              </span> 
            </p>
            <p {...textMotionProps}>
            Lee, C., <b>Liu, E.</b>, Hanseter, C., Choi, K., Thomas, A., Bae, K., & Nguyen, E. (2023, October). <a href="https://escholarship.org/uc/item/9wf5q2sg">Mental Health's Impact on Quality of Life.</a> UC Berkeley: Public Health & Health Science Division, ULAB.<span>  
              </span> 
            </p>
            <p {...textMotionProps}>
            Chang, K., Hastings, W., Kwok, E., <b>Liu, E.</b>, Wang, J., & Houghton, J. (2020, May). <a href="https://escholarship.org/uc/item/4n1922gt">An Extension Study: fMRI use to Distinguish Between Deception and General Memory.</a> UC Berkeley: Cognitive Science & Psychology Undergraduate Lab @ Berkeley (ULAB).<span>  
              </span> 
            </p>
             <br />
             <h2 {...textMotionProps} >Conference Presentations</h2>
          </div>
          <div id='infoBlock'>
            <p {...textMotionProps}>
            Yiu, E., Sandbrink, K., <b>Liu, E.</b>, & Gopnik, A. Children prioritize purely exploratory actions in observe or bet tasks (2023). Poster presented at the Intrinsically Motivated Open-ended Learning Workshop at NeurIPS; 2023 December 16; New Orleans, LA, USA.<span>  
              </span> 
            </p>
            <p {...textMotionProps}>
            Yiu, E., Sandbrink, K., <b>Liu, E.</b>, & Gopnik, A. Children prioritize purely exploratory actions in observe or bet tasks (2023). Poster presented at the Causality in Minds and Machines: Probing the Mathematical and Computational Foundations; 2023 November 16; San Francisco, CA, USA.<span>  
              </span> 
            </p>

            <br />
             <h2 {...textMotionProps} >Honors, Grants & Awards </h2>
          </div>
          
        <div class="chart">
        <div class="row">
            <div class="cell"><p>December 2023</p></div>
            <div class="cell"><p><b>Robert J. Glushko Prize for Undergraduate Research</b><br></br>Thesis Title: Understanding How Predictability Influences Our Explore-Exploit Decisions Across Development<br></br>Advisor: Dr. Alison Gopnik</p></div>
            
        </div>
        <div class="row">
            <div class="cell"><p>May 2023</p></div>
            <div class="cell"><p><b>Institute of Cognitive and Brain Sciences Stipend</b></p></div>
            
        </div>
        <div class="row">
            <div class="cell"><p>May 2023</p></div>
            <div class="cell"><p><b>Psi Chi Psychology Honor Society</b></p></div>
        </div>
        <div class="row">
            <div class="cell"><p>Fall 2022, Spring 2022</p></div>
            <div class="cell"><p><b>Dean’s List – College of Letters and Sciences</b></p></div>
        </div>
        <div class="row">
            <div class="cell"><p>August 2022</p></div>
            <div class="cell"><p><b>Biology Scholars Program</b></p></div>
        </div>
        <div class="row">
            <div class="cell"><p>May 2021</p></div>
            <div class="cell"><p><b>UC Berkeley Certificate for Entrepreneurship and Technology</b></p></div>    
        </div>
        <div class="row">
            <div class="cell"><p>May 2020</p></div>
            <div class="cell"><p><b>Texas Social Innovation Challenge Finalist</b></p></div>
        </div>

          </div>
          <div id='tldrBlock'>
            <h2 {...textMotionProps} >Teaching & Mentorship</h2>
          </div>
          <div class="chart">
          <div class="row">
              <div class="cell"><p>Aug 2019 - Present</p></div>
              <div class="cell"><p><b>Undergraduate Mentor</b><br></br>Undergraduate Laboratory at Berkeley</p></div>
              
          </div>
          <div class="row">
              <div class="cell"><p>May 2020 - Dec 2020</p></div>
              <div class="cell"><p><b>Course Facilitator</b><br></br>UGBA198: Digital Marketing Today,<br></br>UC Berkeley</p></div>
              
          </div>
          <div class="row">
              <div class="cell"><p>Jan 2020 - May 2020</p></div>
              <div class="cell"><p><b>Academic Student Employee</b><br></br>EECS16A: Designing Informationn Devices and Systems I, UC Berkeley</p></div>
          </div>
          </div>
          </motion.p>

        </div>
      </div>
      <Footer />
    </div>
  );
}



