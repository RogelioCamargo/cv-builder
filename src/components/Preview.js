/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { personal, experience, education } = this.props.info;
    return (
      <div>
        <div style={{ height: "250px" }}>
          <h2>Personal</h2>
          <p>{personal.firstName}</p>
          <p>{personal.lastName}</p>
          <p>{personal.email}</p>
          <p>{personal.phoneNumber}</p>
        </div>
        <div style={{ height: "250px" }}>
          <h2>Experience</h2>
          {experience.map((item) => {
            return (
              <div>
                <p>{item.company}</p>
                <p>{item.position}</p>
                <p>{item.from}</p>
                <p>{item.to}</p>
              </div>
            );
          })}
        </div>
        <div style={{ height: "250px" }}>
          <h2>Education</h2>
          {education.map((item) => {
            return (
              <div>
                <p>{item.university}</p>
                <p>{item.major}</p>
                <p>{item.from}</p>
                <p>{item.to}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Preview;
