import React, { Component } from "react";
import { withRouter } from "react-router";
import googlebase from "../base";
import SignUpView from "./SignUpView";

class SignUpContainer extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await googlebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/LoginForm");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return <SignUpView onSubmit={this.handleSignUp} />;
  }
}

export default withRouter(SignUpContainer);