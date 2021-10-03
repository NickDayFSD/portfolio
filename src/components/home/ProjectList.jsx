import React from 'react';
import Project from './Project';
import { projects } from '../../data/data';
import styles from './Home.css';

function ProjectList() {
  const projectElement = projects.map((project) => {
    return (
      <li key={project.id}>
        <Project project={project} />
      </li>
    );
  });
  return (
    <section>
      <h4>Projects</h4>
      <ul className={styles.projectList}>{projectElement}</ul>
    </section>
  );
}

export default ProjectList;
