import React, { Component } from "react";
import LoginView from "./LoginView";
import { withRouter } from "react-router";
import googlebase from "../base";

class LogInContainer extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await googlebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/Feed");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return <LoginView onSubmit={this.handleSignUp} />;
  }
}

export default withRouter(LogInContainer);