import React, { useState, useEffect } from 'react';
import TypingAnimation from '../../components/TypingAnimation/TypingAnimation';
import * as THREE from 'three';
import NET from "vanta/dist/vanta.net.min";

import headshot from '../../media/headshot-bw2.png';

import '../../App.css';
import './LandingPage.css';

function LandingPage() {
  const [vantaEffect, setVantaEffect] = useState(0);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: '.landing-bg',
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 500.0,
          minWidth: 500.0,
          scale: 1,
          scaleMobile: 1.0,
          backgroundColor: 0x23153c,
          color: 0xff4986,
          points: 5.0,
          maxDistance: 42.0,
          spacing: 30.0,
          vertexColors: true,
          showDots: true
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className='landing-bg'>
       <img src={headshot} alt="headshot" className="headshot-img" />
       <div className="typing-spacing">
        <TypingAnimation text="Alexander Richards - Software Engineer" />
      </div>
    </div>
  );
}

export default LandingPage;
