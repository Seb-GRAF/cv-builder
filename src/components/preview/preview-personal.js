import React from "react";

export default function PreviewPersonal({ personal }) {
  return (
    <div className="preview-personal">
      <h3 className="section">Contact</h3>
      <p>{personal.phoneNumber}</p>
      <p>{personal.email}</p>
      <p>{personal.website}</p>
      <div>
        <p>{personal.street}</p>
        <p>
          {personal.postcode} {personal.city}
        </p>
      </div>
    </div>
  );
}
