import React from "react";
import { Link } from "react-router-dom";
import Weather from "../components/Weather";

function Home() {
  return (
    <div className="container text-center mt-5">
      <div className="jumbotron bg-primary text-white py-5 rounded">
        <h1 className="display-4">Hi, I'm a Web Developer!</h1>
        <p className="lead">I love building web applications that solve real-world problems.</p>
        <Link to="/projects" className="btn btn-light btn-lg mt-3">View My Work</Link>
      </div>
      <Weather />
    </div>
  );
}

export default Home;
