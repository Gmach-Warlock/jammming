import { useState } from 'react'
import './App.css'
import './global.css'
import HeaderSection from './Components/HeaderSection/HeaderSection'
import MainSection from './Components/MainSection/MainSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderSection />
      <MainSection />
    </>
  )
}

export default App
