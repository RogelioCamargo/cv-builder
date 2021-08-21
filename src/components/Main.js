import React, { Component } from "react";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      general: {
        firstName: "",
      },
      education: [
        {
          school: "",
        }
      ], 
      experience: [
        {
          company: "",
        }
      ]
    }
  }

  render() {
    return <></>;
  }
}

export default Main;