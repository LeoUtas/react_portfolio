import './projects.css';
import React, { useState, useEffect } from 'react';
import projectData0 from '../../assets/data/project_data.json';
import { FaGithub } from 'react-icons/fa';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const projectData = projectData0.sort((a, b) => b.id - a.id);
    setProjects(projectData);
  }, []);

  return (
    <section id="projects">
      <h2 className="section_title">Repository highlights</h2>

      <div className="container project_container">
        {projects.map(
          ({
            id,
            featured_image,
            project_title,
            project_summary,
            github,
            demo,
            featured_work,
          }) =>
            featured_work && (
              <article key={id} className="project_item">
                <div className="project_item-image">
                  <img
                    src={process.env.PUBLIC_URL + featured_image}
                    alt={project_title}
                  />
                </div>
                <h3>{project_title}</h3>
                <p>{project_summary}</p>
                <div className="project_btn">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  {/* Conditional rendering for the demo button */}
                  {demo && (
                    <a
                      href={demo}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </article>
            )
        )}
      </div>

      <h2 className="section_title for_more">
        For more interesting repositories, welcome to visit my {''}
        <span>
          <a href="https://github.com/LeoUtas" target="_blank" rel="noreferrer">
            Github <FaGithub />
          </a>
        </span>
      </h2>
    </section>
  );
}

export default Projects;