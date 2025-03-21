import React from "react";
import SkillList from "../components/SkillList";  

function About() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">About Me</h1>
      <div className="row">
        <div className="col-md-6">
          <h3>Education</h3>
          <p>Bachelor’s in Computer Science - Dalhousie University</p>
        </div>
        <div className="col-md-6">
          <h3>Experience</h3>
          <p>Intern at XYZ Tech - Developed a full-stack web application.</p>
        </div>
      </div>
      <div className="mt-4">
        <h3>Technical Skills</h3>
        <ul className="list-group">
          <li className="list-group-item">JavaScript (React, Node.js)</li>
          <li className="list-group-item">Python, Java</li>
          <li className="list-group-item">HTML, CSS, Bootstrap</li>
          <li className="list-group-item">Firebase, MySQL</li>
        </ul>
      </div>

      {/* Include SkillList */}
      <div className="container my-5">
        <h1>About Me</h1>
        <p>I am a passionate web developer skilled in modern technologies.</p>
        <SkillList /> 
      </div>
    </div>
  );
}

export default About;
