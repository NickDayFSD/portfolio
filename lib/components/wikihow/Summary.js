import React from 'react';
export default function Summary(article) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, article.title), /*#__PURE__*/React.createElement("h4", null, article.author, article.update), /*#__PURE__*/React.createElement("p", null, article.download), /*#__PURE__*/React.createElement("p", null, article.description), /*#__PURE__*/React.createElement("p", null, "table of contents"));
}