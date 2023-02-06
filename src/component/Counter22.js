import React, { useState } from 'react';
import useCounter from '../Hooks/useCounter';

function Counter22() {

     const [count, increment, decrement, reset] = useCounter();

     return (
          <div>
               
               Count Value = {count}

               <br />

               <button onClick={increment} >Increment</button>
               <button onClick={decrement} >Decrement</button>
               <button onClick={reset}  > Reset</button>

          </div>
     )
}

export default Counter22;