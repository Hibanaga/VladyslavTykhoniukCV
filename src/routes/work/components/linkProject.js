import React from "react";
import PropTypes from "prop-types";

function linkProject({ description, link, name }) {
  return (
    <a href={link} className="projectInfoCard">
      <h2 className="titleProject">{name}</h2>
      <span className="descriptionProject">{description}</span>
    </a>
  );
}

linkProject.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default linkProject;
