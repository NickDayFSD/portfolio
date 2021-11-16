import React from 'react';
import PropTypes from 'prop-types';

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

Step.propTypes = {
  step: PropTypes.object,
};
