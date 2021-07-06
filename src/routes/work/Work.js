import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import LinkProject from "./components/linkProject";
import "./work.scss";
import PropTypes from "prop-types";

class Work extends Component {
  render() {
    return (
      <div className="wrapperworks">
        <NavLink to="/" className="linkToMainPage">
          Vladysalv.
          <span className="hiddenPartWorksLink">works</span>
        </NavLink>

        <div className="wrapperProjectsList">
          {this.props.assetsWorks.map(({ id, description, link, name }) => (
            <LinkProject
              key={id}
              description={description}
              link={link}
              name={name}
            />
          ))}
        </div>
      </div>
    );
  }
}

Work.propTypes = {
  assetsWorks: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};

export default Work;
