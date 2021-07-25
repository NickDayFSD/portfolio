import React, { Component } from 'react';

import Header from './Header';
import PdfViewer from './PdfViewer';
import resume from './NickDay.pdf';

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Nick Day</h1>
        <PdfViewer pdf={ resume } />
      </main>
    </div>
  );
}
