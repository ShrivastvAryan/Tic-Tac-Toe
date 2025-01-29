import{Playboxes} from "./boxes";
import React, { useState } from "react";

export const Mainpage=()=>{

    return(
        <>
        <div className="h-screen bg-gradient-to-r from-slate-900 to-slate-700">
        <div className=" flex items-center justify-center h-auto w-auto relative">
            <div className="grid grid-cols-3 gap-2 h-auto w-auto ">
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
        
         </div>
         
        </>
    )
}