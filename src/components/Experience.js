/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

import ExperienceItem from "./ExperienceItem";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info } = this.props;
    return (
      <div>
        <h2>Experience</h2>
        <div>
          {
            info.map(experience => <ExperienceItem info={experience} />)
          }
        </div>
      </div>
    );;
  }
}

export default Experience;
