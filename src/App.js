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
        <FRParentInput />
        {/* <RefsDemo /> */}
        {/* <ParentComp /> */}
        {/* <Table /> */}
        {/* <FragmentDemo /> */}
      </div>
    )
  }

}

export default App;

