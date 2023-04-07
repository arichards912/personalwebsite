import React, { useState } from 'react';
import './AboutMePage.css';
import ProfileHead from './ProfileHead';
import CategoryButton from './CategoryButton';

function AboutMePage() {
  const [activeCategory, setActiveCategory] = useState('workExperience');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const content = {
    workExperience: 'Work experience content goes here.',
    education: 'Education content goes here.',
    skills: 'Skills content goes here.',
    interests: 'Interests content goes here.',
  };

  return (
    <section className="about-me-section">
      <h2 className="section-title">About Me</h2>
      
      <div className="profile-container">
        <ProfileHead />
        <CategoryButton
          category="workExperience"
          label="Work Experience"
          onClick={handleCategoryClick}
          isActive={activeCategory === 'workExperience'}
        />
        <CategoryButton
          category="education"
          label="Education"
          onClick={handleCategoryClick}
          isActive={activeCategory === 'education'}
        />
        <CategoryButton
          category="skills"
          label="Skills"
          onClick={handleCategoryClick}
          isActive={activeCategory === 'skills'}
        />
        <CategoryButton
          category="interests"
          label="Interests"
          onClick={handleCategoryClick}
          isActive={activeCategory === 'interests'}
        />
      </div>

      <div className="content-container">
        <p className="content-text">{content[activeCategory]}</p>
      </div>
    </section>
  );
}

export default AboutMePage;
