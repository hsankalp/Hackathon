import React, { Component } from "react";

import EnvSelector from "./EnvSelector";
import RegionSelector from "./RegionSelector";
import ApiSelector from "./ApiSelector";

class Questions extends Component {
  state = {
    environment: "QA",
    region: "North America",
    apis: new Set()
  };

  setEnv = env => {
    this.setState({
      environment: env
    });
  };

  setRegion = region => {
    this.setState({
      region: region
    });
  };

  setApis = api => {
    this.setState({
      apis: api
    });
  };

  test = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <div className="card">
          <EnvSelector setEnv={this.setEnv} />
        </div>
        <div className="card">
          <RegionSelector setRegion={this.setRegion} />
        </div>
        <div className="card">
          <ApiSelector setApis={this.setApis} />
        </div>
        <button className="btn btn-success" onClick={this.test}>
          Publish API
        </button>
      </div>
    );
  }
}

export default Questions;
