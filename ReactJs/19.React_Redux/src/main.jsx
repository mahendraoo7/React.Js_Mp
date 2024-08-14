import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider>
    <App />
    </Provider>
  </StrictMode>,
)
