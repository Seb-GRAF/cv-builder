import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export default function Experience({
  handleAdd,
  handleDelete,
  handleChange,
  experience,
}) {
  return (
    <ul className="experience-list list">
      <div className="title">
        <h2>Experience</h2>
        <FontAwesomeIcon
          className="add"
          onClick={handleAdd}
          icon={faPlusCircle}
        />
        {/* <button className="add" onClick={handleAdd}>
          Add
        </button> */}
      </div>
      {experience.map((e) => {
        const id = e.id;
        return (
          <li className="experience-form form" key={id}>
            <div className="field">
              <label>
                Position title
                <input
                  name="positionTitle"
                  type="text"
                  autoComplete="new-password"
                  placeholder="Title of your position"
                  onChange={(e) => handleChange(e, id)}
                />
              </label>
            </div>
            <div className="field">
              <label>
                Company name
                <input
                  name="companyName"
                  type="text"
                  autoComplete="new-password"
                  placeholder="Name of the company"
                  onChange={(e) => handleChange(e, id)}
                />
              </label>
            </div>
            <div className="dual-field">
              <label htmlFor="from">
                From
                <input
                  type="text"
                  autoComplete="new-password"
                  name="from"
                  placeholder="From (year)"
                  onChange={(e) => handleChange(e, id)}
                />
              </label>
              <label htmlFor="lastName">
                To
                <input
                  type="text"
                  autoComplete="new-password"
                  name="to"
                  placeholder="To (year)"
                  onChange={(e) => handleChange(e, id)}
                />
              </label>
            </div>
            <div className="field">
              <label>
                Description of your position
                <textarea
                  name="description"
                  type="text"
                  autoComplete="new-password"
                  placeholder="Description of your position"
                  onChange={(e) => handleChange(e, id)}
                />
              </label>
            </div>
            <button className="delete" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
