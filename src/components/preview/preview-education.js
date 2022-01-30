import React from "react";

export default function PreviewEducation({ education }) {
  return (
    <div className="preview-education">
      <h3 className="section">Education</h3>
      {education.map((ed) => {
        return (
          <div className="education" key={ed.id}>
            <h4>{ed.degreeName}</h4>
            <p>{ed.schoolName}</p>
            <p>
              {ed.from} - {ed.to}
            </p>
          </div>
        );
      })}
    </div>
  );
}
