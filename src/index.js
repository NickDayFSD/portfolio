import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from './state/Provider';
import App from './components/app/App';

const root = createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Provider>
      <App />
    </Provider>
  </Router>
);
