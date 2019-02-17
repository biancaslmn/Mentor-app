import React from "react";
import "../data/mentorData"
import avatar from './avatar.png'; 

const JediProfile = props => (
  <div className="card" id="profileCard">
    <div className="img-container">
      <img src={avatar} style= {{ width:"60%" }} alt="Avatar" href="/Profile" />
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

export default JediProfile;