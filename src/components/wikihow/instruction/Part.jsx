import React from 'react';
import Step from './Step';
import PropTypes from 'prop-types';
import styles from '../wikihow.css';

export default function Part({ part }) {
  return (
    <div>
      <h3 className={styles.partHeader}>
        <div className={styles.partNumber}>
          Part
          <span>{part.num}</span>
        </div>
        <span className={styles.partTitle}>{part.headline}</span>
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
