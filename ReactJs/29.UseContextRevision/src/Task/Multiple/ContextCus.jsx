// MyComponent.js
import React, { useContext } from 'react';
import { ThemeContext, UserContext } from './Context';

const Context = () => {
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <div style={{ background: theme.background, color: theme.color, padding: '20px' }}>
      <h1>User Information</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <h2>Theme</h2>
      <p>Background Color: {theme.background}</p>
      <p>Text Color: {theme.color}</p>
    </div>
  );
};

export default Context;
