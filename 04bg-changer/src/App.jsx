import { useState } from "react"


function App() {
  const [color,setcolor]= useState("rgb(15,23, 42)")

  return (
   <div className="h-screen w-full  flex flex-wrap items-end justify-center" style={{backgroundColor:color}}>
    <div className="bg-transparent p-2 rounded-2xl">
       <button className="bg-red-500 text-white p-2 px-5 rounded-xl mx-3" onClick={()=>setcolor("rgb(239,86,68)")} >Red</button>
       <button className="bg-green-500 text-white p-2 px-5 rounded-xl mx-3" onClick={()=>setcolor("rgb(34,197,94)")} >Green</button>
       <button className="bg-purple-500 text-white p-2 px-5 rounded-xl mx-3" onClick={()=>setcolor("rgb(168,85,247)")} >Purple</button>
       <button className="bg-orange-500 text-white p-2 px-5 rounded-xl mx-3" onClick={()=>setcolor("rgb(249,115,22)")} >Orange</button>
       <button className="bg-pink-500 text-white p-2 px-5 rounded-xl mx-3" onClick={()=>setcolor("rgb(236,72,153)")} >Pink</button>
       </div>
   </div>
  )
}

export default App
