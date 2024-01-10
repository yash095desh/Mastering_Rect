import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

const Login =()=>{
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const {setuser} = useContext(UserContext)
    function handler(){
        setuser({username,password})
    }
    return(
        <>
        <input type="text" placeholder="username" className="m-3" value={username} onChange={(e)=>{setusername(e.target.value)}}/>
        <input type="text" placeholder="password" className="m-3" value={password} onChange={(e)=>{setpassword(e.target.value)}} />
        <button onClick={handler}>Submit</button>
        </>
    )
}
export default Login;