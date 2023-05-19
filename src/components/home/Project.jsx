/* eslint-disable react/prop-types */
import React from 'react';
import ProjectDescription from './ProjectDescription';
import './Home.css';

const gitHub = new URL('../../assets/GitHub.png', import.meta.url);

function Project({ project }) {
  return (
    <>
      <section className="sectionHeader">
        <h3>{project.title}</h3>
        <p>
          {project.icon ? (
            <a href={project.website}>
              <img src={project.icon} className="icon" />
            </a>
          ) : (
            <></>
          )}
          <a href={project.github}>
            <img src={gitHub} className="icon" />
          </a>
        </p>
      </section>
      <h4>{project.stack}</h4>
      <div className="projectVisualContainer">
        {project.image ? (
          <a href={project.website}>
            <img src={project.image} className="projectImage" />
          </a>
        ) : (
          <></>
        )}
        <ProjectDescription
          className="projectDescription"
          description={project.description}
        />
      </div>
      <br></br>
      <div>
        <h4>Code</h4>
        {project.code ? (
          <textarea className="code">{project.code.front}</textarea>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Project;
