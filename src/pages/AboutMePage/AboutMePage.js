import React from "react";

import Sidebar from '../../components/AboutMeSection/Sidebar';
import ContentPane from '../../components/AboutMeSection/ContentPane';

import './AboutMePage.css';

import rocketLaunch from "../../media/rocket-launch.jpg";
import planeWindow from "../../media/plane-window.jpg";
import booksOverhead from "../../media/books-overhead.jpg";
import xena from "../../media/xena.jpg";
import computerLight from "../../media/computer-light.jpg";
import neuralNet from "../../media/neural-net.jpg";
import lightStrands from "../../media/light-strands.jpg";



const AboutMe = () => {
  const data = {
    Who: [
      {
        title: 'Who',
        image: rocketLaunch,
        description: 'This is the Who section description.',
      },
      {
        title: 'Who II',
        image: neuralNet,
        description: 'This is the Who section second description.',
      },
    ],
    
    What: [
      {
        title: 'What',
        image: planeWindow,
        description: 'This is the What section description.',
      },
    ],
    Where: [
      {
        title: 'Where',
        image: booksOverhead,
        description: 'This is the Where section description.',
      },
    ],
    Why: [
      {
        title: 'Cat',
        image: xena,
        description: 'Not only is my cat, Xena, adorable - she is also an incredibly diligent code reviewer.',
      },
    ],
    How: [
      {
        title: 'How',
        image: computerLight,
        description: 'This is the How section description.',
      },
    ],
  };

  return (
    <div className="about-me">
      <Sidebar />
      <div className="content">
        {Object.entries(data).map(([key, value]) => (
          <ContentPane key={key} id={key} title={key} items={value} />
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
