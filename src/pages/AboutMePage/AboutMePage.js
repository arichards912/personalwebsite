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
import lightbulb from "../../media/lightbulb.jpg";



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
        image: computerLight,
        description: 'Holding a degree in Computer Science, I have cultivated a strong foundation in programming, web development, and critical thinking.',
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
        image: lightStrands,
        description: 'Proficient in multiple programming languages, I create seamless and efficient web applications tailored to client needs.',
      },
      {
        title: 'Areas of expertise',
        image: neuralNet,
        description: 'Specializing in machine learning, user and date-driven design, and performance optimization, I deliver visually stunning and functional projects.',
      },
    ],
    Where: [
      {
        title: 'Hometown',
        image: booksOverhead,
        description: 'Based in Milwaukee, WI, I am proud to collaborate with local businesses and contribute to the growth of our vibrant community.',
      },
      {
        title: 'Workspaces',
        image: booksOverhead,
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
        image: rocketLaunch,
        description: 'I am driven by the desire to make the web more accessible, user-friendly, and engaging for all users.',
      },
      {
        title: 'Goals',
        image: lightStrands,
        description: 'Aspiring to become a thought leader in the software development industry, I continuously expand my skills and share my knowledge with others.',
      },
      {
        title: 'Personal Mission',
        image: neuralNet,
        description: 'Committed to empowering businesses and individuals to thrive online by crafting exceptional digital experiences.',
      },
      {
        title: 'Core Beliefs',
        image: neuralNet,
        description: 'Anchored by the belief that collaboration, innovation, and user-centric design are key to successful software development.',
      },
    ],
    How: [
      {
        title: 'Creative Process',
        image: computerLight,
        description: 'Embracing open communication and feedback, I foster positive team dynamics and consistently deliver high-quality results.',
      },
      {
        title: 'Learning Methods',
        image: computerLight,
        description: 'Continuously honing my skills through online courses, workshops, and collaboration with fellow professionals.',
      },
      {
        title: 'Problem Solving',
        image: computerLight,
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
