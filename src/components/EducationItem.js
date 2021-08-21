/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class EducationItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ width: "30%" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>School Name</label>
          <input type="text" />
          <label>Major</label>
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

export default EducationItem;
