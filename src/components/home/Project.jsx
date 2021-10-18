/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Home.css';

function Project({ project }) {
  console.log('passed into project: ', project);
  console.log('project title dot notated: ', project.title);
  return (
    <>
      <section className={styles.sectionHeader}>
        <h3>{project.title}</h3>
        <p>
          <a href={project.website}>
            <img src={project.icon} className={styles.icon} />
          </a>
          <a href={project.github}>
            <img src="./GitHub.png" className={styles.icon} />
          </a>
        </p>
      </section>
      <h4>{project.stack}</h4>
      <p>{project.description}</p>
      <br></br>
      <div>
        <h4>Code</h4>
        {project.code ? (
          <textarea className={styles.code}>{project.code.front}</textarea>
        ) : (
          <p className={styles.inConstruction}>Code samples to come!</p>
        )}
      </div>
    </>
  );
}

export default Project;