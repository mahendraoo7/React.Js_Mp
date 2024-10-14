// DeepNestedComponent.js
import React from 'react';
import { useCounter } from './CounterProvider'; 

const Counter = () => {
  const { count, increment, decrement } = useCounter(); 

  return (
    <div>
      <h3>Current Count: {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
