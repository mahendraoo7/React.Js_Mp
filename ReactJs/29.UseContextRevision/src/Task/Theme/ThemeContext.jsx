import { createContext, useContext, useState } from "react";
import React from "react";

const ThemeContext = createContext();


const ThemeProvider = ({ children }) => {

       const [Theme, setTheme] = useState('Light');

       const toggleTheme = () => {
     
       setTheme((prevTheme) => (prevTheme === 'Light' ? 'Dark' : 'Light'));
     
     };
    
 return (
     
     <ThemeContext.Provider value={{Theme,toggleTheme}}>
      { children}
     </ThemeContext.Provider>
 );     
};

 const useTheme = () => {
    
  return useContext(ThemeContext);

 };

export {ThemeProvider , useTheme};