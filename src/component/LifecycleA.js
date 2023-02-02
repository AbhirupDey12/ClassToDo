import React, { Component } from 'react';
import LifecycleB from './LifecycleB';


// LifeCycle Method --> 1. Mounting Cycle

class LifecycleA extends Component {

     constructor(props) {
          super(props)

          this.state = {
               name: "Vishwas"
          }
          console.log('LifecycleA contructor');
     }

     static getDerivedStateFromProps(props, state) {
          console.log('LifeCycleA getderivedstatefromprops')
          return null;
     }

     componentDidMount() {
          console.log('LifeCycleA componentDidMount');
     }

     shouldComponentUpdate() {
          console.log('LifeCycleA shouldComponentUpdate');
          return true;
     }

     getSnapshotBeforeUpdate(prevProps, prevState) {
          console.log('LifeCycleA getSnapshotBeforeUpdate');
          return null ;
     }

     componentDidUpdate() {
          console.log('LifeCycleA componentDidUpdate');
     }

     changeState = () => {
          this.setState({
               name : 'Codevolution'
          })
     }

     render() {
          console.log('Lifecycle A render');
          return (
               <>
                    <div>
                         lifeCycle A
                    </div>
                    <button onClick={this.changeState} > Change State </button>
                    <LifecycleB />
               </>
          )
     }
}

export default LifecycleA;