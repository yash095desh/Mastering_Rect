import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(10)
  function add(){
    setCounter(counter+1)
  }
  function sub(){
    if(counter>0){
      setCounter(counter-1)
    }
  }

  return (
    <>
    <div>
      <button onClick={add}>ADD</button>
      <h1>Counter: {counter}</h1>
      <button onClick={sub}>SUB</button> </div>
    </>
  )
}

export default App
