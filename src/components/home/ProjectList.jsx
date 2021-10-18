import React from 'react';
import Project from './Project';
import { projects } from '../../data/data';
import styles from './Home.css';

function ProjectList() {
  const projectElement = projects.map((project) => {
    return (
      <div className={styles.project} key={project.id}>
        <Project project={project} />
      </div>
    );
  });

  return (
    <section className={styles.columnList}>
      <ul className={styles.projectList}>{projectElement}</ul>
    </section>
  );
}

export default ProjectList;