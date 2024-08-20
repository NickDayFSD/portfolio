/* eslint-disable react/prop-types */
import React from 'react';
import ProjectDescription from './ProjectDescription';
import './Home.css';
const gitHub = new URL('../../assets/GitHub.png', import.meta.url);
function Project({
  project
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "sectionHeader"
  }, /*#__PURE__*/React.createElement("h3", null, project.title), /*#__PURE__*/React.createElement("p", null, project.icon ? /*#__PURE__*/React.createElement("a", {
    href: project.website
  }, /*#__PURE__*/React.createElement("img", {
    src: project.icon,
    className: "icon"
  })) : /*#__PURE__*/React.createElement(React.Fragment, null), /*#__PURE__*/React.createElement("a", {
    href: project.github
  }, /*#__PURE__*/React.createElement("img", {
    src: gitHub,
    className: "icon"
  })))), /*#__PURE__*/React.createElement("h4", null, project.stack), /*#__PURE__*/React.createElement("div", {
    className: "projectVisualContainer"
  }, project.image ? /*#__PURE__*/React.createElement("a", {
    href: project.website
  }, /*#__PURE__*/React.createElement("img", {
    src: project.image,
    className: "projectImage"
  })) : /*#__PURE__*/React.createElement(React.Fragment, null), /*#__PURE__*/React.createElement(ProjectDescription, {
    className: "projectDescription",
    description: project.description
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Code"), project.code ? /*#__PURE__*/React.createElement("textarea", {
    className: "code"
  }, project.code.front) : /*#__PURE__*/React.createElement(React.Fragment, null)));
}
export default Project;