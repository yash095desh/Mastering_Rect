import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card username ="Yash" img ="https://plus.unsplash.com/premium_photo-1661962309696-c429126b237e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <Card username =" Lucky"img ="https://images.unsplash.com/flagged/photo-1556470234-36a5389f905a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVtb3xlbnwwfHwwfHx8MA%3D%3D"/>
    </>
  )
}

export default App
