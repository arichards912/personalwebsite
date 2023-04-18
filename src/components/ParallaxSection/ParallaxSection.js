import React, { useState, useEffect } from "react";
import "./ParallaxSection.css";

const ParallaxSection = ({index, image, title, textColor, description }) => {
  const [isVisible, setIsVisible] = useState(false);
    let bgColor = "rgba(255, 255, 255, 0.25)"
    // If textColor doesn't exist, set it to white
    if (!textColor) {
        textColor = "white";
    }
    if(textColor === "white") {
      bgColor = "rgba(0, 0, 0, 0.25)"
    }


  useEffect(() => {

    const onScroll = () => {
      const rect = document.getElementById(title).getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    // Set the first section to be visible
    if (index === 0) {
      setIsVisible(true);
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [index, title]);

  return (
    <div className="parallax-section" style={{ backgroundImage: `url(${image})` }}>
      <div className="parallax-content">
        <h2 className={`parallax-title ${"item-" + index} ${isVisible ? "visible-aboutMe" : ""}`} id={title} style={{color: `${textColor}`}}>
            {title}
        </h2>
        <p className={`parallax-description ${"item-" + index} ${isVisible ? "visible-aboutMe" : ""}`} style={{color: `${textColor}`, backgroundColor: `${bgColor}`}}>
            {description}
        </p>
      </div>
    </div>
  );
};

export default ParallaxSection;
