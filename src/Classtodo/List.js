import React, { Component } from 'react'

export default class List extends Component {
     render() {
          return (
               <div>
                    <ul>
                         {this.props.items.map((item, index) => (

                              <li key={index} onClick={this.props.deleteTask.bind(this, index)}
                              >
                                   {item}
                              </li>
                         )
                         )}
                    </ul>
               </div>
          )
     }
}
