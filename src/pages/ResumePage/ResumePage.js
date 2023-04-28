import React from 'react';
import Timeline from '../../components/Timeline/Timeline';
import './ResumePage.css';

const ResumePage = () => {
  const resumeItems = [
    {
      title: 'Software Engineer - FlexTrade',
      startDate: '2022-06-25',
      endDate: 'Present',
      description: 'Implemented tailored OMS features and on-boarded clients, utilizing MySQL, Jenkins, Scala, and Python while developing a proprietary version-tracking system for automated documentation.',
      icon: '💻',
    },
    {
      title: 'Software Engineer - Walters Buildings',
      startDate: '2020-06-06',
      endDate: '2022-06-10',
      description: 'Developed proprietary applications for the construction industry using Java Swing, TensorFlow, MySQL, Azure, and .Net platform, ensuring software quality through systematic design, testing, and implementation.',
      icon: '💻',
    },
    {
      title: 'Software Trainer - UW-Madison',
      startDate: '2018-10-02',
      endDate: '2020-06-30',
      description: 'Educated students on programming languages like Java, Python, and Excel formulas, creating an interactive lesson web page with an embedded IDE and adapting teaching methods for diverse learning needs.',
      icon: '💻',
    },
    {
      title: 'Software Engineer Intern - Northwestern Mutual',
      startDate: '2016-06-03',
      endDate: '2018-08-28',
      description: 'Utilized PowerBI, AWS, Python, TensorFlow, and Sci-Kit libraries for data analytics and insurance trend prediction, employing Kubernetes, Docker, and Agile-Scrum methodologies for testing and cloud continuity.',
      icon: '💻',
    },
    {
      title: 'Policy Analyst Intern - WI DWD',
      startDate: '2017-10-03',
      endDate: '2018-05-03',
      description: 'Analyzed the impact of legislation and coordinated strategies, collaborating with statewide government employees and drafting policy-effect papers to keep the Secretary of State informed.',
      icon: '🏛️',
    },
    {
      title: 'B.S. CS & Poli Sci - UW Madison',
      startDate: '2017-09-03',
      endDate: '2020-05-03',
      description: 'Graduated with a B.S. in Computer Science from the University of Wisconsin-Madison, demonstrating versatility with a double major and developing critical thinking skills through interdisciplinary education.',
      icon: '🎓',
    },
    {
      title: 'Credits at Marquette University',
      startDate: '2015-09-03',
      endDate: '2015-12-31',
      description: 'Took online courses at Marquette University while in high school, strengthening programming fundamentals, enhancing understanding of data structures, and expanding technical knowledge for future growth.',
      icon: '🎓',
    },
    {
      title: 'Origin of the Universe',
      startDate: '13.8 Billion Years Ago',
      endDate: 'Never',
      description: 'The universe began with a singularity, which expanded into the universe we know today - eventually producing software developers, and also coffee.',
      icon: '💥',
    }
  ];

  return (
    <div className="resume-page">
      <a className="download-button" href="/docs/Alexander_Richards_Resume.pdf" download="RichardsResume.pdf">Download Resume</a>
      <Timeline items={resumeItems} />
    </div>
  );
};

export default ResumePage;
