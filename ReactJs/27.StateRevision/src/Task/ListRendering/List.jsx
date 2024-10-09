import React from 'react';

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

const FruitList = () => {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
};

export default FruitList;
