import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './carousel.css';
import pic1 from './awe flyer 2.png';
import pic2 from './awe flyer.png';
import pic3 from './summer-banner.gif';
import pic4 from './mentorship kickoff.png';
import pic5 from './intel.png';
import pic6 from './march-banner.gif';

const loadScript = (src, async = true) =>
  new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = async;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });

const CarouselWithModal = () => {
  useEffect(() => {
    const loadDependencies = async () => {
      await loadScript('https://code.jquery.com/jquery-3.5.1.slim.min.js');
      await loadScript('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js');
    };

    loadDependencies();

    return () => {
      // Clean up function if needed
    };
  }, []);

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
      </Helmet>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="2000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={pic1} className="d-block" alt="AWE Flyer" />
          </div>
          <div className="carousel-item">
            <img src={pic2} className="d-block" alt="AWE Flyer 2" />
          </div>
          <div className="carousel-item">
            <img src={pic3} className="d-block" alt="Summer Banner" />
          </div>
          <div className="carousel-item">
            <img src={pic4} className="d-block" alt="Mentorship Kickoff Flyer" />
          </div>
          <div className="carousel-item">
            <img src={pic5} className="d-block" alt="Intel Flyer" />
          </div>
          <div className="carousel-item">
            <img src={pic6} className="d-block" alt="March Banner" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default CarouselWithModal;
