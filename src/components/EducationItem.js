/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class EducationItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { university, major, from, to } = this.props.info;
    const { id, onChange } = this.props;
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>University</label>
          <input
            type="text"
            name="university"
            value={university}
            onChange={(e) => onChange(e, id)}
          />
          <label>Major</label>
          <input
            type="text"
            name="major"
            value={major}
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

export default EducationItem;
