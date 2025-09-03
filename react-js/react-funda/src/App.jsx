import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HeaderDiv from './header'
import FooterDiv from './Footer'
import Greeting from './Greeting'


// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <HeaderDiv/>
     <FooterDiv /> */}

     <Greeting/>
    </>
  )
}

export default App
