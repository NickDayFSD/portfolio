/* eslint-disable react/prop-types */
import React from 'react';
import Step from './Step';
export default function Part({
  part
}) {
  console.log('This is in Part: ', part);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("div", null, "Part", /*#__PURE__*/React.createElement("span", null, part.num)), /*#__PURE__*/React.createElement("span", null, part.headline)), part.steps.map(step => /*#__PURE__*/React.createElement(Step, {
    key: step.num,
    step: step
  })));
}