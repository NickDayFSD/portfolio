import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../header/Header';
import Nav from '../nav/Nav';

// import routes here

import PdfViewer from './PdfViewer';
import resume from './NickDay.pdf';

import styles from './App.css';

export default function App() {
  return (
    <div className={styles}>
      <Header />
      <Nav />
      <main>
        <Switch>
          <PdfViewer pdf={resume} />
        </Switch>
      </main>
    </div>
  );
}
