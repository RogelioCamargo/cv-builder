/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { firstName, lastName, email, phoneNumber} = this.props.info;
    const { onChange } = this.props;

    return (
      <div style={{ width: "40%" }}>
        <h2>Personal Information</h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>First Name</label>
          <input
            type="text"
            onChange={onChange}
            name="firstName"
            value={firstName}
          />
          <label>Last Name</label>
          <input
            type="text"
            onChange={onChange}
            name="lastName"
            value={lastName}
          />
          <label>Email</label>
          <input
            type="text"
            onChange={onChange}
            name="email"
            value={email}
          />
          <label>Phone Number</label>
          <input
            type="text"
            onChange={onChange}
            name="phoneNumber"
            value={phoneNumber}
          />
        </div>
      </div>
    );
  }
}

export default General;