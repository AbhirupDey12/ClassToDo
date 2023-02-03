import React, { Component } from "react";
import Form from "./component/Form";
import LifecycleA from "./component/LifecycleA";
import FragmentDemo from "./component/FragmentDemo";
import Table from "./component/Table";
import PureComp from "./component/PureComp";
import ParentComp from "./component/ParentComp";
import RefsDemo from "./component/RefsDemo";
import Input from "./component/Input";
import FocusInput from "./component/FocusInput";
import FRParentInput from "./component/FRParentInput";
import PortalDemo from "./component/PortalDemo";
import Hero from "./component/Hero";
import ErrorBoundary from "./component/ErrorBoundary";
import ClickCounter from "./component/ClickCounter";
import HoverCounter from "./component/HoverCounter";

const style = {
  textAlign: "center"
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div style={style}>

        

        {/* <ClickCounter /> */}
        {/* <HoverCounter /> */}
        {/* <Hero heroName="Batman" />
          <Hero heroName="Superman" />
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ ErrorBoundary> */}
        {/* <PortalDemo /> */}
        {/* <FRParentInput /> */}
        {/* <RefsDemo /> */}
        {/* <ParentComp /> */}
        {/* <Table /> */}
        {/* <FragmentDemo /> */}
      </div>
    )
  }

}

export default App;

