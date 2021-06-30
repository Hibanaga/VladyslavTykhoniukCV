import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import i18next from "i18next";

import "./index.scss";

class App extends Component {
  handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  render() {
    let { t } = this.props;

    return (
      <div className="App">
        <nav
          style={{ width: "100%", padding: "2rem 0", backgroundColor: "gray" }}
        >
          <button onClick={() => this.handleClick("en")}>English</button>
          <button onClick={() => this.handleClick("ru")}>ru</button>
          {/* <button onClick={() => this.handleClick("chi")}>Chinese</button> */}
        </nav>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>{t("Thanks.1")}</p> <p>{t("Why.1")}</p>
        </header>
      </div>
    );
  }
}

export default withTranslation()(App);
