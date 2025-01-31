import React, { useState } from "react";

export const Playboxes=()=>{


    const winPatterns=[
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8],
    ];

    const [popUp, setPopUp] = useState(null);
    const [turn0, setTurn0] = useState(true); 
    const [disable, setDisabled] = useState(false);

const toggleX = () => {
    setPopUp(turn0 ? "X" : "O");
    setTurn0(!turn0);
    setDisabled(true);
};



    return(
        <>
        <div className="border-2 border-blue-200 text-blue-100 h-35 w-35
                 text-9xl rounded-xl cursor-pointer caret-transparent 
                 text-center transition-transform duration-400 hover:scale-110 active:scale-110" onClick={!disable ? ()=>{toggleX(); disable();}:"error"}>{popUp}</div>
        </>
    )
}

/*export const ResetButton=()=>{

    const[remove,setRemove]=useState("");

    const removeBoxes=()=>{
        setRemove()
    }
    return(
        <div className="text-amber-300 cursor-pointer" onClick={()=>remove(popUp)}>Reset Game</div>
    )
}*/