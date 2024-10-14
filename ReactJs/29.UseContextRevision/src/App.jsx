import React from 'react'
import './App.css'
import Theme from './Task/Theme/Theme'
import{ ThemeProvider} from './Task/Theme/ThemeContext'
import { CounterProvider } from './Task/NestedCom/CounterProvider'
import { NestedLevel1 } from './Task/NestedCom/NestedWrap'

function App() {

  return (
    <div>
      {/* <ThemeProvider>
       <Theme/>
      </ThemeProvider>   */}

      <CounterProvider>
         <NestedLevel1/>
      </CounterProvider>

    </div>
  
  )
}

export default App
