import React, { Component } from "react";
import { properties } from "../properties";

class ApiSelector extends Component {
  state = {};

  componentWillMount = () => {
    this.apis = new Set();
  };

  handleCheckboxChange = event => {
    let api = event.target.value;
    if (this.apis.has(api)) {
      this.apis.delete(api);
    } else {
      this.apis.add(api);
    }
    this.props.setApis(this.apis);
  };

  render() {
    return (
      <div>
        <h3>Select the Applications:</h3>
        {properties.applications.map(api => (
          <label key={api}>
            <input
              type="checkbox"
              value={api}
              checked={this.state.checked}
              onChange={this.handleCheckboxChange}
            />
            <span>{api}</span>
          </label>
        ))}
      </div>
    );
  }
}

export default ApiSelector;
