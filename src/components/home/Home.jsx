import React from 'react';
import Greeting from './Greeting';
import ProjectList from './ProjectList';
import TechStack from './TechList';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Greeting />
      <h2>Front End and Full Stack</h2>
      <TechStack />
      <h2>Projects</h2>
      <ProjectList />
    </div>
  );
}

export default Home;
