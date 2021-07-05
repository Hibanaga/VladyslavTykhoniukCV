import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import LinkProject from "./components/linkProject";
import "./work.scss";

export default class Work extends Component {
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
