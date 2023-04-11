import React from 'react';
import './TimelineItem.css';

const TimelineItem = ({ title, date, description, icon, position, relativePosition, totalHeight }) => {
  

  return (
    <div
      className={`timeline-item ${position}`}
      style={{ top: `${relativePosition * totalHeight}px` }}
    >
      <div className="timeline-icon">
        {icon}
      </div>
      <div className="timeline-content">
        <h3>{title}</h3>
        <h5>{date}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
