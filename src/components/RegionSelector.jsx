import React, { Component } from "react";

class RegionSelector extends Component {
  state = {
    region: [
      {
        name: "North America",
        key: 0
      },
      {
        name: "China",
        key: 1
      },
      {
        name: "All of them",
        key: 3
      }
    ]
  };

  handleChange = event => {
    this.props.setRegion(event.target.value);
  };

  render() {
    return (
      <div>
        <h3>Select the Region:</h3>
        <form onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange}>
            {this.state.region.map(region => (
              <option key={region.key}>{region.name}</option>
            ))}
          </select>
        </form>
      </div>
    );
  }
}

export default RegionSelector;
