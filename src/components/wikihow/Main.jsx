import React from 'react';
import Summary from './Summary';
import Part from './instruction/Part';
import { article } from '../../data/wiki';
import styles from './wikihow.css';

function WikiHow() {
  return (
    <div className={styles.main}>
      <section className={styles.articleIntro}>
        <p>breadcrumbs (so cute!)</p>
        <Summary article={article} />
      </section>
      {article.parts.map((part) => (
        <Part key={part.num} part={part} />
      ))}
    </div>
  );
}

export default WikiHow;
