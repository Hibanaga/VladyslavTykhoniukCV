import React from "react";

export default function linkProject({ description, link, name }) {
  return (
    <a href={link} className="projectInfoCard">
      <h2 className="titleProject">{name}</h2>
      <span className="descriptionProject">{description}</span>
    </a>
  );
}
