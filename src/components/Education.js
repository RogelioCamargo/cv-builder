/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

import EducationItem from "./EducationItem";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info, onChange, onClick } = this.props;
    return (
      <div style={{ width: "40%" }}>
        <h2>Education</h2>
        <div>
          {info.map((education) => (
            <EducationItem
              key={education.id}
              id={education.id}
              info={education}
              onChange={onChange}
            />
          ))}
        </div>
        <div>
          <button type="button" onClick={onClick}>Add</button>
        </div>
      </div>
    );
  }
}

export default Education;
