/* eslint-disable react/prop-types */
import React from 'react';
export default function Step({
  step
}) {
  console.log('This is in Step: ', step);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: step.image,
    alt: step.title
  }), /*#__PURE__*/React.createElement("div", null, step.number), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("b", null, step.line), step.description, /*#__PURE__*/React.createElement("ul", null, step.bullets.map(bullet => /*#__PURE__*/React.createElement("li", {
    key: bullet.count
  }, bullet.content)))));
}