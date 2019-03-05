import React from "react";
import Profile from "../data/MyProfile";
import avatar from "./avatar.png"

function PadawanProfile(props) {
  return (
  <div className="padawan-card">
    <div className="img-container">
      <img src={avatar} style= {{ width:"60%" }} alt="Avatar" href="/Profile"/>
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