/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class EducationItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { university, major, from, to } = this.props.info;

    return (
      <div style={{ width: "30%" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>University</label>
          <input type="text" name="university" value={university} />
          <label>Major</label>
          <input type="text" name="major" value={major}/>
          <label>From</label>
          <input type="text" name="from" value={from} />
          <label>To</label>
          <input type="text" name="to" value={to} />
        </div>
      </div>
    );
  }
}

export default EducationItem;
