import React, { Component } from "react";
import { properties } from "../properties";

class RegionSelector extends Component {
  state = {
    region: ""
  };

  handleChange = event => {
    this.setState({ region: event.target.value });
    console.log(event.target.value);
  };

  render() {
    return (
      <div className="card">
        <h3>Select the Region:</h3>
        <form onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange}>
            {properties.regions.map(region => (
              <option key={region}>{region}</option>
            ))}
          </select>
        </form>
      </div>
    );
  }
}

export default RegionSelector;
