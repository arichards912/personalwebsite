import React from 'react';
import Timeline from '../../components/Timeline/Timeline';
import './ResumePage.css';

const ResumePage = () => {
  const resumeItems = [
    {
      title: 'First Example Position',
      startDate: '2022-01-01',
      endDate: '2023-01-01',
      description: 'Developing web applications at XYZ Company.',
      icon: '💻',
    },
    {
      title: 'Second Example Position',
      startDate: '2010-01-01',
      endDate: '2015-01-01',
      description: 'Developing web applications at XYZ Company.',
      icon: '💼',
    },
    {
      title: 'Third Example Position',
      startDate: '2020-01-01',
      endDate: '2022-01-01',
      description: 'Developing web applications at XYZ Company.',
      icon: '💿',
    },
    {
      title: 'Fourth Example Position',
      startDate: '2018-01-01',
      endDate: '2020-01-01',
      description: 'Developing web applications at XYZ Company.',
      icon: '💿',
    },
    {
      title: 'Fifth Example Position',
      startDate: '2005-01-01',
      endDate: '2011-01-01',
      description: 'Developing web applications at XYZ Company.',
      icon: '💼',
    },
    // TODO: Add more (actual) items here...
  ];

  return (
    <div className="resume-page">
      <h2 className="section-title">Resume Timeline</h2>
      <a className="download-button" href="/docs/Alexander_Richards_Resume.pdf" download="RichardsResume.pdf">Download Resume</a>

      <Timeline items={resumeItems} />
    </div>
  );
};

export default ResumePage;
