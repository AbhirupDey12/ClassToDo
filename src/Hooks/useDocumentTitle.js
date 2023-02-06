import React , { useEffect } from 'react' ;

function useDocumentTitle(count) {

     useEffect(() => {
          document.title = ` The value of count is ${count}`;
     }, [count])

}

export default useDocumentTitle ;