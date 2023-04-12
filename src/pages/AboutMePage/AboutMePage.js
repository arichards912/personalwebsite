import React from "react";
import ParallaxSection from "../../components/ParallaxSection/ParallaxSection";
import computerLight from "../../media/computer-light.jpg";
import neuralNet from "../../media/neural-net.jpg";
import lightStrands from "../../media/light-strands.jpg";

const AboutMePage = () => {
  const sections = [
    {
      image: computerLight,
      title: "Section 1",
      description: "This is the description for Section 1.",
      textColor: "white",
    },
    {
      image: neuralNet,
      title: "Section 2",
      description: "This is the description for Section 2.",
      textColor: "black",
    },
    {
      image: lightStrands,
      title: "Section 3",
      description: "This is the description for Section 3.",
    }
  ];

  return (
    <div>
      {sections.map((section, index) => (
        <ParallaxSection
          key={index}
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
