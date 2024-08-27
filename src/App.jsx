import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card/Card'
import Nav from './components/card/Nav'
import Filter from './components/card/Filter'
import Priceslider from './components/card/Priceslider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
      <Filter />
      
    </>
  )
}

export default App
