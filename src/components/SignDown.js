import React, { Component } from "react";
import { withRouter } from "react-router";
import firebase from "./base";



class SignUpContainer extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };
  render() {
    return <SignUp onSubmit={this.handleSignUp} />;
  }
}

const SignUp = ({ onSubmit }) => {
    return (
      <div>
        <h1>Sign up</h1>
        <form onSubmit={onSubmit}>
          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
            />
          </label>
          <label>
              
            Password
            <input
              name="password"
              type="password"
              placeholder="Password"
            />
          </label>
          <button className="signIn" type="submit">Sign Up</button>
        </form>
      </div>
    );
  };
  
  

export default withRouter(SignUpContainer);