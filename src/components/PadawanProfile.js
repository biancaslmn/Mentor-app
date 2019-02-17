import React from "react";
import "../data/menteeData"
import maleavatar from "./maleavatar.png"

const PadawanProfile = props => (
  <div className="card">
    <div className="img-container">
      <img src={maleavatar} style= {{ width:"60%" }} alt="Avatar" href="/Mentors"/>
    </div>
    <div className="content">
      <ul>
        <li style={{ listStyleType: "none" }}>
          <strong>Name:</strong> {props.firstName+props.lastName}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Rank:</strong> {props.rank}
        </li>
      </ul>
    </div>
</div>
);

export default PadawanProfile;