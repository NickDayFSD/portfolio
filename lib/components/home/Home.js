import React from 'react';
import Greeting from './Greeting';
import ProjectList from './ProjectList';
import TechStack from './TechList';
import './Home.css';
function Home() {
  return /*#__PURE__*/React.createElement("div", {
    className: "home"
  }, /*#__PURE__*/React.createElement(Greeting, null), /*#__PURE__*/React.createElement("h2", null, "Projects"), /*#__PURE__*/React.createElement(ProjectList, null), /*#__PURE__*/React.createElement("h2", null, "Tech stack"), /*#__PURE__*/React.createElement(TechStack, null), /*#__PURE__*/React.createElement("h2", null, "Testimonials to come"), /*#__PURE__*/React.createElement("h2", null, "Methodologies to come"), /*#__PURE__*/React.createElement("span", null));
}
export default Home;