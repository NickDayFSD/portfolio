import React from 'react';

import Header from '../header/Header';
import Nav from '../nav/Nav';
import PdfViewer from './PdfViewer';
import resume from './NickDay.pdf';

import styles from './App.css';

export default function App() {
  return (
    <div className={styles}>
      <Header />
      <Nav />
      <main>
        <PdfViewer pdf={resume} />
      </main>
    </div>
  );
}
