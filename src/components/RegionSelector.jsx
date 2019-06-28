import React, { Component } from "react";
import { properties } from "../properties";

class RegionSelector extends Component {
  state = {};

  handleChange = event => {
    this.props.setRegion(event.target.value);
  };

  render() {
    return (
      <div>
        <h3>Select the Region:</h3>
        <form>
          <div className="form-group col-5">
            <select className="form-control" onChange={this.handleChange}>
              {properties.region.map(region => (
                <option key={region.key}>{region.name}</option>
              ))}
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default RegionSelector;
