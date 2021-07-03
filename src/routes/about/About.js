import React, { Component } from "react";
import Particles from "particlesjs";
import "./about.scss";
// import { AnimatedSwitch } from "react-router-transition";
// import { bounceTransition, mapStyles } from "../animatedRoutes";

import { NavLink } from "react-router-dom";

class About extends Component {
  componentDidMount() {
    Particles.init({
      selector: ".backgroundEffectAbout",
      maxParticles: 120,
      color: "red",
      sizeVariations: 5,
      speed: 0.1,
    });
  }

  render() {
    return (
      <div className="wrapperAbout">
        <div className="wrapperEffectsAbout">
          <canvas className="backgroundEffectAbout"></canvas>
        </div>

        <NavLink to="/" className="linkToMainPage">
          Vladysalv.
          <span className="hiddenPartAboutLink">About</span>
        </NavLink>

        <h1 className="titleAbout">
          I'm a junior <span className="decorateNameTech">front-end</span>{" "}
          developer
        </h1>

        <div className="wrapperDescriptionAbout">
          <span className="descriptionAbout">
            Hello, my name is Vladyslav Tykhoniuk. I'm 22 years old.
          </span>

          <span className="descriptionAbout">
            I've been doing web development for over a year now, and I'm looking
            for opportunities to put my knowledge into practice.
          </span>

          <span className="descriptionAbout"></span>
        </div>
      </div>
    );
  }
}

export default About;
