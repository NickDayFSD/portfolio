/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Home.css';

function Tech({ list }) {
  console.log('in Tech function: ', list);
  const categoryItems = list.items.map((item) => <li key={item}>{item}</li>);
  return (
    <>
      <h3>{list.title}</h3>
      <ul className={styles.stack}>{categoryItems}</ul>
    </>
  );
}

export default Tech;
