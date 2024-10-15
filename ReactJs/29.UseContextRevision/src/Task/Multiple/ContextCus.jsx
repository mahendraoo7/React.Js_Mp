// MyComponent.js
import React, { useContext } from 'react';
import { ThemeContext, UserContext } from './Context';

const Context = () => {

  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  const handleChangeColor = (e) => {
    theme.setColor(e.target.value);
  };

  const handleBgChange = (e) => {
      theme.setBackgorund(e.target.value)
  }

  const handleUserChange = (e) => {
      const {name , value} = e.target ;
      user.setUserInfo({...user , [name] : value})
  }

  return (
    <div style={{ background: theme.background, color: theme.color, padding: '20px', height : '100lvh'  }}>
      <h1>User Information</h1>
      <label >
        Name: <input type="text" name="name" value={user.name} onChange={handleUserChange}/>
      </label>
      <br />
      <label>
        Age: <input type="number" name="age" value={user.age} onChange={handleUserChange}/>
      </label>
      <h2>Theme</h2>
      <label>
        Background Color: <input type="text" value={theme.background} onChange={handleBgChange} />
      </label> 
      <br />
      <label>
        Text Color: <input type="text" value={theme.color} onChange={handleChangeColor} /> 
      </label>

    </div>  
  );
};

export default Context;
