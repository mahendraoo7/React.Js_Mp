import React, { useState } from 'react';

const ToggleButton = () => {
  // Define the state variable and the function to update it
  const [isOn, setIsOn] = useState(false);

  // Function to toggle the state
  const toggle = () => {
    setIsOn(prevIsOn => !prevIsOn);
  };

  return (
    <div>
      <button onClick={toggle}>
        {isOn ? 'ON' : 'OFF'}
      </button>
      <p>The button is currently {isOn ? 'ON' : 'OFF'}</p>
    </div>
  );
};

export default ToggleButton;
