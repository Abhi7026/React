import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
     <h1>chai aur react</h1>
     <h2>Couter value:5</h2>
     <button
     onClick={addValue }
     >Add Value</button>
     <br />
     <button>remove Value</button>
    </>
  )
}

export default App
