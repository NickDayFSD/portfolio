import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import routes here
import Header from '../header/Header';
import Home from '../home/Home';
import Resume from '../pdf/ResumeView';
import WikiHow from '../wikihow/Main';
import styles from './App.css';

export default function App() {
  return (
    <div className={styles}>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/how" component={WikiHow} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </main>
    </div>
  );
}
