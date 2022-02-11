import React from 'react';
import Summary from './Summary';
import Part from './instruction/Part';
import { article } from '../../data/wiki';

function WikiHow() {
  console.log('This is in WikiHow: ', article);
  return (
    <div>
      <p>breadcrumbs (so cute!)</p>
      <h1>{article.title}</h1>
      <div>
        <Summary />
        {article.parts.map((part) => (
          <Part key={part.num} part={part} />
        ))}
      </div>
    </div>
  );
}

export default WikiHow;
