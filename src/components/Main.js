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
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      },
      experience: [
        {
          id: Math.random().toString(36).substr(2, 9),
          company: "",
          position: "",
          from: "",
          to: "",
        },
      ],
      education: [
        {
          id: Math.random().toString(36).substr(2, 9),
          university: "",
          major: "",
          from: "",
          to: "",
        },
      ],
    };
  }

  handleChangePersonal = (e) => {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      ...prevState,
      personal: {
        ...prevState.personal,
        [name]: value,
      },
    }));
  };

  handleChangeExperience = (e, id) => {
    const { name, value } = e.target;

    this.setState((prevState) => {
      const updatedExperience = prevState.experience.map((item) => {
        if (id === item.id) {
          return { ...item, [name]: value };
        }
        return item;
      });
      return { ...prevState, experience: [...updatedExperience] };
    });
  };

  handleClickExperienceAdd = () => {
    this.setState((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          id: Math.random().toString(36).substr(2, 9),
          company: "",
          position: "",
          from: "",
          to: "",
        },
      ],
    }));
  };

  handleClickExperienceDelete = (id) => {
    this.setState((prevState) => {
      const updatedExperience = prevState.experience.filter(
        (item) => item.id !== id
      );
      return { ...prevState, experience: updatedExperience };
    });
  };

  handleChangeEducation = (e, id) => {
    const { name, value } = e.target;

    this.setState((prevState) => {
      const updatedEducation = prevState.education.map((item) => {
        if (id === item.id) {
          return { ...item, [name]: value };
        }
        return item;
      });
      return { ...prevState, education: [...updatedEducation] };
    });
  };

  handleClickEducationAdd = () => {
    this.setState((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id: Math.random().toString(36).substr(2, 9),
          university: "",
          major: "",
          from: "",
          to: "",
        },
      ],
    }));
  };

  handleClickEducationDelete = (id) => {
    this.setState((prevState) => {
      const updatedEducation = prevState.education.filter(
        (item) => item.id !== id
      );
      return { ...prevState, education: updatedEducation };
    });
  };

  render() {
    const { personal, experience, education } = this.state;

    return (
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <General info={personal} onChange={this.handleChangePersonal} />
          <Experience
            info={experience}
            onChange={this.handleChangeExperience}
            onClickAdd={this.handleClickExperienceAdd}
            onClickDelete={this.handleClickExperienceDelete}
          />
          <Education
            info={education}
            onChange={this.handleChangeEducation}
            onClickAdd={this.handleClickEducationAdd}
            onClickDelete={this.handleClickEducationDelete}
          />
        </div>
        <div style={{ width: "50%" }}>
          <Preview info={this.state} />
        </div>
      </div>
    );
  }
}

export default Main;