// MyComponent.js
import React, { useContext } from 'react';
import { ThemeContext, UserContext } from './Context';

const Context = () => {

  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  const handleChange = (e) => {
    theme.color(e.target.value);
  };


  return (
    <div style={{ background: theme.background, color: theme.color, padding: '20px', height : '100lvh'  }}>
      <h1>User Information</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <h2>Theme</h2>
      <p>Background Color: {theme.background}</p>
      <p>Text Color: <input type="text" value={theme.color} onClick={handleChange} /> </p>

    </div>
  );
};

export default Context;
