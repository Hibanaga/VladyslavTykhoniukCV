import React, { Component } from "react";
import Particles from "particlesjs";
import "./contact.scss";
import { NavLink } from "react-router-dom";
// import { withTranslation } from "react-i18next";
// import i18next from "i18next";

class Contact extends Component {
  componentDidMount() {
    // let itemLocal = localStorage.getItem("i18nextLng");
    // i18next.changeLanguage(itemLocal);
    Particles.init({
      selector: ".backgroundEffectContact",
      maxParticles: 120,
      color: "red",
      sizeVariations: 5,
      speed: 0.1,
    });
  }

  render() {
    return (
      <>
        <div className="wrapperContact">
          <div className="wrapperBackgroundEffects">
            <canvas className="backgroundEffectContact"></canvas>
          </div>

          <NavLink to="/" className="linkToMainPageContact">
            Vladysalv.
            <span className="hiddenPartContactLink">contact</span>
          </NavLink>

          <h1 className="titleContact">
            I would like to create{" "}
            <span className="strongColorContact">cool things</span> together
            with <span className="strongColorContact">cool people.</span>
          </h1>

          <div className="descriptionContactWrapper">
            <span className="descriptionContact">
              Speaking about the preferred tasks, I'm interested in tasks
              related more to the solution of some tasks than to animation.
            </span>

            <span className="descriptionContact">
              I also really like to discover some new knowledge that will help
              me improve the quality of the code, and I am happy to hear how
              this can be done.
            </span>
          </div>
        </div>
      </>
    );
  }
}

// export default withTranslation()(Contact);

export default Contact;
