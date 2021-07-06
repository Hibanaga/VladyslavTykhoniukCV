import React, { Component } from "react";
import Particles from "particlesjs";
import "./contact.scss";
import { NavLink } from "react-router-dom";
import { withTranslation } from "react-i18next";
import i18next from "i18next";

class Contact extends Component {
  state = {
    emailToCopy: "vladtyhoniuk1999@gmail.com",
  };

  componentDidMount() {
    let itemLocal = localStorage.getItem("i18nextLng");
    i18next.changeLanguage(itemLocal);
    Particles.init({
      selector: ".backgroundEffectContact",
      maxParticles: 120,
      color: "red",
      sizeVariations: 5,
      speed: 0.1,
    });
  }

  handleCopyEmail = (event) => {
    navigator.clipboard.writeText(this.state.emailToCopy);
  };

  render() {
    let { t } = this.props;

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
            {t("Contact.1")}{" "}
            <span className="strongColorContact"> {t("Contact.2")}</span>{" "}
            {t("Contact.3")}{" "}
            <span className="strongColorContact"> {t("Contact.4")}</span>
          </h1>

          <div className="descriptionContactWrapper">
            <span className="descriptionContact">{t("Contact.10")}</span>

            <span className="descriptionContact">{t("Contact.20")}</span>

            <span className="descriptionContact">{t("Contact.30")}</span>

            <h2 className="subTitleContact">{t("Contact.40")}</h2>
            <ol className="languageMenu menuIngredients">
              <li className="liItemLanguage">
                {t("Contact.41")}:{" "}
                <span className="yearsStyleColor">{t("Contact.42")};</span>
              </li>

              <li className="liItemLanguage">
                {t("Contact.43")}:{" "}
                <span className="yearsStyleColor">{t("Contact.44")};</span>
              </li>

              <li className="liItemLanguage">
                {t("Contact.45")}:{" "}
                <span className="yearsStyleColor">{t("Contact.46")}.</span>
              </li>
            </ol>
          </div>

          <h2 className="subtitleContactLinks">{t("Contact.50")}:</h2>

          <ul className="menuLinks">
            <li
              // itemToCopy="vladtyhoniuk1999@gmail.com"
              className="liItemSocial linkMail"
              onClick={this.handleCopyEmail}
            ></li>

            <li className="liItemSocial">
              <a
                href="https://www.instagram.com/pagliacci_v/"
                rel="noreferrer"
                target="_blank"
                className="liItemSocial"
              >
                Instagram
              </a>
            </li>
            <li className="liItemSocial">
              <a
                href="https://t.me/hibanaga"
                rel="noreferrer"
                target="_blank"
                className="liItemSocial"
              >
                Telegram
              </a>
            </li>
            <li className="liItemSocial">
              <a
                href="https://www.linkedin.com/in/vlad-tykhoniuk-859865205/"
                rel="noreferrer"
                target="_blank"
                className="liItemSocial"
              >
                LinkedIn
              </a>
            </li>

            <li className="liItemSocial">
              <a
                href="https://github.com/Hibanaga"
                rel="noreferrer"
                target="_blank"
                className="liItemSocial"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default withTranslation()(Contact);

// export default Contact;
