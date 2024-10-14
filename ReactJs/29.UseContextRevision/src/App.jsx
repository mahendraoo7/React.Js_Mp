import React from 'react'
import './App.css'
import Theme from './Task/Theme/Theme'
import{ ThemeProvider} from './Task/Theme/ThemeContext'

function App() {

  return (
    <div>
      <ThemeProvider>
       <Theme/>
      </ThemeProvider>  

    </div>
  
  )
}

export default App
