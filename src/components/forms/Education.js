import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { motion, Variants } from "framer-motion";

const Education = ({ handleAdd, handleDelete, handleChange, education }) => {
  const cardVariants: Variants = {
    offscreen: {
      opacity: 0,
      y: -80,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8,
      },
    },
    hidden: {
      y: -300,
      transition: {
        duration: 0.8,
      },
    },
  };
  return (
    <ul className="education-list list">
      <div className="title">
        <h2>Education</h2>
        <FontAwesomeIcon
          className="add"
          onClick={handleAdd}
          icon={faPlusCircle}
        />
      </div>
      {education.map((e) => {
        const id = e.id;
        return (
          <motion.li
            className="education-form form"
            key={id}
            initial="offscreen"
            whileInView="onscreen"
            variants={cardVariants}
            exit="offscreen"
            viewport={{ once: true, amount: 1 }}
          >
            <div className="field">
              <label>
                Degree name
                <input
                  name="degreeName"
                  type="text"
                  autoComplete="no-fill"
                  placeholder="Title of your degree/major"
                  onChange={(e) => handleChange(e, id)}
                />
              </label>
            </div>
            <div className="field">
              <label>
                School name
                <input
                  name="schoolName"
                  type="text"
                  autoComplete="new-password"
                  placeholder="Name of your school"
                  onChange={(e) => handleChange(e, id)}
                />
              </label>
            </div>
            <div className="dual-field">
              <label>
                From
                <input
                  type="text"
                  autoComplete="new-password"
                  name="from"
                  placeholder="From (year)"
                  onChange={(e) => handleChange(e, id)}
                />
              </label>
              <label>
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
            <button className="delete" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </motion.li>
        );
      })}
    </ul>
  );
};

export default Education;
