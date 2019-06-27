import React, { Component } from "react";
import { properties } from "../properties";

class ApiSelector extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <h3>Select the APIs:</h3>
        {properties.applications.map(api => (
          <label>
            <input
              type="checkbox"
              // checked={this.state.checked}
              // onChange={this.handleCheckboxChange}
            />
            <span>{api}</span>
          </label>
        ))}
      </div>
    );
  }
}

export default ApiSelector;
