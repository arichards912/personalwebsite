import React from "react";
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
  const leftElements = document.querySelectorAll('.timeline-item.left');
  const rightElements = document.querySelectorAll('.timeline-item.right');


  for (const element of leftElements) {
    if (isInViewport(element)) {
      element.classList.add('leftSlideIn');
      // Make child of element with classname timeline-connector, visible
      element.querySelector('.timeline-duration').classList.add('visible');
    }
  }
  for (const element of rightElements) {
    if (isInViewport(element)) {
      element.classList.add('rightSlideIn');
      element.querySelector('.timeline-duration').classList.add('visible');
    }
  }
}

// Listen for scroll events and check if elements are in view
window.addEventListener('scroll', handleScroll);

// Call handleScroll on page load to check if elements are in view initially
handleScroll();

const TimelineItem = ({title, date, description, details, icon, position, relativePosition, totalHeight, duration, color, posIndex, offsetIndex }) => {

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
      className={`timeline-item ${position} ${posIndex === 0 ? 'leftSlideIn' : ''}`}
      style={{ top: `${relativePosition * totalHeight}px`}}
    >
      <div className={`timeline-icon ${position}`} style={{backgroundColor: color}}>
        {icon}
      </div>
      <div className={`timeline-info ${position}`}>
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
        className={`timeline-connector ${position}`}
        style={{backgroundColor: color}}
      ></div>
      <div className={`timeline-duration-container ${position}`} style={{ height: `${duration}px`}}>
        <div
          className={`timeline-duration ${position} ${posIndex === 0 ? 'visible' : ''}`}
          style={{ height: `${duration}px`,  backgroundColor: color, [position === 'left' ? 'marginRight' : 'marginLeft']: `${offset}px`}}
        ></div>
      </div>
      
    </div>
  );
};

export default TimelineItem;
