import React from 'react';
import { motion } from 'framer-motion';

export default function ExperienceTable({ paragraphHoverEffect }) {
  return (
    <div class="rowhobbies" style={{ width: '70%', margin: 'auto'}}>
    <div class="cell"  >    
    <div id="Exp" class = "smallText" > 
<div id="infoBlock">

  <div class="row">
    <div class="cell"><motion.h1 style={{color: 'black', fontSize: '20px', textAlign: 'left'}} >Experience</motion.h1>   
  
    </div>
  </div>

  <div class="row">
    <div class="cell" >
        <b>
          <motion.a
            href='http://www.gopniklab.berkeley.edu/'
            target='_blank'
            rel='noreferrer'
            whileHover={paragraphHoverEffect}
            style={{ display: 'inline' }}
          >
            Gopnik Lab
          </motion.a>{' '}
        </b>
        <br></br>
        UX Research Lead for a cognitive lab devising experimental designs, coding task stimuli, piloting, and iterating on design audits to understand decision-making.
    </div>
  </div>

  <div class="row">
    <div class="cell">
        <b>
          <motion.a
            href='https://www.mentia.me/'
            target='_blank'
            rel='noreferrer'
            whileHover={paragraphHoverEffect}
            style={{ display: 'inline' }}
          >
            Mentia
          </motion.a>{' '}
        </b>
        <br></br>
        Lead Data Scientist for a startup developing VR for Dementia care, aiming to reimagine innovative integration of interfaces in healthcare to improve patient outcomes.
    </div>
  </div>

  <div class="row">
    <div class="cell">
        <b>
          <motion.a
            href='http://emergelearning.org//'
            target='_blank'
            rel='noreferrer'
            whileHover={paragraphHoverEffect}
            style={{ display: 'inline' }}
          >
            Stanford Medicine
          </motion.a>{' '}
        </b>
        <br></br>
        UI Lead updating Emerge Learning website features for more streamlined user flow, enhanced visual design, and module management tools for COVID learning.
    </div>
  </div>

  <div class="row">
    <div class="cell">
        <b>
          <motion.a
            href='https://www.jhuapl.edu/'
            target='_blank'
            rel='noreferrer'
            whileHover={paragraphHoverEffect}
            style={{ display: 'inline' }}
          >
            Johns Hopkins
          </motion.a>{' '}
        </b>
        <br></br>
        Software Intern building and developing the contractor training web portal, designing based on information hierarchy, and presenting a prototype demo to users.
    </div>
  </div>

</div>
</div>
    </div>
    <div class="cell">  
    <div id="Exp" class = "smallText" >
<div id='infoBlock' >

<div class="row">
<div class="cell"><motion.h1 style={{color: 'black', fontSize: '20px', textAlign: 'cenlter'}} >Leadership</motion.h1>   
</div>
</div>

<div class="row">
  <div class="cell">
    <span> <b>Mental Health + Accessible Education </b> </span><br></br>
    Active Minds President and advocate for childhood mental health education, developing curriculums, redesigning pediatric clinics, and reinforcing positive psychology.
  </div>
</div>

<div class="row">
  <div class="cell">
    <span><b>Diversity + Inclusion in Technology</b></span><br></br>
    Internal Director for CS Kickstart, and Activities Coordinator for Association of Women in EE&amp;CS, hosting workshops, events, and defining resources for a generation of girls in tech.
  </div>
</div>

<div class="row">
  <div class="cell">
    <span> <b> Technology for Social Good</b> </span><br></br>
    External Director for Blueprint, pushing the status quo for using technology for social good, and developing Bloom, an education program for students to partner with non-profits.
  </div>
</div>

<div class="row">
  <div class="cell">
    <span> <b> Asian American Empowerment</b> </span><br></br>
    Public Relations and Philanthropy Chair for Sigma Psi Zeta, celebrating Asian heritage in IG infographics, attending AAPI Hate conferences, and raising $1K+ through sticker designs.
  </div>
</div>

</div>
</div>
    </div>
    </div>
  );
}
