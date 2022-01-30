import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export default function Skills({
  handleAdd,
  handleDelete,
  handleChange,
  skills,
}) {
  return (
    <ul className="skills-list list">
      <div className="title">
        <h2>Skills</h2>
        <FontAwesomeIcon
          className="add"
          onClick={handleAdd}
          icon={faPlusCircle}
        />
        {/* <button className="add" onClick={handleAdd}>
          Add
        </button> */}
      </div>
      {skills.map((e) => {
        const id = e.id;
        return (
          <li className="skills-form form" key={id}>
            <div className="field">
              <label>
                <input
                  name="skill"
                  type="text"
                  autoComplete="no-fill"
                  placeholder="Skill"
                  onChange={(e) => handleChange(e, id)}
                />
              </label>
            </div>
            <FontAwesomeIcon
              className="delete"
              onClick={() => handleDelete(id)}
              icon={faTrashAlt}
            />
            {/* <button className="delete" onClick={() => handleDelete(id)}>
              Delete
            </button> */}
          </li>
        );
      })}
    </ul>
  );
}
