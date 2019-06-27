import React, { Component } from "react";

class EnvSelector extends Component {
  state = {
    environments: [
      {
        name: "QA",
        key: 0
      },
      {
        name: "Perf",
        key: 1
      },
      {
        name: "Stage",
        key: 2
      },
      {
        name: "Prod",
        key: 3
      }
    ]
  };

  handleChange = event => {
    this.props.setEnv(event.target.value);
  };

  render() {
    return (
      <div>
        <h3>Select the Environment:</h3>
        <form onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange}>
            {this.state.environments.map(env => (
              <option key={env.key}>{env.name}</option>
            ))}
          </select>
        </form>
      </div>
    );
  }
}

export default EnvSelector;
