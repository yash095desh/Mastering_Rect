import { useEffect, useState } from "react";
import { useRouteLoaderData } from "react-router-dom";


function GitHub(){
    const data = useRouteLoaderData('root')
    console.log(data)
   
return(
    <>
    <div className="h-[300px] bg-slate-200 flex  justify-center items-center">
        <img src={data.avatar_url} className="h-[250px] rounded-xl m-5" alt="gitthub profile" />
        <h3 className=" text-xl">Followers:{data.followers}</h3>

    </div>
    </>
)
}
export default GitHub;
export const getInfo = async function({params}){
    const username = params.username
    const res = await fetch(`https://api.github.com/users/${username}`)
    const data = await(res.json())
    console.log(data)

     return data
}