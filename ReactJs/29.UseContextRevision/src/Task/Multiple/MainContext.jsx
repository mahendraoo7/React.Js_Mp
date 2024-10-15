// App.js
import React from 'react';
import { ThemeContext , UserContext } from './Context';
import Context from './ContextCus';

const MainContext = () => {

  const theme = { background: 'lightblue', color: 'darkblue' };
  const user = { name: 'Mahendra Purohit', age: 18 };

  return (
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={user}>
        <Context />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

export default MainContext;
