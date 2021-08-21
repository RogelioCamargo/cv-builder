/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class ExperienceList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ width: "30%" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Company Name</label>
          <input type="text" />
          <label>Position</label>
          <input type="text" />
          <label>From</label>
          <input type="text" />
          <label>To</label>
          <input type="text" />
        </div>
      </div>
    );
  }
}

export default ExperienceList;
