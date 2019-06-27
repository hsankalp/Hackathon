import React, { Component } from "react";

import EnvSelector from "./EnvSelector";
import RegionSelector from "./RegionSelector";
import ApiSelector from "./ApiSelector";

class Questions extends Component {
  state = {};
  render() {
    return (
      <div>
        <EnvSelector />
        <RegionSelector />
        <ApiSelector />
      </div>
    );
  }
}

export default Questions;
