// App.js
import React, { useState } from 'react';
import { ThemeContext , UserContext } from './Context';
import Context from './ContextCus';

const MainContext = () => {

  const [theme , setTheme ]=  useState({ background: 'lightblue', color: 'darkblue' });
  const [user ,  setUser ] = useState({ name: 'Mahendra Purohit', age: 18 });

  const setColor = (color) => setTheme({...theme , color})
  const setBackgorund = (background) => setTheme({...theme , background})
  const setUserInfo = (info) => setUser(info)
  

  return (
    <ThemeContext.Provider value={{...theme ,setColor, setBackgorund}}>
      <UserContext.Provider value={{...user, setUserInfo}}>
        <Context />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

export default MainContext;
