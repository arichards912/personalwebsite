import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './PortfolioPage.css';

function PortfolioPage() {
  const projects = [
    {
      title: "Project 1",
      description: "Short description of Project 1",
      image: "https://via.placeholder.com/300",
      link: "#",
    },
    {
      title: "Project 2",
      description: "Short description of Project 2",
      image: "https://via.placeholder.com/300",
      link: "#",
    },
    {
      title: "Project 3",
      description: "Short description of Project 2",
      image: "https://via.placeholder.com/300",
      link: "#",
    },
    {
      title: "Project 4",
      description: "Short description of Project 2",
      image: "https://via.placeholder.com/300",
      link: "#",
    },
    {
      title: "Project 5",
      description: "Short description of Project 2",
      image: "https://via.placeholder.com/300",
      link: "#",
    },
  ];

  return (
    <section className="portfolio-section">
      <div className="portfolio-top">
        <h2 className="section-title">Portfolio</h2>

        <div className="carousel-wrapper">
          <Carousel autoPlay interval={4500} transitionTime={1500} infiniteLoop showThumbs={false}>
            {projects.map((project, index) => (
              <div key={index} className="carousel-slide">
                <img src={project.image} alt={project.title} />
                <div className="carousel-caption">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <a href={project.link} key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}

export default PortfolioPage;
