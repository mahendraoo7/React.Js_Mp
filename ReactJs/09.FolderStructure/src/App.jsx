import './App.css'
import Navbar from './components/Navbar'
import { box } from './components/Navbar'
import Accordions from './components/Accordian'
import Cards from './components/Cards'
import Example from './components/Menus'

function App() {

  return (
    <>
      <h1 style={box[0]}>This is App Page</h1>
      <Navbar />
      <Accordions/>
      <Example/>
    </>
  )
}

export default App