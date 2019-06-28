import React, { Component } from "react";
import { properties } from "../properties";

class EnvSelector extends Component {
  state = {};

  handleChange = event => {
    this.props.setEnv(event.target.value);
  };

  render() {
    return (
      <div>
        <h3>Select the Environment:</h3>
        <form>
          <div className="form-group col-3">
            <select className="form-control" onChange={this.handleChange}>
              {properties.environments.map(env => (
                <option value={env.name} key={env.key}>
                  {env.name}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default EnvSelector;
