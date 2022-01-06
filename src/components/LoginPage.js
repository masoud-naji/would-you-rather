import React, { Component } from "react";
import Users from "./Users";

class LoginPage extends Component {
  render() {
    const { users } = this.props;

    return (
      <div className="loginContainer">
        <div className="loginHeader">
          <div className="header">Would You Rather</div>
          <div className="loginPrompt">Choose user</div>
        </div>
        <div className="userContainer">
          {users &&
            Object.keys(users).map((user, index) => (
              <Users userData={users[user]} key={index} />
            ))}
        </div>
      </div>
    );
  }
}
export default LoginPage;
