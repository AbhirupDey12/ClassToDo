import React, { useState } from 'react'

function HookCounter2() {

     const initialCount = 0;
     const [count, setCount] = useState(initialCount);

     const Increment5 = () => {
          for (let i = 0; i < 5; i++) {
               setCount(prevCount => prevCount + 1);
          }
     }

     return (
          <div>
               Count : {count}
               <button onClick={() => setCount(initialCount)} > Reset </button>
               <button onClick={prevCount => prevCount + 1} > Increment </button>
               <button onClick={prevCount => prevCount - 1} > Decrement </button>
               <button onClick={Increment5} > Increment 5 </button>
          </div>
     )
}

export default HookCounter2