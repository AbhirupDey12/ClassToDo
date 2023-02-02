import React, { Component } from 'react'

class Input extends Component {

     constructor(props) {
          super(props)
          this.inputRef = React.createRef()
          console.log("Constructor");
     }

     focusInput() {
          console.log("focus");
          this.inputRef.current.focus() ;
     }

     render() {
          console.log("render");
          return (
               <div>
                    <input type="text" ref={this.inputRef} />
               </div>
          )
     }
}

export default Input ;