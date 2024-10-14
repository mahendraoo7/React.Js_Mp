import React from 'react'
import './App.css'
import Theme from './Task/Theme/Theme'
import{ ThemeProvider} from './Task/Theme/ThemeContext'
import { CounterProvider } from './Task/NestedCom/CounterProvider'
import { NestedLevel1 } from './Task/NestedCom/NestedWrap'
import MainContext from './Task/Multiple/MainContext'

function App() {

  return (
    <div>
      {/* <ThemeProvider>
       <Theme/>
      </ThemeProvider>   */}

      {/* <CounterProvider>
         <NestedLevel1/>
      </CounterProvider> */}

      <MainContext/>
    </div>
  
  )
}

export default App
