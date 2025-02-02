import{Playboxes,ResetButton} from "./boxes";
import React, { useEffect, useState } from "react";

export const Mainpage=()=>{

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
        <ResetButton/>
         </div>
         
        </>
    )
}