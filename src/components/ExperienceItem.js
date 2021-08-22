/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class ExperienceList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { company, position, from, to } = this.props.info;
    const { id, onChange } = this.props;

    return (
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Company</label>
          <input
            type="text"
            name="company"
            value={company}
            onChange={(e) => onChange(e, id)}
          />
          <label>Position</label>
          <input
            type="text"
            name="position"
            value={position}
            onChange={(e) => onChange(e, id)}
          />
          <label>From</label>
          <input
            type="text"
            name="from"
            value={from}
            onChange={(e) => onChange(e, id)}
          />
          <label>To</label>
          <input
            type="text"
            name="to"
            value={to}
            onChange={(e) => onChange(e, id)}
          />
        </div>
      </div>
    );
  }
}

export default ExperienceList;
