import React, {useRef, useEffect} from "react";
import './TimelineItem.css';

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  console.log(rect);
  console.log(windowHeight);

  return (
    rect.top >= 0 &&
    rect.bottom <= windowHeight - 400
  );
}

function handleScroll() {
  const itemElements = document.querySelectorAll('.timeline-item');

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

const TimelineItem = ({title, date, description, details, icon, side, actualPosition, duration, color, posIndex, offsetIndex }) => {
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
    if (side === 'left') {
      offset = 0;
    }  
    else {
      offset = 4;
    }
  }

  return (
    <div className={`timeline-item ${side}`} style={{ top: `${actualPosition}px`}}>
      <div className={`timeline-icon ${side} ${posIndex === 0 ? 'animate' : ''}`} style={{backgroundColor: color}}>
        {icon}
      </div>
      <div ref={infoRef} className={`timeline-info ${side} ${posIndex === 0 ? 'animate' : ''}`}>
        <div className="timeline-content" style={{border: `solid 6px ${color}`}}>
          <h2>{title}</h2>
          <h4>{date}</h4>
          <p>{description}</p>
          <ul className="timeline-details">
            {details.map((detail, index) => (
              <li key={index} style={{transform: `translateY(${((index + 1) * 160) - 90}px)`, transition: `all 0.5s ease ${index*0.1}s`}}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
      <div ref={connectorRef} className={`timeline-connector ${side}`} style={{backgroundColor: color}}></div>
      <div className={`timeline-duration-container ${side}`} style={{ height: `${duration}px`}}>
        <div
          ref={durationRef} className={`timeline-duration ${side} ${posIndex === 0 ? 'visible' : ''}`}
          style={{ height: `${duration}px`,  backgroundColor: color, [side === 'left' ? 'marginRight' : 'marginLeft']: `${offset}px`}}
        ></div>
      </div>
      
    </div>
  );
};

export default TimelineItem;
