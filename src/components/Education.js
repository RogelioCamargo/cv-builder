/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

import EducationItem from "./EducationItem";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Education</h2>
        <EducationItem />
        <EducationItem />
      </div>
    );
  }
}

export default Education;
