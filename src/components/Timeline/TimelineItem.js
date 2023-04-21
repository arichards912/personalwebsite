import React, {useRef, useEffect} from "react";
import './TimelineItem.css';

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  return (
    rect.top >= 0 &&
    rect.bottom <= windowHeight
  );
}

function handleScroll() {
  // TODO: change so that it selects all elements w/ timeline-item, then adds "animate" to children classes
  const itemElements = document.querySelectorAll('.timeline-item');
  const leftElements = document.querySelectorAll('.timeline-item.left');
  const rightElements = document.querySelectorAll('.timeline-item.right');

  for (const element of itemElements) {
    if (isInViewport(element)) {
      element.querySelector('.timeline-info').classList.add('animate');
      element.querySelector('.timeline-icon').classList.add('animate');
    }
  }


}

// Listen for scroll events and check if elements are in view
window.addEventListener('scroll', handleScroll);

// Call handleScroll on page load to check if elements are in view initially
handleScroll();

const TimelineItem = ({title, date, description, details, icon, position, relativePosition, totalHeight, duration, color, posIndex, offsetIndex }) => {
  const infoRef = useRef(null);
  const connectorRef = useRef(null);
  const durationRef = useRef(null);

  useEffect(() => {
    const info = infoRef.current;
    const connector = connectorRef.current;
    const duration = durationRef.current;

    const handleFirstAnimationEnd = () => {
      connector.classList.add('animate');
    };

    const handleSecondAnimationEnd = () => {
      duration.classList.add('animate');
    };

    info.addEventListener('animationend', handleFirstAnimationEnd);
    connector.addEventListener('animationend', handleSecondAnimationEnd);

    // Clean up event listeners on unmount
    return () => {
      info.removeEventListener('animationend', handleFirstAnimationEnd);
      connector.removeEventListener('animationend', handleSecondAnimationEnd);
    };
  }, []);


  let offset = 11 * offsetIndex;
  console.log("offsetindex: ", offsetIndex);
  if (offset === 0) {
    if (position === 'left') {
      offset = 0;
    }  
    else {
      offset = 4;
    }
  }

  return (
    <div
      className={`timeline-item ${position}`}
      style={{ top: `${relativePosition * totalHeight}px`}}
    >
      <div className={`timeline-icon ${position} ${posIndex === 0 ? 'animate' : ''}`} style={{backgroundColor: color}}>
        {icon}
      </div>
      <div ref={infoRef} className={`timeline-info ${position} ${posIndex === 0 ? 'animate' : ''}`}>
        <div className="timeline-content" style={{border: `solid 6px ${color}`}}>
          <h3>{title}</h3>
          <h5>{date}</h5>
          <p>{description}</p>
          <ul className="timeline-details">
            {details.map((detail, index) => (
              <li key={index} style={{transform: `translateY(${((index + 1) * 160) - 90}px)`, transition: `all 0.5s ease ${index*0.1}s`}}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
      <div
        ref={connectorRef}
        className={`timeline-connector ${position}`}
        style={{backgroundColor: color}}
      ></div>
      <div className={`timeline-duration-container ${position}`} style={{ height: `${duration}px`}}>
        <div
          ref={durationRef} className={`timeline-duration ${position} ${posIndex === 0 ? 'visible' : ''}`}
          style={{ height: `${duration}px`,  backgroundColor: color, [position === 'left' ? 'marginRight' : 'marginLeft']: `${offset}px`}}
        ></div>
      </div>
      
    </div>
  );
};

export default TimelineItem;
