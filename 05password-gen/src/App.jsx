import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const[password,setpassword]=useState("")
  const [length,setlength] = useState(8)
  const [numIncluded,setnumIncluded]=useState(false)
  const [charIncluded,setcharIncluded]=useState(false)
  const passref = useRef(null)
  const genPass = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGNIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(charIncluded){
      str += "@#$%^&*(){}|\][~"
    }
    else if(numIncluded){
      str+= "1234567890"
    }
      for (let i = 0; i < length; i++) {
        pass += str.charAt(Math.floor(Math.random()*str.length+1))
        setpassword(pass)
      }

  },[length,numIncluded,charIncluded])
  const copytoClipbord = useCallback(()=>{
    passref.current?.select();
    passref.current?.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    genPass()
    console.log(charIncluded)
  },[length,numIncluded,charIncluded])

  return (
    <div className="h-screen w-full bg-slate-500 flex justify-center items-center">
      <div className=" bg-white text-black    p-5 rounded-2xl shadow-3xl">
        <h1 className="text-2xl font-bold">Password genrator</h1>
        <div className="m-5 bg-slate-300 rounded-lg">
          <input type="text" name="password" id="" ref={passref} className="p-2 outline-none rounded-lg bg-transparent" value={password} placeholder="generated Password"/>
          <button className=" p-2 bg-blue-500 text-white rounded-lg" onClick={copytoClipbord}>Copy</button>
        </div>
       <div className="m-5">
       <input type="range" name="length" id="" min={6} max={20} value={length} onChange={(e)=>setlength(e.target.value)}/>
        <label htmlFor="length  "className="m-2">Length :{length}</label>
       </div>
        <div className="m-5">
        <input type="checkbox" name="numIncluded" id="" defaultChecked={numIncluded} onChange={()=>setnumIncluded((prev)=>!prev)}/>
        <label htmlFor="" className="m-2">Include Number</label>
        </div>
        <div className="m-5">
        <input type="checkbox" name="charIncluded" id="" defaultChecked={charIncluded}  onChange={()=>setcharIncluded((prev)=>!prev)}/>
        <label htmlFor="" className="m-2">Include Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
