import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useAnimation } from 'framer-motion';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './about.css';
import sky from './sky.png';
import me from './eileen_grad.jpg';
import favs from './favs.png';
import hobbies from './hobbies.png';
import food from './food.png';
import aweflyer from './awe flyer.png'
import marchbanner from './march-banner.gif'
import summerbanner from './summer-banner.gif'
import mentorshipkickoff from './mentorship kickoff.png'
import aweflyer2 from './awe flyer 2.png'
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
  
  return (   
    <div style={{ backgroundColor: 'white'}}>
      
      <Helmet>       
        <title>About Eileen</title>
      </Helmet>
      <Header />
      <img
            loading='lazy'
            src={sky}
            alt='Pretty Sky :)'
            class = "sky"
      />

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
            <motion.h1 style={{color: 'black'}}  {...textMotionProps}>Hey, nice to meet you!</motion.h1>

            <img
            loading='lazy'
            src={me}
            alt='Eileen in a graduation gown '
            style = {{width: '330px'}}
          />

          <div id='infoBlock'>
            <motion.p {...textMotionProps}>
            I'm Eileen, a product designer and developer with a {' '}
              <motion.a 
                href='https://www.berkeley.edu/'
                target='_blank'
                rel='noreferrer'
                whileHover={paragraphHoverEffect}
                style={{ display: 'inline'}}
              >
                B.A. in Computer Science and Cognitive Science with highest honors, from the University of California, Berkeley 
              </motion.a> {' '} 
              , with specializations in human-computer interaction and user experience design. 
              <br></br><br></br>
              I'm constantly pushing boundaries between neuroscience, technology and healthcare. 
              I've developed a fascination with making connections, and try to live every day pushing myself to become more innovative in my thinking.
              Technology serves as a great outlet for execution of my ideas because of its malleability in the world for social good. 
              <span> Design is a passion of mine- and I'm hoping to combine meaning, cognition, ideas to create products that help people, and bring value and positivity to the world. </span>
              <br></br>
              <br></br>
              <h3>Pushing Boundaries </h3>     
              In the past, I've led design for two mobile app projects, where I've
              goten the priviledge to work on things like developing cognitive walkthroughs
              and creating UI interfaces within the <span> MedTech and EdTech sphere</span>. More
              recently, I taught product and design to a couple of undergraduate students 
              at a  <span> 
              <a href="" target="_blank"> Digital Marketing Decal, </a>
              </span>
              and have been involved in <span>championing for causes close to my heart. </span>
           
              <div id = "Exp"> 
                <div id='infoBlock'>

              <div class="row">
                  <div class="cell"><h4>Experience</h4></div>
                  <div class="cell"><h4>Leadership</h4></div>
              </div>

              <div class="row">
              <div class="cell"><p><b><motion.a
                href='http://www.gopniklab.berkeley.edu/'
                target='_blank'
                rel='noreferrer'
                whileHover={paragraphHoverEffect}
                style={{ display: 'inline' }}
              >
                Gopnik Lab
              </motion.a> {' '} </b><br></br>UX Research Lead for a cognitive lab devising experimental designs, coding task stimuli, piloting, and iterating on design audits to understand decision-making.</p></div>
              <div class="cell"><span> <b>Mental Health + Accessible Education </b> </span><p>Active Minds President and advocate for childhood mental health education, developing curriculums, redesigning pediatric clinics, and reinforcing positive psychology. </p></div>
              </div>

              <div class="row">
              <div class="cell"><p><b><motion.a
                href='https://www.mentia.me/'
                target='_blank'
                rel='noreferrer'
                whileHover={paragraphHoverEffect}
                style={{ display: 'inline' }}
              >
                Mentia
              </motion.a> {' '}</b><br></br>Lead Data Scientist for a startup developing VR for Dementia care, aiming to reimagine innovative integration of interfaces in healthcare to improve patient outcomes.</p></div>
              <div class="cell"><span><b>Diversity + Inclusion in Technology</b></span><p>Internal Director for CS Kickstart, and Activities Coordinator for Association of Women in EE&amp;CS, hosting workshops, events, and defining resources for a generation of girls in tech.</p></div>
              </div>

              <div class="row">
              <div class="cell"><p><b><motion.a
                href='http://emergelearning.org//'
                target='_blank'
                rel='noreferrer'
                whileHover={paragraphHoverEffect}
                style={{ display: 'inline' }}
              >
                Stanford Medicine
              </motion.a> {' '}</b><br></br>UI Lead updating Emerge Learning website features for more streamlined user flow, enhanced visual design, and module management tools for COVID learning.</p></div>
              <div class="cell"><span> <b> Technology for Social Good</b> </span><p>External Director for Blueprint, pushing the status quo for using technology for social good, and developing Bloom, an education program for students to partner with non-profits.</p></div>
              </div>

              <div class="row">
              <div class="cell"><p><b><motion.a
                href='https://www.jhuapl.edu/'
                target='_blank'
                rel='noreferrer'
                whileHover={paragraphHoverEffect}
                style={{ display: 'inline' }}
              >
                Johns Hopkins
              </motion.a> {' '}</b><br></br>Software Intern building and developing the contractor training web portal, designing based on information heirarchy, and presenting a prototype demo to users.</p></div>
              <div class="cell"><span> <b> Asian American Empowerment</b> <p>Public Relations and Philanthropy Chair for Sigma Psi Zeta, celebrating Asian heritage in IG infographics, attending AAPI Hate conferences, and raising $1K+ through sticker designs.</p></span></div>
              </div>
              </div>
              </div>
              <br />
              <br />
            </motion.p>

            <h3>Learn About Me Through Visual Storytelling! </h3>
            <div id='infoBlock'>
            <div class="row">
            <div class="cell"> <img
            src={hobbies}
            alt='Gallery of hobbies'
          /></div>
          <div class="cell"><motion.p {...textMotionProps}>
              <h3><br></br>When I’m not designing, you can spot me:</h3> making trip itineraries from LA to NYC. ☀️
              <br></br>doing pilates & continuing to live healthier. 🧘🏻‍♀️
              <br></br>crafting up designs and learning 3D. 📝
              <br></br>learning about styling and skincare. 🧴
              <br></br>going to concerts. 🎶
            </motion.p></div>
              </div>

              </div>
              <div class="row">
              <div class="cell"><motion.p {...textMotionProps}><h3 style = {{float: 'right'}}>
              Foodie &lt;3
              &nbsp;&nbsp;&nbsp;
                </h3> 
              <br></br><br></br>
              <p style = {{'text-align': 'left'}}>I’ve been sharing my food since I was little! I love to explore my sweet tooth and experience different flavors, whether it be from crafting 1 minute cup tiramisu or making dumplings for Chinese New Years. Funnily, my friends joke that sugar is how I got to California.
              <br></br><br></br>
              From local adventures to the beach, to across to the east coast, I love to document my food journey, check out my {' '}
                <motion.a
                  href='https://food40.weebly.com'
                  target='_blank'
                  rel='noreferrer'
                  whileHover={paragraphHoverEffect}
                  style={{ display: 'inline' }}
                >
                  blog
                </motion.a> 
                {' '}
               of the Korean Way near my hometown. </p>
              </motion.p></div>

              <div class="cell"><img style = {{ width: '350px', float: 'left'}} 
              loading='lazy'
            src={food}
            alt='Me eating food :P'
            /></div>
          </div>

              <div class="row">
              <div class="cell"><img style = {{float: 'right'}} loading='lazy' src={favs} alt='Favorite Songs + Media'/></div>
          <div class="cell"><motion.p style = {{float: 'left'}} {...textMotionProps}>
            <h3>Music Enthusiast 🎶</h3>
            </motion.p>
            <br></br><br></br><br></br><br></br>
            <p>I find so much of my expression in music. You can catch me listening to all genres from classical music to EDM when I’m coding. 
            <br></br><br></br>
            Music encompasses the human experience and allows me to find self expression and connection. Throughout my life, it’s played a large part in my story, whether it be playing the violin for 10 years, attending music festivals, or {' '}
              <motion.a
                href='https://open.spotify.com/user/chiharuyachida'
                target='_blank'
                rel='noreferrer'
                whileHover={paragraphHoverEffect}
                style={{ display: 'inline' }}
              >
                curating my Spotify playlists. 
              </motion.a ></p>
            </div>
          </div>
            <br />

            <h3>Check out some of my designs! </h3>
            <div class="row">
            <div class="cell"><img style = {{float: 'left', width: '225px'}} loading='lazy' src={aweflyer} alt='AWE Poster'/></div>       
            <div class="cell"><img style = {{float: 'left', width: '225px'}} loading='lazy' src={aweflyer2} alt='AWE Poster 2'/></div>         
            <div class="cell"><img style = {{float: 'left', width: '225px'}} loading='lazy' src={marchbanner} alt='AWE March Banner for Newsletter'/>
            <img style = {{float: 'left', width: '225px'}} loading='lazy' src={mentorshipkickoff} alt='AWE flyer'/></div>        
            <div class="cell"><img style = {{float: 'left', width: '225px'}} loading='lazy' src={summerbanner} alt='AWE Summer Banner for Newletter'/>  </div>  
            </div>

            <div id='infoBlock'>
            <motion.p {...textMotionProps}>
            <h3>Constantly Learning</h3>
            <p>I’ve always been interested in the brain and am a naturally curious learner, whether that be working on ways to become more productive, researching about how development and cognitive processes come into being, listening to podcasts on new technologies, perfecting my ramen recipe, and constantly curating my wardrobe. 
            <br></br><br></br>
            <div class="spotifyContainer"><iframe
            src="https://open.spotify.com/embed/episode/4nWqwMGmXiUzoHU7RgkQQs?utm_source=generator&amp;theme=0"
            width="80%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe> </div>
           <br></br>
            As an interdisciplinary designer &amp; developer, I find meaning in a material world through the joy or learning about things that intrigue me. There is beauty in taking something from ideation into algorithms that impact the world through collaboration. I find value in learning and hope to combine technology and the mind to enhance the world around me. Innovation, passion, and a vision to change the world drives me. 
            </p>
           </motion.p>

           <br></br>
           <motion.p {...textMotionProps}>
              <h3>Say Hello</h3>
              Feel free to{' '}
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
            </motion.p>
            <img
            src={helloEmoji}
            alt='wave :)'
            style = {{height: '75px', width: 'auto', 'align': 'center'}}
          />
            <RotatingCircularText></RotatingCircularText>
            </div>
           
          </div>
          </div>
      </div>
      <Footer></Footer>
    </div>
  );
}