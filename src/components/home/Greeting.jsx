import React from 'react';
import styles from './Home.css';

function Greeting() {
  return (
    <section className={styles.greeting}>
      <h3>Hello and welcome to my Portfolio!</h3>
      <p>
        I am on a journey to make tools that improve quality of life for people
        like you or me. Sometimes that means raising awareness of global warming
        with Local Impact, helping find used furniture with Market Scrape, or
        blowing off some steam with Tune Match.
      </p>
      <p>Below you will find my recent projects and more info!</p>
    </section>
  );
}

export default Greeting;
