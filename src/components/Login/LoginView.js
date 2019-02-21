import React from "react";

const LogInView = ({ onSubmit }) => {
  return (
    <div>

      <form onSubmit={onSubmit}>
        <label>
        
          <input
            style={{ width: "100%" }}
            name="email"
            type="email"
            placeholder="Email"
          />
        </label>
        <label>
        
          <input
            style={{ width: "100%" }}
            name="password"
            type="password"
            placeholder="Password"
          />
        </label>
        <button type="submit" className="signIn" >Log in</button>
      </form>
    </div>
  );
};

export default LogInView;