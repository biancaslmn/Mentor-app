import React, { Component } from "react";
import firebase from "./base";
import { withRouter } from "react-router";
//import * as firebase from "firebase"

class LoginForm extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  render() {
  
    return (
      <form>
        
        <input
          type="email"
          placeholder="Email"
          name="email"
      
          //onChange={this.handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
         
          //onChange={this.handleInputChange}
        />
        <button type="submit" className="submit" onSubmit={this.handleSignUp}>Submit</button>
        <button type="submit" className="signIn" onSubmit={this.handleSignUp}>Sign-Up</button>

      </form>
    );
  }
}

export default withRouter (LoginForm);
