import React from "react";
import Mentor1 from "../data/Mentor1";
import Mentor2 from "../data/Mentor2";
import Mentor3 from "../data/Mentor3";
import Mentor4 from "../data/Mentor4";
import maleavatar from "./maleavatar.png"

function JediProfile(props) {
  return (
  <div className="card">
    <div className="img-container">
      <img src={maleavatar} style= {{ width:"60%" }} alt="Avatar" href="/Mentors"/>
    </div>
    <div className="content">
      <ul>
        <li style={{ listStyleType: "none" }}>
          <strong className="mentorprofile">Name:</strong> {Mentor1.title+" "+Mentor1.firstName+" "+Mentor1.lastName}
        </li>
        <li>
          <strong className="mentorprofile">Occupation:</strong> {Mentor1.occupation}
        </li>
        <li>
          <strong className="mentorprofile">Rank:</strong> {Mentor1.rank}
        </li>
      </ul>
    </div>

    <div className="card">
    <div className="img-container">
      <img src={maleavatar} style= {{ width:"60%" }} alt="Avatar" href="/Mentors"/>
    </div>
    <div className="content">
      <ul>
        <li style={{ listStyleType: "none" }}>
          <strong className="mentorprofile">Name:</strong> {Mentor2.firstName+" "+Mentor2.lastName}
        </li>
        <li>
          <strong className="mentorprofile">Occupation:</strong> {Mentor2.occupation}
        </li>
        <li>
          <strong className="mentorprofile">Rank:</strong> {Mentor2.rank}
        </li>
      </ul>
    </div>

</div>


<div className="card">
    <div className="img-container">
      <img src={maleavatar} style= {{ width:"60%" }} alt="Avatar" href="/Mentors"/>
    </div>
    <div className="content">
      <ul>
        <li style={{ listStyleType: "none" }}>
          <strong className="mentorprofile">Name:</strong> {Mentor3.firstName+" "+Mentor3.lastName}
        </li>
        <li>
          <strong className="mentorprofile">Occupation:</strong> {Mentor3.occupation}
        </li>
        <li>
          <strong className="mentorprofile">Rank:</strong> {Mentor3.rank}
        </li>
      </ul>
    </div>
</div>

<div className="card">
    <div className="img-container">
      <img src={maleavatar} style= {{ width:"60%" }} alt="Avatar" href="/Mentors"/>
    </div>
    <div className="content">
      <ul>
        <li style={{ listStyleType: "none" }}>
          <strong className="mentorprofile">Name:</strong> {Mentor4.firstName+" "+Mentor4.lastName}
        </li>
        <li>
          <strong className="mentorprofile">Occupation:</strong> {Mentor4.occupation}
        </li>
        <li>
          <strong className="mentorprofile">Rank:</strong> {Mentor4.rank}
        </li>
      </ul>
    </div>
    </div>
</div>
)};

export default JediProfile;