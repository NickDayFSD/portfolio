import React from 'react';
import PropTypes from 'prop-types';
import styles from './wikihow.css';

export default function Summary({ article }) {
  console.log('this is the article in Summary: ', article);
  return (
    <div className={styles.summary}>
      <h2>{article.title}</h2>
      <h4>
        {article.author}
        {article.update}
      </h4>
      <p>{article.download}</p>
      <section>
        <p>{article.description}</p>
        <p>table of contents</p>
      </section>
    </div>
  );
}

Summary.propTypes = {
  article: PropTypes.object,
};
