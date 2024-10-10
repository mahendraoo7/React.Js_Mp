import React from 'react';
import ChildComponent from './ChildCom'; // Importing the ChildComponent

const ParentComponent = () => {
  // This is a message that we want to pass to the child component
  const message = "Hello from Parent!";

  return (
    <div>
      <h1>Parent Component</h1> {/* Header for the parent component */}
      {/* Rendering ChildComponent and passing the message as a prop */}
      <ChildComponent message={message} />
    </div>
  );
};

export default ParentComponent; // Exporting the ParentComponent
