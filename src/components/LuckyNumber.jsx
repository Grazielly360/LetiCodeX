import style from "./LuckyNumber.module.css";
import { useState } from "react";
export function LuckyNumber() {
    // REACT HOOK - useState()
  const [luckyNumber, setLuckyNumber] = useState(0);  
   

    function handleClick() {
     setLuckyNumber(Math.ceil(Math.random() * 31) + 1);
        console.log("Lucky Number is now " + luckyNumber);
    }        
        return (
        <div className={style.luckyNumber}>
            <h1 className={style.title}>Lucky Number</h1>
            <button className={style.button} onClick={}>Clique!</button>
        </div>
    );
}