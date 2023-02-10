import React from 'react';
import { useState } from 'react';


export default function Counter() {

    const [counter,setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);

  return (
    <div> 
        <div>
        <button onClick={()=> setCounter(counter +1)}>+1pt</button>
        <button onClick={()=> setCounter(counter +2)}>+2pts</button>
        <button onClick={()=> setCounter(counter +3)}>+3pts</button>
        <button onClick={()=> setCounter(counter -1)}>Correction -1pt</button>
        <button onClick={()=> setCounter(counter -2)}>Correction -2pt</button>
        <button onClick={()=> setCounter(counter -3)}>Correction -3pt</button>
        <p>Team A : {counter} points</p>
        </div>
        <h2>
            {counter > counter2 ? "Team A gagne " : "Team B gagne"}
        </h2>
        <div>
        <button onClick={()=> setCounter2(counter2 +1)}>+1pt</button>
        <button onClick={()=> setCounter2(counter2 +2)}>+2pts</button>
        <button onClick={()=> setCounter2(counter2 +3)}>+3pts</button>
        <button onClick={()=> setCounter2(counter2 -1)}>Correction -1pt</button>
        <button onClick={()=> setCounter2(counter2 -2)}>Correction -2pt</button>
        <button onClick={()=> setCounter2(counter2 -3)}>Correction -3pt</button>
        <p>Team B : {counter2} points</p>
        </div>
    </div>
  )
}
