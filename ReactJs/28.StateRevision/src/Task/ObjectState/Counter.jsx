import React, { useState } from 'react';

const Counter = () => {
  // Initialize the state with an object
  const [state, setState] = useState({ count: 0 });

  // Function to increment the count
  const increment = () => {
    setState(prevState => ({ count: prevState.count + 1 }));
  };

  // Function to decrement the count
  const decrement = () => {
    setState(prevState => ({ count: Math.max(0, prevState.count - 1) }));
  };

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
