/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

import ExperienceItem from "./ExperienceItem";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Experience</h2>
        <ExperienceItem />
        <ExperienceItem />
      </div>
    );;
  }
}

export default Experience;
