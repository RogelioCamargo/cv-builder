/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

import EducationItem from "./EducationItem";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info } = this.props;
    return (
      <div>
        <h2>Experience</h2>
        <div>
          {info.map((education) => (
            <EducationItem info={education} />
          ))}
        </div>
      </div>
    );
  }
}

export default Education;
