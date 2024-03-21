import React from 'react';
import { motion } from 'framer-motion'; // Assuming you're using Framer Motion for animations
import cake from './cake.png';
import graphic from './graphic.png';
import pilates from './pilates.png';
import festival from './festival.png';
import style from './style.png';
import travel from './travel.png';
import music from './music.png';
import sushi from './sushi.png';
import './about.css'

export default function HobbiesContent({ textMotionProps }) {
  return (
    <div id='tldrBlock'>
      <br />
      <br />
      <motion.h1 style={{ color: '#666666', fontSize: '25px', textAlign: 'center' }} {...textMotionProps}>
        When I'm not designing you, <br /> can spot me
      </motion.h1>
      <motion.p {...textMotionProps}></motion.p>
    </div>
    <div className="hobbycontainer">
      <span className="line-break"></span>
      <br />
      <img
        loading='lazy'
        src={cake}
        alt='Eileen eating cake'
      />
      <div className="hobbytable">
        <div className="hobbytext" style={{ top: '55%', left: '5%' }}>
          <img
            loading='lazy'
            src={pilates}
            alt='Love graphic'
            className="hobby"
          />
          Doing pilates & continuing to live healthier 🧘🏻‍♀️
        </div>
        <div className="hobbytext" style={{ top: '65%', left: '70%' }}>
          <img
            loading='lazy'
            src={graphic}
            alt='Love graphic'
            style={{ width: '700px' }}
            className="hobby"
          />
          Crafting up designs and learning 3D 📝
        </div>
        <div className="hobbytext" id="styling">
          <img
            loading='lazy'
            src={style}
            alt='lip gloss'
            className="hobby"
          />
          Learning about styling and skincare 🧴
        </div>
        <div className="hobbytext" id="concert">
          <img
            loading='lazy'
            src={festival}
            alt='festival glasses'
            className="hobby"
          />
          Going to concerts 🎶
        </div>
        <div className="hobbytext" style={{ top: '40%', left: '80%' }}>
          <img
            loading='lazy'
            src={travel}
            alt='suitcase'
            className="hobby"
          />
          Making trip itineraries from LA to NYC ☀️
        </div>
        <div className="hobbytext" id="music">
          <img
            loading='lazy'
            src={music}
            alt='music'
            className="hobby"
          />
          <br />
          Catch me playing violin, or listening to all genres from EDM to classical 🎻
        </div>
        <div className="hobbytext" style={{ top: '75%', left: '20%', width: '250px' }}>
          <img
            loading='lazy'
            src={sushi}
            alt='sushi'
            style={{ width: '100px' }}
            className="hobby"
          />
          <br />
          Being a Foodie &lt;3, exploring my sweet tooth, making sushi, 1 minute cup tiramisu or CNY dumplings 🥟
        </div>
      </div>
    </div>
  );
}
