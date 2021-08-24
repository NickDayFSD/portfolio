import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.css';

const Nav = () => {
  return (
    <section className={styles}>
      <Link to={'/projects'}>Project Highlights</Link>
      <Link to={'/stack'}>Tech Stack</Link>
      <Link to={'/about'}>About Me</Link>
      <Link to={'/contact'}>Contact Me</Link>
    </section>
  );
};

export default Nav;
