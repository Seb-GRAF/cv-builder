import React from "react";

export default function PreviewLanguages({ languages }) {
  return (
    <div className="preview-languages">
      <h3 className="section">Languages</h3>
      {languages.map((e) => {
        return (
          <p className="language" key={e.id}>
            {e.language}
          </p>
        );
      })}
    </div>
  );
}
