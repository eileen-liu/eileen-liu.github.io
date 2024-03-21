import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useAnimation } from 'framer-motion';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './about.css';
import sky from './sky.png';
import sky2 from './sky2.png';
import me from './Picture1.png';
import cake from './cake.png';

import graphic from './graphic.png'
import pilates from './pilates.png';
import festival from './festival.png'
import style from './style.png';
import travel from './travel.png';
import music from './music.png';
import sushi from './sushi.png';


import ExperienceTable from './expTable.js';
import helloEmoji from '../home/hello_emoji.png';
import RotatingCircularText from './RotatingCircleText'; // Import the RotatingCircularText component

export default function About() {
  window.scrollTo(0, 0); 

  const controls = useAnimation();
  const spotifyControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const bioContainer = document.getElementById('bioContainer');
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

  const textMotionProps = {
    initial: { opacity: 0, x: -50 },
    animate: controls, 
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10,
    },
  };
  
  return (   

    <div style={{ backgroundColor: 'white'}}>
      
      <Helmet>           
      <title>About Eileen</title>
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
      <RotatingCircularText></RotatingCircularText>

      <div id='bioContainer'>
        <motion.div
          initial={{ x: -100, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={ {
            type: 'spring',
            stiffness: 400,
            damping: 10,
          }}
        >
        </motion.div>

        <div id='tldrBlock'>
        <div class="rowhobbies" style={{ width: '100%', margin: 'auto'}}>
              <div class="cell"  style = {{margin: 'auto'}}>    
              <motion.h1 style={{color: '#f5c5e0', fontSize: '30px', textAlign: 'center'}}  {...textMotionProps}>Hey, nice to meet you!</motion.h1>     
            <span class="smallText">
            I'm Eileen, a product designer and developer with a {' '}
              <motion.a 
                href='https://www.berkeley.edu/'
                target='_blank'
                rel='noreferrer'
                whileHover={paragraphHoverEffect}
                style={{ display: 'inline'}}
              >
                B.A. in Computer Science and Cognitive Science with highest honors, from the University of California, Berkeley,
              </motion.a> {' '} 
               with specializations in human-computer interaction and user experience design. 
              <br></br><br></br>
              I'm constantly pushing boundaries and bridging connections between neuroscience, technology and healthcare. Design is a passion of mine, and I'm hoping to create products that help people, and bring positive impact to the world. </span>
              {/* I strive everyday to be more innovative in my thinking. Technology serves as a great outlet for execution of my ideas because of its malleability in the world for social good.  */}
              </div>
              <div class="cell">  
              <img
                  loading='lazy'
                  src={me}
                  alt='Eileen in a graduation gown '
                  style = {{width: '300px'}}
                />
              </div>
              </div>

          {/* HOBBIES */}

          <div id='tldrBlock'>
          <br></br>
          <br></br>
          <motion.h1 style={{color: '#666666', fontSize: '25px', textAlign: 'center'}}  {...textMotionProps}>When I'm not designing you, <br></br> can spot me</motion.h1>     
          <motion.p {...textMotionProps}></motion.p>
          </div>
          <div class= "hobbycontainer">
          <span class="line-break"></span>

           <br></br>
          <img
                  loading='lazy'
                  src={cake}
                  alt='Eileen eating cake'
                />
          <div class = "hobbytable">
           <div class="hobbytext" style = {{top: '45%', left: '5%'}}>
           <img
                  loading='lazy'
                  src={pilates}
                  alt='Love graphic'
                  class = "hobby"
                />
            Doing pilates & continuing to live healthier 🧘🏻‍♀️</div>
           <div class="hobbytext" style = {{top: '55%', left: '73%'}}>
           <img
                  loading='lazy'
                  src={graphic}
                  alt='Love graphic'
                  style = {{width: '700px'}}
                  class = "hobby"
                />
            Crafting up designs and learning 3D 📝</div>
           <div class="hobbytext" id = "styling" >
           <img
                  loading='lazy'
                  src={style}
                  alt='lip gloss'
                  class = "hobby"
            />
            Learning about styling and skincare 🧴</div>
           <div class="hobbytext" id = "concert" >
           <img
                  loading='lazy'
                  src={festival}
                  alt='festival glasses'
                  class = "hobby"
            />
            Going to concerts 🎶</div>
           <div class="hobbytext" style = {{top: '20%', left: '80%'}}>
           <img
                  loading='lazy'
                  src={travel}
                  alt='suitcase'
                  class = "hobby"
            />
            Making trip itineraries from LA to NYC ☀️</div>
            <div class="hobbytext" id = "music">
           <img
                  loading='lazy'
                  src={music}
                  alt='music'
                  class = "hobby"
            />
            <br></br>Catch me playing violin, or listening to all genres from EDM to classical 🎻</div>
            <div class="hobbytext" style = {{top: '75%', left: '20%', width: '250px'}}>
           <img
                  loading='lazy'
                  src={sushi}
                  alt='sushi'
                  style = {{width: '100px'}}
                  class = "hobby"
            />
            <br></br>Being a Foodie &lt;3, exploring my sweet tooth, making sushi, 1 minute cup tiramisu or CNY dumplings 🥟</div>
          </div>
          </div>            
          {/* END HOBBIES */}
          <span class="line-break2"></span>
          <div id='tldrBlock' style={{ width: '70%', margin: 'auto'}}>
            <div class="smallText">
            🎧 Check out {' '}
              <motion.a
                href='https://open.spotify.com/user/chiharuyachida'
                target='_blank'
                rel='noreferrer'
                whileHover={paragraphHoverEffect}
                style={{ display: 'inline' }}
              >
               my Spotify playlists!
              </motion.a >
            <br></br>
            🍓 Check out {' '}
              <motion.a
                href='https://food40.weebly.com'
                target='_blank'
                rel='noreferrer'
                whileHover={paragraphHoverEffect}
                style={{ display: 'inline' }}
              >
               my blog
              </motion.a> 
              {' '}
             of the Korean Way near my hometown!
             <br></br>
             ❤️ Check out {' '}
              <motion.a
                href=''
                target='_blank'
                rel='noreferrer'
                whileHover={paragraphHoverEffect}
                style={{ display: 'inline' }}
              >
               my sticker store!
              </motion.a> 
              {' '}
            </div>
            </div>

            <div id='tldrBlock' style={{ width: '70%', margin: 'auto'}}>
            <br></br ><br></br ><br></br ><br></br >
            <motion.h1  style={{color: 'black', fontSize: '25px', textAlign: 'center'}}  {...textMotionProps}>Pushing Boundaries</motion.h1>     
              <div class = "smallText">In the past, I've led design for two mobile app projects, where I've
              gotten the priviledge to work on things like developing cognitive walkthroughs
              and creating UI interfaces within the <span> MedTech and EdTech sphere</span>. More
              recently, I taught product and design to a couple of undergraduate students 
              at a  <span> 
              <a target="_blank"> Digital Marketing Decal, </a>
              </span>
              and have been involved in <span>championing for causes close to my heart. </span>
              </div>
              </div>
              
{/* TABLE START */} 
<ExperienceTable></ExperienceTable>
{/* TABLE END */}
          </div>
          </div>
          <motion.h1 style={{color: 'pink', fontSize: '25px', textAlign: 'center'}}  {...textMotionProps}>Constantly </motion.h1>     
          <motion.h1 style={{color: 'black', fontSize: '25px', textAlign: 'center'}}  {...textMotionProps}> Learning</motion.h1>    
          <div class="rowhobbies" style={{ width: '70%', margin: 'auto'}}>
              <div class="cell"  style = {{margin: 'auto'}}>    
              <div class="spotifyContainer">
              <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/playlist/6VOekNCI6RdjcnDUWP2RAJ?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>

 </div>
  </div>
            <div class="cell" style={{ display: 'flex', alignItems: 'center' }}>
              <span class="smallText">
                I’ve always been interested in the brain and am a naturally curious learner, whether that be working on ways to become more productive, researching about how development and cognitive processes come into being, listening to podcasts on new technologies, perfecting my ramen recipe, and constantly curating my wardrobe. 
                <br /><br />
                As an interdisciplinary designer & developer, I find meaning in a material world through the joy of learning about things that intrigue me. There is beauty in taking something from ideation into algorithms that impact the world through collaboration. I find value in learning and hope to combine technology and the mind to enhance the world around me. Innovation, passion, and a vision to change the world drive me. 
              </span>
            </div>
            </div>


            <div id = "tldrBlock" style = {{width: '70%', margin: 'auto'}}>
            <div id = "infoBlock" class = "smallText">
            <br></br><br></br>
           <br></br>
           <motion.h1 style={{color: 'black', fontSize: '25px', textAlign: 'center'}}  {...textMotionProps}>Say Hello!</motion.h1>     
             <div class = "smallText"> Feel free to{' '}
                <motion.a
                  href='https://calendar.amie.so/s/c62e09a0-7cb6-4bab-acbf-145dbdedac55'
                  target='_blank'
                  rel='noreferrer'
                  whileHover={paragraphHoverEffect}
                  style={{ display: 'inline' }}
                >
                  reach out for a ☕️ chat
                </motion.a> 
                {' '}
                if you would like to discuss anything further, grab a bite, explore ideas, share your favorite songs, or simply 
                drop in to say hello.
                </div>

            <div style={{ display: 'flex', paddingTop: '10px', paddingBottom: '20px', justifyContent: 'center' }}>
            <img
              src={helloEmoji}
              alt='wave :)'
              style={{ height: '50px', width: 'auto' }}
            />
          </div>
        </div>
</div>

      <Footer></Footer>
  
    </div>
  );
}