import React from 'react';
import * as THREE from 'three';
import NET from "vanta/dist/vanta.net.min";
import { useState, useEffect } from 'react';

import '../../App.css';
import './LandingPage.css';

function LandingPage() {
  const [vantaEffect, setVantaEffect] = useState(0);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: '.vanta-bg',
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 500.0,
          minWidth: 500.0,
          scale: 1,
          scaleMobile: 1.0,
          backgroundColor: 0x23153c,
          color: 0x982731,
          points: 5.0,
          maxDistance: 42.0,
          spacing: 30.0,
          vertexColors: true
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className='landing-bg'>
      <h1 className='faded-round-corner'>Alexander Richards - Software Engineer</h1>
      <p className="intro-text faded-round-corner">
      Welcome to my website! I am thrilled to have you here.As a passionate software engineer, I am dedicated to building innovative applications and finding solutions to complex problems. With years of experience in the industry, I have honed my skills and expertise to deliver exceptional results to clients. I invite you to explore some of my previous work showcased here on my website. Don't hesitate to reach out to me if you have any questions or would like to discuss a potential project. Let's work together to bring ideas to life!
      </p>
      <div className="vanta-bg"></div>
    </div>
  );
}

export default LandingPage;
