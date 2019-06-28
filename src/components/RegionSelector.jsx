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
        <form>
          <div className="form-group col-2">
            <select className="form-control" onChange={this.handleChange}>
              {this.state.region.map(region => (
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
