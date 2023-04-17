import React, { useRef, useEffect, useState } from 'react';
import TimelineItem from './TimelineItem';
import './Timeline.css';

const Timeline = ({ items }) => {
  const timelineRef = useRef(null);
  const [timelineHeight, setTimelineHeight] = useState(0);

  const parseDate = (date) => {
    if (date === "Present") {
      return new Date();
    }
    return new Date(date);
  };

  const getSortedItems = () => {
    return items.sort((a, b) => (parseDate(a.endDate) - parseDate(b.endDate)) * -1);
  };

  const calculatePositions = () => {
    const sortedItems = getSortedItems();
  
    const positions = sortedItems.map((item, index) => {  
      return index % 2 === 0 ? 'left' : 'right';
    });
  
    return positions;
  };

  const generateDistinctColors = (count) => {
    const colors = [];
    const step = 360 / count;
  
    for (let i = 0; i < count; i++) {
      const hue = i * 5 * step;
      const hslColor = `hsl(${hue}, 100%, 35%)`;
      colors.push(hslColor);
    }
  
    return colors;
  };

  const calculateOffsetIndices = (items, positions) => {
    const offsetIndices = Array(items.length).fill(0);
    for (let i = 0; i < items.length; i++) {
      for (let j = 0; j < i; j++) {
        if (positions[i] === positions[j]) {
          const iEndDate = parseDate(items[i].endDate);
          const jEndDate = parseDate(items[j].endDate);
          if (iEndDate <= jEndDate && iEndDate >= parseDate(items[j].startDate)) {
            offsetIndices[i] = Math.max(offsetIndices[i], offsetIndices[j] + 1);
          }
        }
      }
    }
    return offsetIndices;
  };
  
  

  const calculateDuration = () => {
    const minStartDate = Math.min(...items.map(item => new Date(item.startDate).getTime()));
    const maxEndDate = Math.max(...items.map(item => parseDate(item.endDate).getTime()));
    return maxEndDate - minStartDate;
  };

  const calculateIndividualDuration = (startDate, endDate) => {
    const relativeStartPos = timelineHeight * calculateRelativePosition(startDate);
    const relativeEndPos = timelineHeight * calculateRelativePosition(endDate);
    const absDiff = Math.abs(relativeEndPos - relativeStartPos);
    return absDiff;
  }

  const calculateRelativePosition = (endDate) => {
    const totalDuration = calculateDuration();
    const maxEndDate = Math.max(...items.map(item => parseDate(item.endDate).getTime()));
    const relativePosition = (maxEndDate - parseDate(endDate).getTime()) / totalDuration;
    return relativePosition;
  };

  // Todo: change so it only takes in one date
  const getDateString = (date) => {
    /* return a string in the form month-start year-start - month-end year-end */
    const dateObj = new Date(date);
    const month = dateObj.toLocaleString('default', { month: 'long' });
    const year = dateObj.getFullYear();
    return `${month} ${year}`;
  };
  

  const positions = calculatePositions();
  const sortedItems = getSortedItems();
  const offsetIndices = calculateOffsetIndices(sortedItems, positions);
  const colors = generateDistinctColors(items.length);
  const timelineBuffer = 800;

  useEffect(() => {
    const timelineElement = timelineRef.current;
    if (timelineElement) {
      const windowHeight = window.innerHeight;
      const calculatedHeight = Math.max(timelineElement.clientHeight, windowHeight * 3);
      setTimelineHeight(calculatedHeight);
    }
  }, [timelineRef]);

  return (
    <div className="timeline" ref={timelineRef} style={{ minHeight: timelineHeight + timelineBuffer }}>
      <div
        className="timeline-line"
        style={{ height: `${timelineHeight + timelineBuffer}px`}}
      ></div>
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          title={item.title}
          date={`${getDateString(item.startDate)} - ${item.endDate === "Present" ? "Present" : getDateString(item.endDate)}`}
          description={item.description}
          details={item.details}
          icon={item.icon}
          position={positions[index]}
          relativePosition={calculateRelativePosition(item.endDate)}
          totalHeight={timelineHeight}
          posIndex={index}
          duration={calculateIndividualDuration(item.startDate, item.endDate)}
          color={colors[index]}
          offsetIndex={offsetIndices[index]}
        />
      ))}
    </div>
  );
};

export default Timeline;