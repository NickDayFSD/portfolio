/* eslint-disable react/prop-types */
import React from 'react';
import ProjectDescription from './ProjectDescription';
import './Home.css';

const gitHub = new URL('../../assets/GitHub.png', import.meta.url);

function Project({ project }) {
  return (
    <>
      <div className="projectVisualContainer">
        {project.image ? (
          <a href={project.website}>
            <img src={project.image} className="projectImage" />
          </a>
        ) : (
          <></>
        )}
      <section className="sectionHeader">
        <h3>{project.title}</h3>
      </section>
        <ProjectDescription
          className="projectDescription"
          description={project.description}
        />
      </div>

      <button>MORE</button>
    </>
  );
}

export default Project;
