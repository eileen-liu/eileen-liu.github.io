import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './home.css';
import neuron from './nero-big.gif';
import helloEmoji from './hello_emoji.png';

const hoverEffect = {
  scale: 1.075,
  transition: {
    type: 'spring',
    stiffness: 400,
    damping: 10,
  },
};

const typingDelay = 70;
const cursorBlinkInterval = 850;

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', damping: 10, stiffness: 400 },
    },
  };

  const roles = [
    'a human-centered developer',
    'a mental health advocate',
    'a recent UC Berkeley graduate 🐻',
    'drawing up impactful digital user experiences',
    'a visual storyteller',
    'passionate about inclusivity of women in tech',
    'a problem solver',
    'doing pilates',
    'coding to edm 🎶',
    'a graphic designer',
    'curious about the human brain and neuroscience',
    'building engaging and beautiful products',
    'researching human computer interactions',
    'implementing AI in designs',
    'a sushi enthusiast  🍣 ',
    'using Cognitive Science to humanize tech',
    'designing and developing for social good',
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentRoleText, setCurrentRoleText] = useState('');
  const [isMultiLine, setIsMultiLine] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    let currentText = '';
    let targetText = roles[currentRoleIndex];
    let index = 0;

    const typingInterval = setInterval(() => {
      currentText += targetText[index];
      setCurrentRoleText(currentText);
      index++;

      if (index >= targetText.length) {
        clearInterval(typingInterval);
        setIsMultiLine(currentText.split('\n').length > 1);
        startCursorBlink();
      }
    }, typingDelay);

    return () => clearInterval(typingInterval);
  }, [currentRoleIndex]);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * roles.length);
    setCurrentRoleIndex(randomIndex);
  };

  const startCursorBlink = () => {
    setTimeout(() => {
      setCursorVisible(true);

      const cursorBlinkIntervalId = setInterval(() => {
        setCursorVisible((prev) => !prev);
      }, cursorBlinkInterval);

      return () => {
        clearInterval(cursorBlinkIntervalId);
        setCursorVisible(false);
      };
    }, currentRoleText.length * typingDelay); 
  };

  useEffect(() => {
    startCursorBlink();
    return startCursorBlink;
  }, []);

  return (
    <div>
      <Helmet>
        <title>Eileen Liu | Developer </title>
      </Helmet>
      <Header />
      <div id='landingContainer'>
        <motion.h1
          id='greyHeadText'
          initial='hidden'
          animate='visible'
          variants={containerVariants}
        >
          <img
            src={neuron}
            alt='program generated neuron tree'
            className="restricted-height-image"
          />
          <br />
          <br />
          Hey! 
          <img
            src={helloEmoji}
            alt='wave :)'
            className="emoji-image"
          />
          <br />I am Eileen Liu,
          <br />
           I'm 
          {' '}
          <span id='cyclingHomeText'>
            <motion.span
              initial='hidden'
              animate='visible'
              variants={containerVariants}
              onClick={handleClick}
              whileHover={hoverEffect}
              style={{ cursor: 'pointer', display: 'inline-block' }}
            >
              {currentRoleText}
              {cursorVisible && '|'}
            </motion.span>
          </span>{' '}
        </motion.h1>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={containerVariants}
        >
          <p id='currentJob'>📍 Currently Researching RL Agents @ <span> The Gopnik Lab for Cognitive Development and Learning</span></p>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
}