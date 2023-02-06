import React from 'react';
import { useState, useRef } from 'react';

function HookTimer() {

     const [timer, setTimer] = React.useState(0);
     const intervalRef = useRef();

     React.useEffect(() => {
          intervalRef.current = setInterval(() => {
               setTimer(prev => prev + 1);
          }, 1000)

          return () => {
               clearInterval(intervalRef.current);
          }

     }, []);

     return (
          <div>
               Hook Timer - {timer}  <br />
               <button onClick={() => clearInterval(intervalRef.current)} > Clear Hook Timer </button>
          </div>
     )
}

export default HookTimer;