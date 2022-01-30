import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export default function Languages({
  handleAdd,
  handleDelete,
  handleChange,
  languages,
}) {
  return (
    <ul className="languages-list list">
      <div className="title">
        <h2>Languages</h2>
        <FontAwesomeIcon
          className="add"
          onClick={handleAdd}
          icon={faPlusCircle}
        />
        {/* <button className="add" onClick={handleAdd}>
          Add
        </button> */}
      </div>
      {languages.map((e) => {
        const id = e.id;
        return (
          <li className="languages-form form" key={id}>
            <div className="field">
              <label>
                <input
                  name="language"
                  type="text"
                  autoComplete="no-fill"
                  placeholder="Language"
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
