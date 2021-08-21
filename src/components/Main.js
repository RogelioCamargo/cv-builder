import React, { Component } from "react";

import Education from "./Education";
import Experience from "./Experience";
import General from "./General";
import Preview from "./Preview";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      personal: {
        firstName: "Rogelio",
        lastName: "Camargo",
        email: "rogelio.camargo2016@gmail.com",
        phoneNumber: "(408)981-1510",
      },
      experience: [
        {
          company: "Ohi Technolgies",
          position: "Software Engineer",
          from: "2020",
          to: "Present",
        },
      ],
      education: [
        {
          university: "University of California, San Diego",
          major: "Computer Science",
          from: "2018",
          to: "2020",
        },
      ],
    };
  }

  

  render() {
    const { personal, experience, education } = this.state;

    return (
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <General info={personal} />
          <Experience info={experience} />
          <Education info={education} />
        </div>
        <div style={{ width: "50%" }}>
          <Preview info={this.state} />
        </div>
      </div>
    );
  }
}

export default Main;