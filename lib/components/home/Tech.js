/* eslint-disable react/prop-types */
import React from 'react';
import './Home.css';
function Tech({
  list
}) {
  const categoryItems = list.items.map(item => /*#__PURE__*/React.createElement("li", {
    key: item
  }, item));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", null, list.title), /*#__PURE__*/React.createElement("ul", {
    className: "stack"
  }, categoryItems));
}
export default Tech;