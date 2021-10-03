import React from 'react';
import ProjectList from './ProjectList';
// import { useProjects } from '../../state/Provider';
import styles from './Home.css';

function Home() {
  // const { projects } = useProjects();

  return (
    <div className={styles.home}>
      <div>Home Page</div>
      <ProjectList />
    </div>
  );
}

export default Home;
