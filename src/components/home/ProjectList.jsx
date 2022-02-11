import React from 'react';
import Project from './Project';
import { projects } from '../../data/data';
import './Home.css';

function ProjectList() {
  const projectElement = projects.map((project) => {
    return (
      <div className="project" key={project.id}>
        <Project project={project} />
      </div>
    );
  });

  return (
    <section className="columnList">
      <ul className="projectList">{projectElement}</ul>
    </section>
  );
}

export default ProjectList;
