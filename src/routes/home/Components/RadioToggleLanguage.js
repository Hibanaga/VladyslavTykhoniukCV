import React, { Component } from "react";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";

// import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

class RadioToggleLanguage extends Component {
  state = {
    isActive: false,
  };

  handleClickSelectLanguage = (event) => {
    this.props.onChangeLanguageHandler(event.target.dataset.source);
  };

  toggleDropdownMenu = () => {
    let { isActive } = this.state;

    this.setState({ isActive: !isActive });
  };

  render() {
    let { isActive } = this.state;
    let { currentLanguage } = this.props;
    return (
      <div className="checkboxSelectLanguage">
        <div className="dropDownMenu">
          <div className="dropdownTitle">
            <h2
              // className="selectionCurrentLanguage"
              className={
                isActive
                  ? "selectionCurrentLanguage selectionCurrentLanguageActive"
                  : "selectionCurrentLanguage"
              }
              onClick={this.toggleDropdownMenu}
            >
              {currentLanguage === "en" && "English"}
              {currentLanguage === "ua" && "Ukrainian"}
              {currentLanguage === "pl" && "Polish"}

              <ArrowBackIosOutlinedIcon className="arrowDropDown" />
            </h2>
          </div>

          <ul
            className={isActive ? "hiddenMenu hiddenMenuOpen" : "hiddenMenu"}
            onClick={this.handleClickSelectLanguage}
          >
            <li className="liItemHidden" data-source="en">
              English
            </li>
            <li className="liItemHidden" data-source="ua">
              Ukrainian
            </li>
            <li className="liItemHidden" data-source="pl">
              Polish
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default RadioToggleLanguage;
