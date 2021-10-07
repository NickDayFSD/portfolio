import React from 'react';
import Greeting from './Greeting';
import ProjectList from './ProjectList';
import TechStack from './TechList';
import styles from './Home.css';

function Home() {
  return (
    <div className={styles.home}>
      <Greeting />
      <h2>Projects</h2>
      <ProjectList />
      <h2>Tech stack</h2>
      <TechStack />
    </div>
  );
}

export default Home;
