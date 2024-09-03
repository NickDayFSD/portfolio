/* eslint-disable react/prop-types */
import React from 'react';
import './Home.css';

function Tech({ list }) {
  const categoryItems = list.items.map((item) => <li key={item}>{item}</li>);
  return (
    <div className="stackList">
      <h3>{list.title}</h3>
      <ul className="stackItems">{categoryItems}</ul>
    </div>
  );
}

export default Tech;
