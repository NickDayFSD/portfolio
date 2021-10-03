/* eslint-disable react/prop-types */
import React from 'react';

function Project({ project }) {
  console.log('passed into project: ', project);
  console.log('project title dot notated: ', project.title);
  return (
    <>
      <section>
        <span>{project.title}</span>
        <span>{project.website}</span>
        <span>{project.github}</span>
      </section>
      <p>{project.stack}</p>
      <p>{project.description}</p>
    </>
  );
}

export default Project;
