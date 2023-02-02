import React, { Component , PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import Memo from './Memo'


class ParentComp extends Component {

     constructor(props) {
          super(props)

          this.state = {
               name: "Vishwas"
          }
     }

     componentDidMount() {
          setInterval(() => {
               this.setState({
                    name : "Vishwas"
               })
          }  ,  2000 )
     }

     render() {
          console.log("Parent Comp")
          return (
               <div>
                    Parent Component
                    <Memo name = {this.state.name} />
                    {/* <RegComp name = {this.state.name} /> */}
                    {/* <PureComp name= {this.state.name} /> */}
               </div>
          )
     }
}

export default ParentComp ;