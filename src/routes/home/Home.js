import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./home.scss";
import Particles from "particlesjs";

class Home extends Component {
  componentDidMount() {
    Particles.init({
      selector: ".backgroundEffect",
      maxParticles: 70,
      color: "red",
      sizeVariations: 5,
      speed: 0.2,
    });
  }

  componentWillUnmount() {}

  render() {
    return (
      <>
        <canvas className="backgroundEffect"></canvas>
        <nav>
          <ul className="menuHome">
            <NavLink to="/About">
              <li data-hover="About" className="title AboutPortfolio button">
                <span className="hiddenText">Hello.</span>
              </li>
            </NavLink>
            <NavLink to="/work">
              <li data-hover="Work" className="title worksPortfolio button">
                <span className="hiddenText">I am</span>
              </li>
            </NavLink>
            <NavLink to="/contact">
              <li
                data-hover="Contact"
                className="title contactPortfolio button"
              >
                <span className="hiddenText">Vladyslav</span>
              </li>
            </NavLink>
          </ul>
        </nav>
      </>
    );
  }
}

export default Home;
