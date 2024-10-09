import React from 'react';

const ChildComponent = ({ message }) => {
  return (
    <div>
      <h2>Child Component</h2> {/* Header for the child component */}
      {/* Displaying the message received from the parent */}
      <p>{message}</p>
    </div>
  );
};

export default ChildComponent; // Exporting the ChildComponent
