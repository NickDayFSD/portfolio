import React from 'react';
import Tech from './Tech';
import { techStack } from '../../data/data';
import './Home.css';

function Stack() {
  const stackElement = techStack.map((stack) => {
    return (
      <div key="title">
        <Tech list={stack} />
      </div>
    );
  });

  return <section className="stack">{stackElement}</section>;
}

export default Stack;
