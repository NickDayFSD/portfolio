import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './Nav.css';

const Nav = () => {
  return (
    <section className={styles}>
      <div>Button</div>
      {/* <Link to={'/projects'}>Project Highlights</Link>
      <Link to={'/stack'}>Tech Stack</Link>
      <Link to={'/about'}>About Me</Link>
      <Link to={'/contact'}>Contact</Link> */}
    </section>
  );
};

export default Nav;
