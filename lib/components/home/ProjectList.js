import React from 'react';
import Project from './Project';
import { projects } from '../../data/data';
import './Home.css';
function ProjectList() {
  const projectElement = projects.map(project => {
    return /*#__PURE__*/React.createElement("div", {
      className: "project",
      key: project.id
    }, /*#__PURE__*/React.createElement(Project, {
      project: project
    }));
  });
  return /*#__PURE__*/React.createElement("section", {
    className: "columnList"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "projectList"
  }, projectElement));
}
export default ProjectList;