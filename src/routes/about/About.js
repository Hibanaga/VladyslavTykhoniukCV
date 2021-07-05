import React, { Component } from "react";
import Particles from "particlesjs";
import "./about.scss";
// import { AnimatedSwitch } from "react-router-transition";
// import { bounceTransition, mapStyles } from "../animatedRoutes";
import Typed from "typed.js";
import { NavLink } from "react-router-dom";
import { withTranslation } from "react-i18next";
import i18next from "i18next";

class About extends Component {
  componentDidMount() {
    let itemLocal = localStorage.getItem("i18nextLng");

    i18next.changeLanguage(itemLocal);

    this.particlesInitial();

    let optionsTech = {
      strings: [
        "React/Redux.",
        "HTML5/CSS3.",
        "JavaScript.",
        "Webpack.",
        "Lodash.",
        "Node.js.",
        "Express.js.",
        "Yarn/npm.",
        "MS SQL.",
        "MySQL.",
        "Axios.",
        "Git.",
        "MongoDB.",
      ],
      typeSpeed: 40,
      loop: true,
    };
    new Typed(".techSkills", optionsTech);
  }

  particlesInitial = () => {
    Particles.init({
      selector: ".backgroundEffectAbout",
      maxParticles: 120,
      color: "red",
      sizeVariations: 5,
      speed: 0.1,
    });
  };

  render() {
    let { t } = this.props;

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
            {t("About.1")}{" "}
            <span className="conceptColor"> {t("About.2")} </span>.{" "}
            {t("About.3")}
          </span>

          <span className="descriptionAbout">{t("About.11")}</span>

          <span className="descriptionAbout">
            {t("About.12")} <span className="techSkills"></span>
          </span>

          <span className="descriptionAbout">
            {t("About.13")} <span className="conceptColor">SPA</span>,
            {t("About.14")} <span className="conceptColor">PWA</span>{" "}
            {t("About.15")}
          </span>

          <span className="descriptionAbout">{t("About.16")}</span>

          <a
            href="https://drive.google.com/file/d/1tXGwBJuXbSPBBJ8bQd3uDPEVCLIPo5Q0/view?usp=sharing"
            className="resumeLink"
          >
            {t("About.17")}(pdf)
          </a>
        </div>
      </div>
    );
  }
}

export default withTranslation()(About);
