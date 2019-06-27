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

  clickEvent = () => {
    this.state.apis.forEach(api => this.publishApi(api));
  };

  publishApi = api => {
    let body = JSON.stringify({
      env: this.state.environment,
      region: this.state.region,
      app: api
    });

    fetch("http://localhost:8080/api/publish", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: body
    })
      .then(res => res.json())
      .then(data =>
        console.log("Request: " + body + " Response: " + data.status)
      )
      .catch(err => console.log(err));
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
        <button
          className="btn btn-success"
          disabled={this.state.apis.size === 0}
          onClick={this.clickEvent}
        >
          Publish API
        </button>
      </div>
    );
  }
}

export default Questions;
