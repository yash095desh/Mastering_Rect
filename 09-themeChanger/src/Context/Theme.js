import { createContext } from "react";

const ThemeContext = createContext({
    theme :"dark",
    darkMode : ()=>{},
    lightMode : ()=>{},
})

export default ThemeContext