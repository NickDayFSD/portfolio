import React from 'react';

export default function Summary(article) {
  return (
    <div>
      <h2>{article.title}</h2>
      <h4>
        {article.author}
        {article.update}
      </h4>
      <p>{article.download}</p>
      <p>{article.description}</p>
      <p>table of contents</p>
    </div>
  );
}
