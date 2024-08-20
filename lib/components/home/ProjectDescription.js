/* eslint-disable react/prop-types */
import React from 'react';
export default function ProjectDescription({
  description
}) {
  const descriptionElement = description.map(scrip => {
    return /*#__PURE__*/React.createElement("div", {
      key: scrip.length
    }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, scrip));
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, descriptionElement);
}