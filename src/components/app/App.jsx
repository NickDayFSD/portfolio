import React from 'react';
import { Route, Routes } from 'react-router-dom';

// import routes here
import Header from '../header/Header';
import Home from '../home/Home';

import WikiHow from '../wikihow/Main';
import './App.css';

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route exact path="/how" element={<WikiHow/>} />
        </Routes>
      </main>
    </div>
  );
}
