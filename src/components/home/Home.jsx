import React from 'react';
import Greeting from './Greeting';
import ProjectList from './ProjectList';
import TechStack from './TechList';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Greeting />
      <h2>Projects</h2>
      <ProjectList />
      <h2>Tech stack</h2>
      <TechStack />
      <h2>Testimonials to come</h2>
      <h2>Methodologies to come</h2>
      <span></span>
    </div>
  );
}

export default Home;
