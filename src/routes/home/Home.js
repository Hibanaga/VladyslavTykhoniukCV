import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./home.scss";
import Particles from "particlesjs";
import RadioToggleLanguage from "./Components/RadioToggleLanguage";
import { withTranslation } from "react-i18next";
import i18next from "i18next";
import routes from "../routes";
// import axios from "axios";

class Home extends Component {
  state = {
    language: "en",
    speedPatricles: 0.1,
  };

  componentDidMount() {
    let itemLocal = localStorage.getItem("i18nextLng");

    if (itemLocal) {
      this.setState({ language: itemLocal });
      i18next.changeLanguage(itemLocal);
    }

    if (!itemLocal) {
      i18next.changeLanguage("en");
    }

    this.partialInitial();
  }

  partialInitial = () => {
    Particles.init({
      selector: ".backgroundEffect",
      maxParticles: 70,
      color: "red",
      sizeVariations: 5,
      speed: 0.1,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    let { language } = this.state;

    prevState.language !== this.state.language &&
      localStorage.setItem("i18nextLng", language);
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
        <div className="wrapperEffectsHome">
          <RadioToggleLanguage
            onChangeLanguageHandler={this.changeLanguageHandler.bind(this)}
            currentLanguage={language}
          />
          <canvas className="backgroundEffect"></canvas>
        </div>
        <main>
          <ul className="menuHome">
            <NavLink to={routes.about}>
              <li
                data-hover={t("Presentation.10")}
                className="title AboutPortfolio button"
              >
                <span className="hiddenText">{t("Presentation.1")}</span>
              </li>
            </NavLink>

            <NavLink to={routes.work}>
              <li
                data-hover={t("Presentation.21")}
                className="title worksPortfolio button works"
              >
                <span className="hiddenText worksHidden">
                  {t("Presentation.2")}
                </span>
              </li>
            </NavLink>
            <NavLink to={routes.contact}>
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
