import React from "react";

const SignUpView = ({ onSubmit }) => {
  return (
    <div>
     
      <form onSubmit={onSubmit}>
        <label>
         
          <input
            name="email"
            type="email"
            placeholder="Email"
          />
        </label>
        <label>
            
         
          <input
            name="password"
            type="password"
            placeholder="Password"
          />
        </label>
        <button type="submit" className="signIn" >Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpView;