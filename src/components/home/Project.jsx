/* eslint-disable react/prop-types */
import React from 'react';
import './Home.css';

const gitHub = new URL('../../assets/GitHub.png', import.meta.url);

function Project({ project }) {
  console.log('passed into project: ', project);
  console.log('project title dot notated: ', project.title);
  return (
    <>
      <section className="sectionHeader">
        <h3>{project.title}</h3>
        <p>
          <a href={project.website}>
            <img src={project.icon} className="icon" />
          </a>
          <a href={project.github}>
            <img src={gitHub} className="icon" />
          </a>
        </p>
      </section>
      <h4>{project.stack}</h4>
      <p>{project.description}</p>
      <br></br>
      <div>
        <h4>Code</h4>
        {project.code ? (
          <textarea className="code">{project.code.front}</textarea>
        ) : (
          <p className="inConstruction">Code samples to come!</p>
        )}
      </div>
    </>
  );
}

export default Project;
