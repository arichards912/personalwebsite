import React from 'react';
import { useSpring, animated } from 'react-spring';
import './CategoryButton.css';

function CategoryButton({ category, label, onClick, isActive }) {
  const handleClick = () => {
    onClick(category);
  };

  const [springProps, setSpringProps] = useSpring(() => ({
    transform: 'scale(1)',
    config: { mass: 1, tension: 170, friction: 26 },
  }));

  const handleMouseEnter = () => {
    setSpringProps({ transform: 'scale(1.1)' });
  };

  const handleMouseLeave = () => {
    setSpringProps({ transform: 'scale(1)' });
  };

  return (
    <animated.button
      className={`category-button ${category} ${isActive ? 'active' : ''}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={springProps}
    >
      {label}
    </animated.button>
  );
}

export default CategoryButton;