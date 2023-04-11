import React from 'react';
import Timeline from '../../components/Timeline/Timeline';
import './ResumePage.css';

const ResumePage = () => {
  const resumeItems = [
    {
      title: 'Software Engineer - FlexTrade',
      startDate: '2022-06-25',
      endDate: 'Present',
      description: 'Developing web applications at XYZ Company.',
      details: 'Bottom Text',
      icon: '💻',
    },
    {
      title: 'Software Engineer - Walters Buildings',
      startDate: '2020-06-06',
      endDate: '2022-06-10',
      description: 'Developing proprietary software for the construction industry.',
      details: 'Bottom Text',
      icon: '💻',
    },
    {
      title: 'Software Trainer - UW-Madison',
      startDate: '2018-10-02',
      endDate: '2020-06-30',
      description: 'Educating students on programming languages, concepts, and software.',
      details: 'Bottom Text',
      icon: '💻',
    },
    {
      title: 'Software Engineer Intern - Northwestern Mutual',
      startDate: '2016-06-03',
      endDate: '2018-08-28',
      description: 'Built demo products and navigated AGILE development.',
      details: 'Bottom Text',
      icon: '💻',
    },
    {
      title: 'Policy Analyst Intern - Wisconsin Department of Workforce Development',
      startDate: '2017-10-03',
      endDate: '2018-05-03',
      description: 'Analyzed data and wrote reports for the Wisconsin Department of Workforce Development.',
      details: 'Bottom Text',
      icon: '🏛️',
    },
    {
      title: 'B.S. in Computer Science - University of Wisconsin-Madison',
      startDate: '2017-09-03',
      endDate: '2020-05-03',
      description: 'Graduated with a B.S. in Computer Science from the University of Wisconsin-Madison.',
      details: 'Bottom Text',
      icon: '🎓',
    },
    {
      title: 'Credits at Marquette University',
      startDate: '2015-09-03',
      endDate: '2015-12-31',
      description: 'Took online courses at Marquette University while in high school.',
      details: 'Data Structures and Algorithms.',
      icon: '🎓',
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
