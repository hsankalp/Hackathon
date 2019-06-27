import React, { Component } from "react";
import { properties } from "../properties";

class EnvSelector extends Component {
  state = {
    env: ""
  };

  handleChange = event => {
    this.setState({ env: event.target.value });
    console.log(event.target.value);
  };

  render() {
    return (
      <div className="card">
        <h3>Select the Environment:</h3>
        <form onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange}>
            {properties.environments.map(env => (
              <option key={env}>{env}</option>
            ))}
          </select>
        </form>
      </div>
    );
  }
}

export default EnvSelector;
