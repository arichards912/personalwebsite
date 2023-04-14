import React, { useState, useEffect } from 'react';
import './TypingAnimation.css';

const TypingAnimation = ({ text }) => {
    const [displayedText, setDisplayedText] = useState("");
    
    
    useEffect(() => {
      let index = 0;
      let firstGo = true;
      const randomSpeed = Math.floor(Math.random() * 40) + 90;
      const timer = setInterval(() => {
        console.log("index: ", index);
        console.log("text[index]: ", text[index]);
        console.log("First go: ", firstGo)
        if (index < text.length - 1) {
            setDisplayedText((prevText) => prevText + text[index]);
            if(index !== 1 || firstGo === false) {
                index++;
            }
            else {
                firstGo = false;
            }
            
        }
        else {
            clearInterval(timer);
        }
        
      }, randomSpeed); // Customize typing speed (ms)
  
      return () => clearInterval(timer);
    }, [text]);
  
    return (
      <div className="typing-container faded-round-corner">
        <h1>{displayedText}<span id="cursor"> █ </span></h1>
      </div>
    );
  };

export default TypingAnimation;
  