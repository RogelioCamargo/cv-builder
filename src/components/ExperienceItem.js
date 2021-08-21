/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class ExperienceList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { company, position, from, to } = this.props.info;

    return (
      <div style={{ width: "30%" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Company</label>
          <input type="text" name="company" value={company}/>
          <label>Position</label>
          <input type="text" name="position" value={position} />
          <label>From</label>
          <input type="text" name="from" value={from} />
          <label>To</label>
          <input type="text" name="to" value={to} />
        </div>
      </div>
    );
  }
}

export default ExperienceList;
