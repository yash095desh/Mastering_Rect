import React, {  useState ,useEffect } from "react"
import ThemeBtn from "./Components/Button"
import Card from "./Components/Card";
import ThemeContext from "./Context/Theme";

function App() {
    const [theme,setTheme] = useState("dark")
    const darkMode =()=>{
      setTheme("dark")
    }
    const lightMode =()=>{
      setTheme("light")
    }
    useEffect(()=>{
      document.querySelector('html').classList.remove("dark","light")
      document.querySelector('html').classList.add(theme)
    },[theme])
  return (
   <ThemeContext.Provider value={{theme,darkMode,lightMode}}>

<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>

</ThemeContext.Provider>

  )
}

export default App
