/* eslint-disable react/prop-types */
import React from 'react';

export default function Step({ step }) {
  console.log('This is in Step: ', step);
  return (
    <div>
      <img src={step.image} alt={step.title} />
      <div>{step.number}</div>
      <section>
        <b>{step.line}</b>
        {step.description}
        <ul>
          {step.bullets.map((bullet) => (
            <li key={bullet.count}>{bullet.content}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
