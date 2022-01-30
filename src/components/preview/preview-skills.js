import React from "react";

export default function PreviewSkills({ skills }) {
  return (
    <div className="preview-skills">
      <h3 className="section">Skills</h3>
      {skills.map((e) => {
        return (
          <p className="skills" key={e.id}>
            {e.skill}
          </p>
        );
      })}
    </div>
  );
}
