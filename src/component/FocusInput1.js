import React , {useEffect , useRef } from 'react' ;

function FocusInput1() {
     
     const inputRef = useRef(null) ;

     useEffect(() => {
          // here , we want to focus the input element

          inputRef.current.focus() ;

     } , []) ;

     return (
          <div>
               <input type="text" ref={inputRef} />
          </div>
     )
}

export default FocusInput1