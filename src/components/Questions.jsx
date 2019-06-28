import React, { Component } from "react";

import EnvSelector from "./EnvSelector";
import RegionSelector from "./RegionSelector";
import ApiSelector from "./ApiSelector";

import { properties } from "../properties";

class Questions extends Component {
  state = {
    environment: "QA",
    region: "North America",
    applications: [],
    response: [],
    pending: false
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
    this.responseAppStatus = [];

    this.setState({
      response: [],
      pending: true
    });

    let body = JSON.stringify({
      env: this.state.environment,
      region: this.state.region,
      app: api
    });

    fetch(properties.baseUrl, {
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
        this.setState({ response: this.responseAppStatus, pending: false });
      })
      .catch(err => console.log(err));
  };

  render() {
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
          <button
            className="btn btn-success"
            disabled={this.state.applications.length === 0}
            onClick={this.clickEvent}
          >
            Publish API
          </button>
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
                  <li key={app}>{app}</li>
                ))}
              </ol>
            )}
          </div>
          {this.state.response.length === 0 &&
          this.state.pending === false ? null : (
            <div className="card">
              {this.state.response.length === 0 &&
              this.state.pending === true ? (
                <h4 className="pending">Processing . . . </h4>
              ) : (
                <h4>Response:</h4>
              )}
              {this.state.response.map(response => (
                <p key={response.application}>
                  {response.application} -> {response.status}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Questions;
