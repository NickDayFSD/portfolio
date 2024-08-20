import React from 'react';
import Tech from './Tech';
import { techStack } from '../../data/data';
import './Home.css';
function Stack() {
  const stackElement = techStack.map(stack => {
    return /*#__PURE__*/React.createElement("div", {
      key: "title"
    }, /*#__PURE__*/React.createElement(Tech, {
      list: stack
    }));
  });
  return /*#__PURE__*/React.createElement("section", {
    className: "stackList"
  }, stackElement);
}
export default Stack;