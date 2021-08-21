/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { name, email, phoneNumber } = this.props;
    return (
      <div style={{ width: "30%" }}>
        <h2>Personal Information</h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>First Name</label>
          <input type="text" name="firstName" />
          <label>Last Name</label>
          <input type="text" name="lastName" />
          <label>Email</label>
          <input type="text" name="email" />
          <label>Phone Number</label>
          <input type="text" name="phoneNumber" />
        </div>
      </div>
    );
  }
}

export default General;