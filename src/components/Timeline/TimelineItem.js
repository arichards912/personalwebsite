import React from 'react';
import './TimelineItem.css';

const TimelineItem = ({title, date, description, details, icon, position, relativePosition, totalHeight, duration, color, posIndex, offsetIndex }) => {
  
  let offset = 11 * offsetIndex;
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
      style={{ top: `${relativePosition * totalHeight}px`, animation: `fadeIn 1.2s ${posIndex * 0.6}s ease-in forwards`}}
    >
      <div className="timeline-icon" style={{backgroundColor: color}}>
        {icon}
      </div>
      <div className="timeline-info">
        <div className="timeline-content" style={{border: `solid 4px ${color}`}}>
          <h3>{title}</h3>
          <h5>{date}</h5>
          <p>{description}</p>
          <div className="timeline-details">
            <p>{details}</p>
          </div>
        </div>
      </div>
      <div
        className={`timeline-connector ${position}`}
        style={{backgroundColor: color}}
      ></div>
      <div
        className={`timeline-duration ${position}`}
        style={{ height: `${duration}px`,  backgroundColor: color, [position === 'left' ? 'marginRight' : 'marginLeft']: `${offset}px`}}
      ></div>
      
    </div>
  );
};

export default TimelineItem;
