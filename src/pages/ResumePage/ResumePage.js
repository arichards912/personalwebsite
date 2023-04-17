import React from 'react';
import Timeline from '../../components/Timeline/Timeline';
import './ResumePage.css';

const ResumePage = () => {
  const resumeItems = [
    {
      title: 'Software Engineer - FlexTrade',
      startDate: '2022-06-25',
      endDate: 'Present',
      description: 'Delivered OMS features and resolved time-sensitive issues for clients through effective communication and technical expertise.',
      details: ['Collaborated with Hedge Fund Heads and Project Managers to implement OMS features tailored to client needs', 'Onboarded clients and provided support with MySQL, Jenkins, Scala, and Python', 'Developed a proprietary version-tracking system for automated documentation, streamlining internal processes', 'Conducted DR testing to ensure system reliability and stability in critical situations'],
      icon: '💻',
    },
    {
      title: 'Software Engineer - Walters Buildings',
      startDate: '2020-06-06',
      endDate: '2022-06-10',
      description: 'Developing proprietary applications, website, and databases for the construction industry.',
      details: ['Created and implemented a Java Swing application using TensorFlow linear regression for accurate company estimates', 'Utilized MySQL, Azure, and .Net platform in a two-person development team for modernizing industry architecture', 'Ensured software quality through systematic design, testing, and implementation'],
      icon: '💻',
    },
    {
      title: 'Software Trainer - UW-Madison',
      startDate: '2018-10-02',
      endDate: '2020-06-30',
      description: 'Educating students on programming languages, concepts, and software.',
      details: ['Instructed groups of 20+ students in Java, Python, and Excel Formulas', 'Developed a lesson web page with an embedded IDE, reducing class and prep time by 50%', 'Adapted teaching methods to accommodate diverse learning needs and styles'],
      icon: '💻',
    },
    {
      title: 'Software Engineer Intern - Northwestern Mutual',
      startDate: '2016-06-03',
      endDate: '2018-08-28',
      description: 'Utilized data analytics tools to support insurance trend prediction and visualization.',
      details: ['Managed data warehouses using PowerBI and AWS for powerful visualizations with linked corporate data', 'Led development research for insurance trend prediction using Python, TensorFlow, and Sci-Kit libraries', 'Employed Kubernetes, Docker, and AWS for testing and cloud continuity of architecture projects in an Agile-Scrum environment'],
      icon: '💻',
    },
    {
      title: 'Policy Analyst Intern - Wisconsin Department of Workforce Development',
      startDate: '2017-10-03',
      endDate: '2018-05-03',
      description: 'Analyzed the impact of legislation and coordinated strategies for execution.',
      details: ['Collaborated with statewide government employees for effective legislative execution', 'Drafted policy-effect papers to keep the Secretary of State informed on regulatory execution', 'Demonstrated strong communication skills and attention to detail in policy analysis'],
      icon: '🏛️',
    },
    {
      title: 'B.S. in Computer Science & Political Science - University of Wisconsin-Madison',
      startDate: '2017-09-03',
      endDate: '2020-05-03',
      description: 'Graduated with a B.S. in Computer Science from the University of Wisconsin-Madison.',
      details: ['Acquired knowledge in data structures and software engineering', 'Completed a double major, demonstrating versatility and strong work ethic', 'Developed critical thinking and problem-solving skills through interdisciplinary education'],
      icon: '🎓',
    },
    {
      title: 'Credits at Marquette University',
      startDate: '2015-09-03',
      endDate: '2015-12-31',
      description: 'Took online courses at Marquette University while in high school.',
      details: ['Strengthened programming fundamentals for software development', 'Enhanced understanding of data structures for efficient problem-solving', 'Expanded technical knowledge to support future career growth'],
      icon: '🎓',
    },
    // TODO: Add more (actual) items here...
  ];

  return (
    <div className="resume-page">
      <a className="download-button" href="/docs/Alexander_Richards_Resume.pdf" download="RichardsResume.pdf">Download Resume</a>

      <Timeline items={resumeItems} />
    </div>
  );
};

export default ResumePage;
