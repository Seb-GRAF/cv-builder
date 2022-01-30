import React from "react";

export default function PreviewExperience({ experience }) {
  return (
    <div className="preview-experience">
      {experience.map((exp) => {
        return (
          <div className="experience" key={exp.id}>
            <div className="title">
              <h3>{exp.positionTitle}</h3> - <h4>{exp.companyName}</h4>
            </div>
            <p className="fromTo">
              {exp.from} to {exp.to}
            </p>
            <p>{exp.description}</p>
          </div>
        );
      })}
    </div>
  );
}
