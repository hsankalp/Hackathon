import React, { Component } from "react";

import EnvSelector from "./EnvSelector";
import RegionSelector from "./RegionSelector";
import ApiSelector from "./ApiSelector";

class Questions extends Component {
  state = {
    environment: "QA",
    region: "North America",
    apis: []
  };

  setEnv = env => {
    console.log(env);
    this.setState({
      environment: env
    });
  };

  setRegion = region => {
    console.log(region);
    this.setState({
      region: region
    });
  };

  render() {
    console.log(this.state);

    return (
      <div>
        <div className="card">
          <EnvSelector setEnv={this.setEnv} />
        </div>
        <div className="card">
          <RegionSelector setRegion={this.setRegion} />
        </div>
        <div className="card">
          <ApiSelector />
        </div>
        <button className="btn btn-success">Publish API</button>
      </div>
    );
  }
}

export default Questions;
