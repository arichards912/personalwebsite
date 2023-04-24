import React, { useState, useEffect, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './ContentPane.css';

const ContentPane = ({ id, title, items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % (items.length));
    }, 7500);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="content-pane" id={id}>
      <TransitionGroup component={Fragment}>
        <CSSTransition
          key={activeIndex}
          classNames="fade"
          timeout={{ enter: 1500, exit: 1500 }}
        >
          <div className="content-item">
            <div className="content-image-section">
              <h2>{title}</h2>
              <img src={items[activeIndex].image} alt={items[activeIndex].title} />
            </div>
            <p className={`description ${activeIndex % 2 === 0 ? 'left-to-right' : ''}`}>
              {items[activeIndex].description}
            </p>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default ContentPane;
