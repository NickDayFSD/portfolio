/* eslint-disable react/prop-types */
import React from 'react';

export default function ProjectDescription({ description }) {
  const descriptionElement = description.map((scrip) => {
    return (
      <div key={scrip.length}>
        <br></br>
        <p>{scrip}</p>
      </div>
    );
  });

  return <>{descriptionElement}</>;
}
