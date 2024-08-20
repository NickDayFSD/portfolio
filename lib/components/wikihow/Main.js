import React from 'react';
import Summary from './Summary';
import Part from './instruction/Part';
import { article } from '../../data/wiki';
function WikiHow() {
  console.log('This is in WikiHow: ', article);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "breadcrumbs (so cute!)"), /*#__PURE__*/React.createElement("h1", null, article.title), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Summary, null), article.parts.map(part => /*#__PURE__*/React.createElement(Part, {
    key: part.num,
    part: part
  }))));
}
export default WikiHow;