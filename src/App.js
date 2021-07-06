import { Route } from "react-router-dom";
import About from "./routes/about/About";
import Home from "./routes/home/Home";
import Work from "./routes/work/Work";
import Contact from "./routes/contact/Contact";
// import { Transition, TransitionGroup } from "react-transition-group";
import { AnimatedSwitch } from "react-router-transition";
import { bounceTransition, mapStyles } from "./routes/animatedRoutes";
import PropTypes from "prop-types";

import React from "react";

function App({ assets }) {
  return (
    <>
      <AnimatedSwitch
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className="route-wrapper"
      >
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route
          path="/work"
          exact
          component={() => <Work assetsWorks={assets} />}
        />

        <Route path="/contact" exact component={Contact} />
      </AnimatedSwitch>
    </>
  );
}

App.propTypes = {
  assets: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};

export default App;
