import React from 'react';
import Step from './Step';
import PropTypes from 'prop-types';

export default function Part({ part }) {
  console.log('This is in Part: ', part);
  return (
    <div>
      <h3>
        <div>
          Part
          <span>{part.num}</span>
        </div>
        <span>{part.headline}</span>
      </h3>
      {part.steps.map((step) => (
        <Step key={step.num} step={step} />
      ))}
    </div>
  );
}

Part.propTypes = {
  part: PropTypes.object,
};
