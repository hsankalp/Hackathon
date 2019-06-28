import React, { Component } from "react";

import EnvSelector from "./EnvSelector";
import RegionSelector from "./RegionSelector";
import ApiSelector from "./ApiSelector";

class Questions extends Component {
  state = {
    environment: "QA",
    region: "North America",
    applications: [],
    response: []
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
      applications: Array.from(api)
    });
  };

  componentWillMount = () => {
    this.responseAppStatus = [];
  };

  clickEvent = () => {
    this.state.applications.map(api => this.publishApi(api));
  };

  publishApi = api => {
    let body = JSON.stringify({
      env: this.state.environment,
      region: this.state.region,
      app: api
    });

    this.responseAppStatus = [];

    fetch("http://localhost:8080/api/publish", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: body
    })
      .then(res => res.json())
      .then(data => {
        this.responseAppStatus.push(data);
        this.setState({ response: this.responseAppStatus });
        console.log(this.state.response);
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.applications);

    return (
      <div className="row">
        <div className="col-8">
          <div className="card">
            <EnvSelector setEnv={this.setEnv} />
          </div>
          <div className="card">
            <RegionSelector setRegion={this.setRegion} />
          </div>
          <div className="card">
            <ApiSelector setApis={this.setApis} />
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <h3>Review:</h3>
            <p>Environment: {this.state.environment}</p>
            <p>Region: {this.state.region}</p>
            <p>Applications:</p>
            {this.state.applications.length === 0 ? (
              <p>None Selected</p>
            ) : (
              <ol>
                {this.state.applications.map(app => (
                  <li>{app}</li>
                ))}
              </ol>
            )}
            <div>
              {this.state.response.map(response => (
                <p key={response.application}>
                  {response.application} -> {response.status}
                </p>
              ))}
            </div>
            <button
              className="btn btn-success"
              disabled={this.state.applications.length === 0}
              onClick={this.clickEvent}
            >
              Publish API
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Questions;
