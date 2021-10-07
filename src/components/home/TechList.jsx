import React from 'react';
import Tech from './Tech';
import { techStack } from '../../data/data';
import styles from './Home.css';

function Stack() {
  const stackElement = techStack.map((stack) => {
    return (
      <div key={stack.title}>
        <Tech list={stack} />
      </div>
    );
  });

  return <section className={styles.stackList}>{stackElement}</section>;
}

export default Stack;
