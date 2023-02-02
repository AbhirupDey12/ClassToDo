import React, { Component } from 'react';

class LifecycleB extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: "Vishwas"
    }
    console.log('LifecycleB contructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifeCycleB getderivedstatefromprops')
    return null;
  }

  componentDidMount() {
    console.log('LifeCycleB componentDidMount');
  }


  shouldComponentUpdate() {
    console.log('LifeCycleB shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifeCycleB getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('LifeCycleB componentDidUpdate');
  }

  render() {
    console.log('Lifecycle B render');
    return (
      <div>
        lifeCycle B
      </div>
    )
  }
}

export default LifecycleB;