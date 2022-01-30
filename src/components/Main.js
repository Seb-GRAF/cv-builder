import React from "react";
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

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: defaultPersonalInfo,
      education: defaultEducation,
      experience: defaultExperience,
      skills: defaultSkills,
      languages: defaultLanguages,
      flip: false,
    };
  }

  handleRender = () => {};
  handleChangePersonal = (e) => {
    const { name, value } = e.target;
    this.setState({
      personal: {
        ...this.state.personal,
        [name]: value,
      },
    });
  };

  handleChangeEducation = (e, id) => {
    const { name, value } = e.target;
    const newEducation = this.state.education.map((ed) => {
      if (ed.id === id) {
        return { ...ed, [name]: value };
      }
      return ed;
    });
    this.setState({
      education: newEducation,
    });
  };
  handleAddEduction = () => {
    const newEducation = { id: uniqid() };
    this.setState({
      education: [...this.state.education, newEducation],
    });
  };
  handleDeleteEduction = (id) => {
    let filteredEducation = this.state.education.filter((e) => e.id !== id);
    this.setState({
      education: filteredEducation,
    });
  };

  handleChangeExperience = (e, id) => {
    const { name, value } = e.target;
    const newExperience = this.state.experience.map((exp) => {
      if (exp.id === id) {
        return { ...exp, [name]: value };
      }
      return exp;
    });
    this.setState({
      experience: newExperience,
    });
  };
  handleAddExperience = () => {
    const newExperience = { id: uniqid() };
    this.setState({
      experience: [...this.state.experience, newExperience],
    });
  };
  handleDeleteExperience = (id) => {
    let filteredExperience = this.state.experience.filter((e) => e.id !== id);
    this.setState({
      experience: filteredExperience,
    });
  };

  handleChangeSkills = (e, id) => {
    const { name, value } = e.target;
    const newSkills = this.state.skills.map((exp) => {
      if (exp.id === id) {
        return { ...exp, [name]: value };
      }
      return exp;
    });
    this.setState({
      skills: newSkills,
    });
  };
  handleAddSkills = () => {
    const newSkills = { id: uniqid() };
    this.setState({
      skills: [...this.state.skills, newSkills],
    });
  };
  handleDeleteSkills = (id) => {
    let filteredSkills = this.state.skills.filter((e) => e.id !== id);
    this.setState({
      skills: filteredSkills,
    });
  };

  handleChangeLanguages = (e, id) => {
    const { name, value } = e.target;
    const newLanguages = this.state.languages.map((exp) => {
      if (exp.id === id) {
        return { ...exp, [name]: value };
      }
      return exp;
    });
    this.setState({
      languages: newLanguages,
    });
  };
  handleAddLanguages = () => {
    const newLanguages = { id: uniqid() };
    this.setState({
      languages: [...this.state.languages, newLanguages],
    });
  };
  handleDeleteLanguages = (id) => {
    let filteredLanguages = this.state.languages.filter((e) => e.id !== id);
    this.setState({
      languages: filteredLanguages,
    });
  };
  render() {
    const { flip } = this.props;
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
          <PersonalInfo handleChange={this.handleChangePersonal} />
          <Education
            handleAdd={this.handleAddEduction}
            handleDelete={this.handleDeleteEduction}
            handleChange={this.handleChangeEducation}
            education={this.state.education}
          />
          <Experience
            handleAdd={this.handleAddExperience}
            handleDelete={this.handleDeleteExperience}
            handleChange={this.handleChangeExperience}
            experience={this.state.experience}
          />
          <Skills
            handleAdd={this.handleAddSkills}
            handleDelete={this.handleDeleteSkills}
            handleChange={this.handleChangeSkills}
            skills={this.state.skills}
          />
          <Languages
            handleAdd={this.handleAddLanguages}
            handleDelete={this.handleDeleteLanguages}
            handleChange={this.handleChangeLanguages}
            languages={this.state.languages}
          />
          <div className="spacer"></div>
        </div>
        <Preview
          className={preview}
          personal={this.state.personal}
          education={this.state.education}
          experience={this.state.experience}
          skills={this.state.skills}
          languages={this.state.languages}
        />
      </div>
    );
  }
}
