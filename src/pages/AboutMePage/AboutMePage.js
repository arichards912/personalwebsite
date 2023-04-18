import React from "react";
import ParallaxSection from "../../components/ParallaxSection/ParallaxSection";

import rocketLaunch from "../../media/rocket-launch.jpg";
import planeWindow from "../../media/plane-window.jpg";
import booksOverhead from "../../media/books-overhead.jpg";
import xena from "../../media/xena.jpg";
import computerLight from "../../media/computer-light.jpg";
import neuralNet from "../../media/neural-net.jpg";
import lightStrands from "../../media/light-strands.jpg";

const AboutMePage = () => {
  const sections = [
    {
      image: rocketLaunch,
      title: "Dreams and Aspirations",
      description: "I envision a future where I can use my skills to contribute to machine learning and software engineering. Working with a first-class team, I wish to create and develop new technologies that can help people in their everyday lives.",
      textColor: "black",
    },
    {
      image: planeWindow,
      title: "Travel and Exploration",
      description: "I have a passion for exploring new cultures and have traveled around the world, always eager to learn and grow.",
      textColor: "black",
    },
    {
      image: booksOverhead,
      title: "Personal Values and Philosophy",
      description: "I believe in the power of collaboration, lifelong learning, and striving for excellence in all aspects of life.",
      textColor: "white",
    },
    {
      image: xena,
      title: "Pet Corner",
      description: "My adorable cat, Xena, is not only my best friend, but also the most enthusiastic code-reviewer.",
      textColor: "black",
    },
  ];

  return (
    <div>
      {sections.map((section, index) => (
        <ParallaxSection
          key={index}
          index={index}
          image={section.image}
          title={section.title}
          textColor={section.textColor}
          description={section.description}
        />
      ))}
    </div>
  );
};

export default AboutMePage;
