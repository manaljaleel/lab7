import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/projects") // ✅ FIXED
      .then((response) => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setError("Failed to load projects.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center">My Projects</h1>

      {loading ? (
        <p className="text-center">Loading projects...</p>
      ) : error ? (
        <p className="text-center text-danger">{error}</p>
      ) : (
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-md-4">
              <div className="card project-card">
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">By {project.author || "Unknown"}</h6>
                  <p className="card-text">{project.description}</p>
                  <p>
                    <strong>Languages:</strong>{" "}
                    {project.languages ? project.languages.join(", ") : "N/A"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;
