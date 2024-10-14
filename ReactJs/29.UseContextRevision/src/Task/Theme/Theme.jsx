import React from 'react'
import { useTheme } from './ThemeContext';
import './Theme.css'

const Theme = () => {

   const {Theme , toggleTheme} = useTheme();    

  return (
    <div className={`${Theme} f-body`}>
        <h1>Theme</h1>
        <h3>Hello World </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia incidunt impedit iure pariatur itaque cum nostrum ex veritatis, dolor ut architecto laborum voluptate ea facere alias totam nulla aut culpa.</p>
        <button className='button' onClick={toggleTheme}>{Theme} Mode</button>
    </div>
  )
}

export default Theme
