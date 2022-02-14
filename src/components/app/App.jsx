import React from 'react';
import { Route, Switch } from 'react-router-dom';

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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/how" component={WikiHow} />
        </Switch>
      </main>
    </div>
  );
}
