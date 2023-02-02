import React, { Component } from 'react'

class RefsDemo extends Component {

     constructor(props) {
          super(props)

          // By writing these two lines we are getting access of the entire DOM element
          this.inputRef = React.createRef()

          this.cbRef = null 
          this.setCbRef = (element) => {
               this.cbRef = element ;
          }
     }

     componentDidMount() {
          // this.inputRef.current.focus()
          // console.log(this.inputRef);
          if(this.cbRef) {
               this.cbRef.focus() ;
          }
     }

     clickhandler = () => {
          alert(this.inputRef.current.value);
     }

     render() {
          return (
               <div>
                    <input type="text" ref={this.setCbRef} />
                    <button onClick={this.clickhandler}>Click</button>
               </div>
          )
     }
}

export default RefsDemo