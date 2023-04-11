import React, { useRef, useEffect, useState } from 'react';
import TimelineItem from './TimelineItem';
import './Timeline.css';

const Timeline = ({ items }) => {
  const timelineRef = useRef(null);
  const [timelineHeight, setTimelineHeight] = useState(0);

  const calculatePositions = () => {
    const sortedItems = items.sort((a, b) => (new Date(a.endDate) - new Date(b.endDate)) * -1);
  
    const positions = sortedItems.map((item, index) => {  
      return index % 2 === 0 ? 'left' : 'right';
    });
  
    return positions;
  };
  

  const calculateDuration = () => {
    const minStartDate = Math.min(...items.map(item => new Date(item.startDate).getTime()));
    const maxEndDate = Math.max(...items.map(item => new Date(item.endDate).getTime()));
    return maxEndDate - minStartDate;
  };

  const calculateRelativePosition = (endDate) => {
    const totalDuration = calculateDuration();
    const maxEndDate = Math.max(...items.map(item => new Date(item.endDate).getTime()));
    const relativePosition = (maxEndDate - new Date(endDate).getTime()) / totalDuration;
    return relativePosition;
  };

  const getDateString = (startDate, endDate) => {
    /* return a string in the form month-start year-start - month-end year-end */
    const start = new Date(startDate);
    const end = new Date(endDate);
    const startMonth = start.toLocaleString('default', { month: 'long' });
    const endMonth = end.toLocaleString('default', { month: 'long' });
    const startYear = start.getFullYear();
    const endYear = end.getFullYear();
    return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
  };
  

  const positions = calculatePositions();

  useEffect(() => {
    const timelineElement = timelineRef.current;
    if (timelineElement) {
      const windowHeight = window.innerHeight;
      const calculatedHeight = Math.max(timelineElement.clientHeight, windowHeight * 2);
      setTimelineHeight(calculatedHeight);
    }
  }, [timelineRef]);

  return (
    <div className="timeline" ref={timelineRef} style={{ minHeight: timelineHeight }}>
      <div
        className="timeline-line"
        style={{ height: `${timelineHeight}px` }}
      ></div>
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          title={item.title}
          date={`${getDateString(item.startDate, item.endDate)}`}
          description={item.description}
          icon={item.icon}
          position={positions[index]}
          relativePosition={calculateRelativePosition(item.endDate)}
          totalHeight={timelineHeight}
        />
      ))}
    </div>
  );
};

export default Timeline;
