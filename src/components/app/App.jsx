import React from 'react';

import Header from './Header';
import PdfViewer from './PdfViewer';
import resume from './NickDay.pdf';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <PdfViewer pdf={ resume } />
      </main>
    </div>
  );
}
