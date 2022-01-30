import React from "react";
import PreviewPersonal from "./preview-personal";
import PreviewEducation from "./preview-education";
import PreviewExperience from "./preview-experience";
import PreviewSkills from "./preview-skills";
import PreviewLanguages from "./preview-languages";
import "../../styles/Preview.scss";

export default function Preview({
  className,
  personal,
  education,
  experience,
  skills,
  languages,
}) {
  return (
    <div className={className}>
      <div className="preview-main">
        <div className="left">
          <PreviewPersonal personal={personal} />
          <PreviewEducation education={education} />
          <PreviewSkills skills={skills} />
          <PreviewLanguages languages={languages} />
        </div>
        <div className="right">
          <div className="top">
            <h1>
              {personal.firstName} {personal.lastName}
            </h1>
            <h2>{personal.jobTitle}</h2>
          </div>
          <h2 className="section">Objective</h2>
          <p className="profile">{personal.profile}</p>
          <h2 className="section">Work Experience</h2>
          <PreviewExperience experience={experience} />
        </div>
      </div>
      <div className="spacer"></div>
    </div>
  );
}
