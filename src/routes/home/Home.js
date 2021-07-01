import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./home.scss";
import Particles from "particlesjs";
import RadioToggleLanguage from "./Components/RadioToggleLanguage";
import { withTranslation } from "react-i18next";
import i18next from "i18next";
// import axios from "axios";

class Home extends Component {
  state = {
    language: "en",
  };

  componentDidMount() {
    Particles.init({
      selector: ".backgroundEffect",
      maxParticles: 70,
      color: "red",
      sizeVariations: 5,
      speed: 0.2,
    });

    let value = document.querySelector("html").getAttribute("lang");

    console.log(value);

    // axios("").then((data) => console.log(data));
    // this.setState({ language: value });
  }

  changeLanguageHandler(lang) {
    this.setState({ language: lang });

    i18next.changeLanguage(lang);
  }

  render() {
    let { t } = this.props;
    let { language } = this.state;
    return (
      <>
        <RadioToggleLanguage
          onChangeLanguageHandler={this.changeLanguageHandler.bind(this)}
          currentLanguage={language}
        />
        <canvas className="backgroundEffect"></canvas>
        <main>
          <ul className="menuHome">
            <NavLink to="/About">
              <li
                data-hover={t("Presentation.10")}
                className="title AboutPortfolio button"
              >
                <span className="hiddenText">{t("Presentation.1")}</span>
              </li>
            </NavLink>
            <NavLink to="/work">
              <li
                data-hover={t("Presentation.21")}
                className="title worksPortfolio button"
              >
                <span className="hiddenText">{t("Presentation.2")}</span>
              </li>
            </NavLink>
            <NavLink to="/contact">
              <li
                data-hover={t("Presentation.32")}
                className="title contactPortfolio button"
              >
                <span className="hiddenText">{t("Presentation.3")}</span>
              </li>
            </NavLink>
          </ul>
        </main>
      </>
    );
  }
}

export default withTranslation()(Home);
