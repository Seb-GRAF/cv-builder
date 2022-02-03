import uniqid from "uniqid";
import "../styles/Main.scss";
import PersonalInfo from "./forms/Personal-info";
import Education from "./forms/Education";
import Experience from "./forms/Experience";
import Skills from "./forms/Skills";
import Languages from "./forms/Languages";
import Preview from "./preview/Preview";
import {
  defaultPersonalInfo,
  defaultEducation,
  defaultExperience,
  defaultSkills,
  defaultLanguages,
} from "../components/Default-objects";
import React, { useState, useEffect } from "react";

const Main = () => {
  const [personal, setPersonal] = useState(defaultPersonalInfo);
  const [education, setEducation] = useState(defaultEducation);
  const [experience, setExperience] = useState(defaultExperience);
  const [skills, setSkills] = useState(defaultSkills);
  const [languages, setLanguages] = useState(defaultLanguages);
  const [flip, setFlip] = useState(false);

  const handleChangePersonal = (e) => {
    const { name, value } = e.target;
    setPersonal({
      ...personal,
      [name]: value,
    });
  };

  const handleChangeEducation = (e, id) => {
    const { name, value } = e.target;
    const newEducation = education.map((ed) => {
      if (ed.id === id) {
        return { ...ed, [name]: value };
      }
      return ed;
    });
    setEducation(newEducation);
  };
  const handleAddEduction = () => {
    const newEducation = { id: uniqid() };
    setEducation([...education, newEducation]);
  };
  const handleDeleteEduction = (id) => {
    let filteredEducation = education.filter((e) => e.id !== id);
    setEducation(filteredEducation);
  };

  const handleChangeExperience = (e, id) => {
    const { name, value } = e.target;
    const newExperience = experience.map((exp) => {
      if (exp.id === id) {
        return { ...exp, [name]: value };
      }
      return exp;
    });
    setExperience(newExperience);
  };
  const handleAddExperience = () => {
    const newExperience = { id: uniqid() };
    setExperience([...experience, newExperience]);
  };
  const handleDeleteExperience = (id) => {
    let filteredExperience = experience.filter((e) => e.id !== id);
    setExperience(filteredExperience);
  };

  const handleChangeSkills = (e, id) => {
    const { name, value } = e.target;
    const newSkills = skills.map((exp) => {
      if (exp.id === id) {
        return { ...exp, [name]: value };
      }
      return exp;
    });
    setSkills(newSkills);
  };
  const handleAddSkills = () => {
    const newSkills = { id: uniqid() };
    setSkills([...skills, newSkills]);
  };
  const handleDeleteSkills = (id) => {
    let filteredSkills = skills.filter((e) => e.id !== id);
    setSkills(filteredSkills);
  };

  const handleChangeLanguages = (e, id) => {
    const { name, value } = e.target;
    const newLanguages = languages.map((exp) => {
      if (exp.id === id) {
        return { ...exp, [name]: value };
      }
      return exp;
    });
    setLanguages(newLanguages);
  };
  const handleAddLanguages = () => {
    const newLanguages = { id: uniqid() };
    setLanguages([...languages, newLanguages]);
  };
  const handleDeleteLanguages = (id) => {
    let filteredLanguages = languages.filter((e) => e.id !== id);
    setLanguages(filteredLanguages);
  };

  useEffect(() => {
    const handleFlip = () => {
      setFlip(!flip);
    };
    document.querySelector(".flip").addEventListener("click", handleFlip);

    return () => {
      document.querySelector(".flip").removeEventListener("click", handleFlip);
    };
  }, [flip]);

  let builder;
  let preview;
  if (!flip) {
    builder = "main-builder";
    preview = "preview inactive";
  }
  if (flip) {
    builder = "main-builder inactive";
    preview = "preview";
  }

  return (
    <div className="main">
      <div className={builder}>
        <PersonalInfo handleChange={handleChangePersonal} />
        <Education
          handleAdd={handleAddEduction}
          handleDelete={handleDeleteEduction}
          handleChange={handleChangeEducation}
          education={education}
        />
        <Experience
          handleAdd={handleAddExperience}
          handleDelete={handleDeleteExperience}
          handleChange={handleChangeExperience}
          experience={experience}
        />
        <Skills
          handleAdd={handleAddSkills}
          handleDelete={handleDeleteSkills}
          handleChange={handleChangeSkills}
          skills={skills}
        />
        <Languages
          handleAdd={handleAddLanguages}
          handleDelete={handleDeleteLanguages}
          handleChange={handleChangeLanguages}
          languages={languages}
        />
        <div className="spacer"></div>
      </div>
      <Preview
        className={preview}
        personal={personal}
        education={education}
        experience={experience}
        skills={skills}
        languages={languages}
      />
    </div>
  );
};

export default Main;
