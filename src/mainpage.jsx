import{Playboxes} from "./boxes";
import React, { useEffect, useState } from "react";

export const Mainpage=()=>{

    const[reset,setReset]=useState(null);

    const resetGame=()=>{
        setReset("")
    }

    return(
        <>
        <div className="h-screen w-screen bg-gradient-to-r from-slate-900 to-slate-700 fixed">
        <div className=" flex items-center justify-center  p-2 my-10">
            <div className="grid grid-cols-3 gap-4 h-auto w-auto ">
                <Playboxes/>
                <Playboxes/>
                <Playboxes/>
                <Playboxes/>
                <Playboxes/>
                <Playboxes/>
                <Playboxes/>
                <Playboxes/>
                <Playboxes/>
            </div>
            
         </div>
        <button className="mx-auto flex my-10 text-black font-bold font-sans bg-blue-300 p-2 border-rounded cursor-pointer 
         caret-transparent rounded-xl transition-transform duration-400 hover:scale-110">Reset Game</button>
         </div>
         
        </>
    )
}