import React from "react";
import Profile from "../data/MyProfile";
import maleavatar from "./maleavatar.png"

function PadawanProfile(props) {
  return (
  <div className="card">
    <div className="img-container">
      <img src={maleavatar} style= {{ width:"60%" }} alt="Avatar" href="/Mentors"/>
    </div>
    <div className="content">
      <ul>
        <li style={{ listStyleType: "none" }}>
          <strong>Name:</strong> {Profile.firstName+Profile.lastName}
        </li>
        <li>
          <strong>Occupation:</strong> {Profile.occupation}
        </li>
        <li>
          <strong>Rank:</strong> {Profile.rank}
        </li>
      </ul>
    </div>
</div>
)};

export default PadawanProfile;