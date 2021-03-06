/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

import ExperienceItem from "./ExperienceItem";

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { info, onChange, onClickAdd, onClickDelete } = this.props;
    return (
      <div>
        <h2>Experience</h2>
        <div style={{ width: "40%" }}>
          {info.map((experience) => (
            <ExperienceItem
              key={experience.id}
              id={experience.id}
              info={experience}
              onChange={onChange}
              onClick={onClickDelete}
            />
          ))}
        </div>
        <div>
          <button type="button" onClick={onClickAdd}>
            Add
          </button>
        </div>
      </div>
    );;
  }
}

export default Experience;
