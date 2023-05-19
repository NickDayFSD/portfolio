/* eslint-disable react/prop-types */
import React from 'react';
import './Home.css';

function Tech({ list }) {
  const categoryItems = list.items.map((item) => <li key={item}>{item}</li>);
  return (
    <>
      <h3>{list.title}</h3>
      <ul className="stack">{categoryItems}</ul>
    </>
  );
}

export default Tech;
