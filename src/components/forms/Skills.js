import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { motion, Variants } from "framer-motion";

export default function Skills({
  handleAdd,
  handleDelete,
  handleChange,
  skills,
}) {
  const cardVariants: Variants = {
    offscreen: {
      opacity: 0,
      y: -100,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      delay: 1,
      transition: {
        type: "spring",
        duration: 0.8,
      },
    },
  };
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
          <motion.li
            initial="offscreen"
            whileInView="onscreen"
            variants={cardVariants}
            viewport={{ once: true }}
            className="skills-form form"
            key={id}
          >
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
          </motion.li>
        );
      })}
    </ul>
  );
}
