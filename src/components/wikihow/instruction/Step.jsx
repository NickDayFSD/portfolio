import React from 'react';
import PropTypes from 'prop-types';
import styles from '../wikihow.css';

export default function Step({ step }) {
  return (
    <div className={styles.step}>
      <img src={step.image} alt={step.alt} />
      <section>
        <div>
          <div className={styles.stepNum}>{step.num}</div>
          <span className={styles.bold}>{step.line}</span>
          <span>{step.description}</span>
          <ul className={styles.stepBullets}>
            {step.bullets.map((bullet) => (
              <li key={bullet.count}>{bullet.content}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

Step.propTypes = {
  step: PropTypes.object,
};
