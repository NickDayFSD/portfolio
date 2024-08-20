import React from 'react';
import { Route, Routes } from 'react-router-dom';

// import routes here
import Header from '../header/Header';
import Home from '../home/Home';
import WikiHow from '../wikihow/Main';
import './App.css';
export default function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(Home, null)
  }), /*#__PURE__*/React.createElement(Route, {
    exact: true,
    path: "/how",
    element: /*#__PURE__*/React.createElement(WikiHow, null)
  }))));
}