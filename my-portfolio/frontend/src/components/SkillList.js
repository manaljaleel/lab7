import React, { useState } from "react";
import "./SkillList.css"; // Custom styles

const skillsData = [
  { id: 1, name: "JavaScript", category: "Programming" },
  { id: 2, name: "React", category: "Programming" },
  { id: 3, name: "Node.js", category: "Backend" },
  { id: 4, name: "MongoDB", category: "Database" },
  { id: 5, name: "Python", category: "Programming" },
  { id: 6, name: "CSS", category: "Design" },
  { id: 7, name: "Figma", category: "Design" },
  { id: 8, name: "AWS", category: "Cloud" },
];

function SkillList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter skills based on search and category
  const filteredSkills = skillsData.filter(skill =>
    skill.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === "All" || skill.category === selectedCategory)
  );

  return (
    <div className="container my-5">
      <h2 className="text-center">My Skills</h2>

      {/* Search Input */}
      <input
        type="text"
        className="form-control my-3"
        placeholder="Search skills..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Filter by Category */}
      <div className="btn-group my-3">
        {["All", "Programming", "Backend", "Database", "Design", "Cloud"].map(category => (
          <button
            key={category}
            className={`btn ${selectedCategory === category ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display Skills */}
      <ul className="list-group">
        {filteredSkills.length > 0 ? (
          filteredSkills.map(skill => (
            <li key={skill.id} className="list-group-item">
              {skill.name} <span className="badge bg-secondary">{skill.category}</span>
            </li>
          ))
        ) : (
          <li className="list-group-item text-muted">No matching skills found.</li>
        )}
      </ul>
    </div>
  );
}

export default SkillList;
