import React from "react";

import Sidebar from '../../components/AboutMeSection/Sidebar';
import ContentPane from '../../components/AboutMeSection/ContentPane';

import './AboutMePage.css';

import planeWindow from "../../media/plane-window.jpg";
import booksOverhead from "../../media/books-overhead.jpg";
import xena from "../../media/xena.jpg";
import neuralNet from "../../media/neural-net.jpg";
import lightbulb from "../../media/lightbulb.jpg";
import madisonSunset from "../../media/madison-sunset.jpg";
import codeText from "../../media/code-text.jpg";
import mkeNight from "../../media/mke-night.jpg";
import workHome from "../../media/workHome.jpg";
import world from "../../media/world.jpg";
import library from "../../media/library.jpg";
import paintedWall from "../../media/painted-wall.jpg";
import lightTrace from "../../media/light-trace.jpg";
import paintedHand from "../../media/painted-hand.jpg";
import collaboration from "../../media/collaboration.jpg";
import rubix from "../../media/rubix.jpg";



const AboutMe = () => {
  const data = {
    Who: [
      {
        title: 'Personal Values',
        image: lightbulb,
        description: 'A firm believer in integrity, accountability, and innovation, I ensure these principles guide my work and interactions.',
      },
      {
        title: 'Hobbies',
        image: booksOverhead,
        description: 'An avid reader and technology enthusiast, always seeking new ways to combine personal interests with professional growth.',
      },
      {
        title: 'Education',
        image: madisonSunset,
        description: 'Holding a degree in Computer Science from Madison, WI, I have cultivated a strong foundation in programming, web development, and critical thinking.',
      },
      {
        title: 'My Cat',
        image: xena,
        description: 'Not only is my cat, Xena, adorable - she is also an incredibly diligent code reviewer.',
      },
    ],
    
    What: [
      {
        title: 'Skills',
        image: codeText,
        description: 'Proficient in multiple programming languages, I create seamless and efficient web applications tailored to client needs.',
      },
      {
        title: 'Areas of Expertise',
        image: neuralNet,
        description: 'Specializing in machine learning, user and date-driven design, and performance optimization, I deliver visually stunning and functional projects.',
      },
    ],
    Where: [
      {
        title: 'Hometown',
        image: mkeNight,
        description: 'Based in Milwaukee, WI, I am proud to collaborate with local businesses and contribute to the growth of our vibrant community.',
      },
      {
        title: 'Workspaces',
        image: workHome,
        description: 'Adaptable to remote and in-office environments, I efficiently navigate diverse work settings to deliver outstanding results.',
      },
      {
        title: 'Travel',
        image: planeWindow,
        description: 'Through extensive travel, I have developed a global perspective that informs my approach to design and user experience.',
      },
    ],
    Why: [
      {
        title: 'Motivations',
        image: world,
        description: 'I am driven by the desire to make the web more accessible, user-friendly, and engaging for all users.',
      },
      {
        title: 'Goals',
        image: library,
        description: 'Aspiring to become a thought leader in the software development industry, I continuously expand my skills and share my knowledge with others.',
      },
      {
        title: 'Personal Mission',
        image: paintedWall,
        description: 'Committed to empowering businesses and individuals to thrive online by crafting exceptional digital experiences.',
      },
      {
        title: 'Core Beliefs',
        image: lightTrace,
        description: 'Anchored by the belief that collaboration, innovation, and user-centric design are key to successful software development.',
      },
    ],
    How: [
      {
        title: 'Creative Process',
        image: paintedHand,
        description: 'Embracing open communication and feedback, I foster positive team dynamics and consistently deliver high-quality results.',
      },
      {
        title: 'Learning Methods',
        image: collaboration,
        description: 'Continuously honing my skills through online courses, workshops, and collaboration with fellow professionals.',
      },
      {
        title: 'Problem Solving',
        image: rubix,
        description: 'Combining analytical thinking with creativity, I develop tailored solutions that address unique challenges for clients.',
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
